<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestRequest;
use App\Http\Resources\TestTypeResource;
use App\Http\Resources\TestResource;
use App\Models\TestType;
use App\Models\Test;
use Inertia\Inertia;

class TestController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Test::class , 'test_type');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $tests = TestResource::collection(
            Test::query()
                ->with('testType')
                ->when($filters['search']??null, function ($query, $search){
                    $query->where('test_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Tests/Index', compact('tests', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $testTypes = TestTypeResource::collection(TestType::active()->get());
        return Inertia::render('Tests/Create', compact('testTypes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(TestRequest $request)
    {
        Test::create($request->validated());
        session()->flash('success', "Test has been created successfully.");
        return redirect()->route('tests.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Inertia\Response
     */
    public function show(Test $test)
    {
        $test->load('testType');
        $test = new TestResource($test);
        return Inertia::render('Tests/Show', compact('test'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Inertia\Response
     */
    public function edit(Test $test)
    {
        $testTypes = TestTypeResource::collection(TestType::active()->get());
        return Inertia::render('Tests/Edit', compact('test', 'testTypes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(TestRequest $request, Test $test): \Illuminate\Http\RedirectResponse
    {
        $test->update($request->validated());
        session()->flash('success', "Test has been updated successfully.");
        return redirect()->route('tests.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Test $test)
    {
        $test->delete();
        session()->flash('success', "Test has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Test $test){
        $this->authorize('toggleStatus', $test);
        $test->update([
            'status' => !$test->status
        ]);
        session()->flash('success', "Test has been ".($test->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
