<?php

namespace App\Http\Controllers;

use App\Http\Requests\MedicineGenericRequest;
use App\Http\Resources\MedicineGenericResource;
use App\Models\MedicineGeneric;
use Inertia\Inertia;

class MedicineGenericController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(MedicineGeneric::class , 'medicine_type');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $medicineGenerics = MedicineGenericResource::collection(
            MedicineGeneric::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('generic_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('MedicineGenerics/Index', compact('medicineGenerics', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('MedicineGenerics/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(MedicineGenericRequest $request)
    {
        MedicineGeneric::create($request->validated());
        session()->flash('success', "Medicine Type has been created successfully.");
        return redirect()->route('medicine-generics.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Inertia\Response
     */
    public function show(MedicineGeneric $medicineGeneric)
    {
        return Inertia::render('MedicineGenerics/Show', compact('medicineGeneric'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Inertia\Response
     */
    public function edit(MedicineGeneric $medicineGeneric)
    {
        return Inertia::render('MedicineGenerics/Edit', compact('medicineGeneric'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(MedicineGenericRequest $request, MedicineGeneric $medicineGeneric): \Illuminate\Http\RedirectResponse
    {
        $medicineGeneric->update($request->validated());
        session()->flash('success', "Medicine Type has been updated successfully.");
        return redirect()->route('medicine-generics.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(MedicineGeneric $medicineGeneric)
    {
        $medicineGeneric->delete();
        session()->flash('success', "Medicine Type has been deleted successfully.");
        return back();
    }

    public function toggleStatus(MedicineGeneric $medicineGeneric){
        $this->authorize('toggleStatus', $medicineGeneric);
        $medicineGeneric->update([
            'status' => !$medicineGeneric->status
        ]);
        session()->flash('success', "Medicine Type has been ".($medicineGeneric->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
