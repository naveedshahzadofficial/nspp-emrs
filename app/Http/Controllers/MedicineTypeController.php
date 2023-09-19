<?php

namespace App\Http\Controllers;

use App\Http\Requests\MedicineTypeRequest;
use App\Http\Resources\MedicineTypeResource;
use App\Models\MedicineType;
use Inertia\Inertia;

class MedicineTypeController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(MedicineType::class , 'medicine_type');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $medicineTypes = MedicineTypeResource::collection(
            MedicineType::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('type_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('MedicineTypes/Index', compact('medicineTypes', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('MedicineTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(MedicineTypeRequest $request)
    {
        MedicineType::create($request->validated());
        session()->flash('success', "Medicine Type has been created successfully.");
        return redirect()->route('medicine-types.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Inertia\Response
     */
    public function show(MedicineType $medicineType)
    {
        return Inertia::render('MedicineTypes/Show', compact('medicineType'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Inertia\Response
     */
    public function edit(MedicineType $medicineType)
    {
        return Inertia::render('MedicineTypes/Edit', compact('medicineType'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(MedicineTypeRequest $request, MedicineType $medicineType): \Illuminate\Http\RedirectResponse
    {
        $medicineType->update($request->validated());
        session()->flash('success', "Medicine Type has been updated successfully.");
        return redirect()->route('medicine-types.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(MedicineType $medicineType)
    {
        $medicineType->delete();
        session()->flash('success', "Medicine Type has been deleted successfully.");
        return back();
    }

    public function toggleStatus(MedicineType $medicineType){
        $this->authorize('toggleStatus', $medicineType);
        $medicineType->update([
            'status' => !$medicineType->status
        ]);
        session()->flash('success', "Medicine Type has been ".($medicineType->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
