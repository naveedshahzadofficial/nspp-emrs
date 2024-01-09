<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestTypeRequest;
use App\Http\Resources\TestCategoryResource;
use App\Http\Resources\TestTypeResource;
use App\Models\TestCategory;
use App\Models\TestType;
use Inertia\Inertia;

class TestTypeController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(TestType::class , 'test_type');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $testTypes = TestTypeResource::collection(
            TestType::query()
                ->with('testCategory')
                ->when($filters['search']??null, function ($query, $search){
                    $query->where('type_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('TestTypes/Index', compact('testTypes', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $testCategories = TestCategoryResource::collection(TestCategory::active()->get());
        return Inertia::render('TestTypes/Create', compact('testCategories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(TestTypeRequest $request)
    {
        TestType::create($request->validated());
        session()->flash('success', "Test Type has been created successfully.");
        return redirect()->route('test-types.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TestType  $testType
     * @return \Inertia\Response
     */
    public function show(TestType $testType)
    {
        $testType->load('testCategory');
        $testType = new TestTypeResource($testType);
        return Inertia::render('TestTypes/Show', compact('testType'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TestType  $testType
     * @return \Inertia\Response
     */
    public function edit(TestType $testType)
    {
        $testCategories = TestCategoryResource::collection(TestCategory::active()->get());
        return Inertia::render('TestTypes/Edit', compact('testType', 'testCategories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TestType  $testType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(TestTypeRequest $request, TestType $testType): \Illuminate\Http\RedirectResponse
    {
        $testType->update($request->validated());
        session()->flash('success', "Test Type has been updated successfully.");
        return redirect()->route('test-types.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TestType  $testType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(TestType $testType)
    {
        $testType->delete();
        session()->flash('success', "Test Type has been deleted successfully.");
        return back();
    }

    public function toggleStatus(TestType $testType){
        $this->authorize('toggleStatus', $testType);
        $testType->update([
            'status' => !$testType->status
        ]);
        session()->flash('success', "Test Type has been ".($testType->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
