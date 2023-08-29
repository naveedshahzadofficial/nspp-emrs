<?php

namespace App\Http\Controllers;

use App\Models\Lab;
use Inertia\Inertia;
use App\Http\Requests\LabRequest;
use App\Http\Resources\LabResource;

class LabController extends Controller
{
     public function __construct()
    {
        $this->authorizeResource(Lab::class , 'Lab');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $labs = LabResource::collection(
            Lab::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('lab_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Labs/Index', compact('labs', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Labs/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LabRequest $request)
    {
        Lab::create($request->validated());
        session()->flash('success', "Lab has been created successfully.");
        return redirect()->route('labs.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lab  $lab
     * @return \Inertia\Response
     */
    public function show(Lab $lab)
    {
        return Inertia::render('Labs/Show', compact('lab'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lab  $lab
     * @return \Inertia\Response
     */
    public function edit(Lab $lab)
    {
        return Inertia::render('Labs/Edit', compact('lab'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(LabRequest $request, Lab $lab): \Illuminate\Http\RedirectResponse
    {
        $lab->update($request->validated());
        session()->flash('success', "Lab has been updated successfully.");
        return redirect()->route('labs.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Lab $lab)
    {
        $lab->delete();
        session()->flash('success', "Lab has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Lab $lab){
        $this->authorize('toggleStatus', $lab);
        $lab->update([
            'status' => !$lab->status
        ]);
        session()->flash('success', "Lab has been ".($lab->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
