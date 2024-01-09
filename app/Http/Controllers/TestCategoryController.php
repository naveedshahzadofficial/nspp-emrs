<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestCategoryRequest;
use App\Http\Resources\TestCategoryResource;
use App\Models\TestCategory;
use Inertia\Inertia;

class TestCategoryController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(TestCategory::class , 'test_category');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $testCategories = TestCategoryResource::collection(
            TestCategory::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('category_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('TestCategories/Index', compact('testCategories', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('TestCategories/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(TestCategoryRequest $request)
    {
        TestCategory::create($request->validated());
        session()->flash('success', "Test Category has been created successfully.");
        return redirect()->route('test-categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Inertia\Response
     */
    public function show(TestCategory $testCategory)
    {
        return Inertia::render('TestCategories/Show', compact('testCategory'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Inertia\Response
     */
    public function edit(TestCategory $testCategory)
    {
        return Inertia::render('TestCategories/Edit', compact('testCategory'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(TestCategoryRequest $request, TestCategory $testCategory): \Illuminate\Http\RedirectResponse
    {
        $testCategory->update($request->validated());
        session()->flash('success', "Test Category has been updated successfully.");
        return redirect()->route('test-categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(TestCategory $testCategory)
    {
        $testCategory->delete();
        session()->flash('success', "Test Category has been deleted successfully.");
        return back();
    }

    public function toggleStatus(TestCategory $testCategory){
        $this->authorize('toggleStatus', $testCategory);
        $testCategory->update([
            'status' => !$testCategory->status
        ]);
        session()->flash('success', "Test Category has been ".($testCategory->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
