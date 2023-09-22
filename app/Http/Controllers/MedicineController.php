<?php

namespace App\Http\Controllers;

use App\Http\Requests\MedicineRequest;
use App\Http\Resources\MedicineCategoryResource;
use App\Http\Resources\MedicineGenericResource;
use App\Http\Resources\MedicineResource;
use App\Http\Resources\MedicineTypeResource;
use App\Models\Medicine;
use App\Models\MedicineCategory;
use App\Models\MedicineGeneric;
use App\Models\MedicineType;
use Inertia\Inertia;

class MedicineController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Medicine::class , 'medicine');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $medicines = MedicineResource::collection(
            Medicine::query()
                ->with('medicineCategory','medicineGeneric','medicineType')
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('medicine_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Medicines/Index', compact('medicines', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $medicineCategories = MedicineCategoryResource::collection(MedicineCategory::active()->get());
        $medicineGenerics = MedicineGenericResource::collection(MedicineGeneric::active()->get());
        $medicineTypes = MedicineTypeResource::collection(MedicineType::active()->get());

        return Inertia::render('Medicines/Create', compact('medicineCategories', 'medicineGenerics', 'medicineTypes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(MedicineRequest $request)
    {
        Medicine::create($request->validated());
        session()->flash('success', "Medicine has been created successfully.");
        return redirect()->route('medicines.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medicine  $medicine
     * @return \Inertia\Response
     */
    public function show(Medicine $medicine)
    {
        $medicine->load('medicineCategory','medicineGeneric','medicineType');

        return Inertia::render('Medicines/Show', ['medicine' => new MedicineResource($medicine)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Medicine  $medicine
     * @return \Inertia\Response
     */
    public function edit(Medicine $medicine)
    {
        $medicineCategories = MedicineCategoryResource::collection(MedicineCategory::active()->get());
        $medicineGenerics = MedicineGenericResource::collection(MedicineGeneric::active()->get());
        $medicineTypes = MedicineTypeResource::collection(MedicineType::active()->get());
        $medicine = new MedicineResource($medicine);
        return Inertia::render('Medicines/Edit', compact('medicine', 'medicineCategories', 'medicineGenerics' , 'medicineTypes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(MedicineRequest $request, Medicine $medicine): \Illuminate\Http\RedirectResponse
    {
        $medicine->update($request->validated());
        session()->flash('success', "Medicine has been updated successfully.");
        return redirect()->route('medicines.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Medicine $medicine)
    {
        $medicine->delete();
        session()->flash('success', "Medicine has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Medicine $medicine){
        $this->authorize('toggleStatus', $medicine);
        $medicine->update([
            'status' => !$medicine->status
        ]);
        session()->flash('success', "Medicine has been ".($medicine->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
