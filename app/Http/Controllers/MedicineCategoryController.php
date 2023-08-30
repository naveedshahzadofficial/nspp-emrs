<?php

namespace App\Http\Controllers;

use App\Models\MedicineCategory;
use App\Http\Requests\MedicineCategoryRequest;
use App\Http\Resources\MedicineCategoryResource;
use Inertia\Inertia;

class MedicineCategoryController extends Controller
{
   public function __construct()
    {
        $this->authorizeResource(MedicineCategory::class , 'medicine_category');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $medicineCategories = MedicineCategoryResource::collection(
            MedicineCategory::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('category_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('MedicineCategories/Index', compact('medicineCategories', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('MedicineCategories/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(MedicineCategoryRequest $request)
    {
        MedicineCategory::create($request->validated());
        session()->flash('success', "Medicine Category has been created successfully.");
        return redirect()->route('medicine-categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Inertia\Response
     */
    public function show(MedicineCategory $medicineCategory)
    {
        return Inertia::render('MedicineCategories/Show', compact('medicineCategory'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Inertia\Response
     */
    public function edit(MedicineCategory $medicineCategory)
    {
        return Inertia::render('MedicineCategories/Edit', compact('medicineCategory'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(MedicineCategoryRequest $request, MedicineCategory $medicineCategory): \Illuminate\Http\RedirectResponse
    {
        $medicineCategory->update($request->validated());
        session()->flash('success', "Medicine Category has been updated successfully.");
        return redirect()->route('medicine-categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(MedicineCategory $medicineCategory)
    {
        $medicineCategory->delete();
        session()->flash('success', "Medicine Category has been deleted successfully.");
        return back();
    }

    public function toggleStatus(MedicineCategory $medicineCategory){
        $this->authorize('toggleStatus', $medicineCategory);
        $medicineCategory->update([
            'status' => !$medicineCategory->status
        ]);
        session()->flash('success', "Medicine Category has been ".($medicineCategory->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
