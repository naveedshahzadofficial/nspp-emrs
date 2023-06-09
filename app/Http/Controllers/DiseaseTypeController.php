<?php

namespace App\Http\Controllers;

use App\Http\Requests\DiseaseTypeRequest;
use App\Http\Resources\DiseaseTypeResource;
use App\Models\DiseaseType;
use Inertia\Inertia;

class DiseaseTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $diseaseTypes = DiseaseTypeResource::collection(
            DiseaseType::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('type_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('DiseaseTypes/Index', compact('diseaseTypes', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('DiseaseTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(DiseaseTypeRequest $request)
    {
        DiseaseType::create($request->validated());
        session()->flash('success', "Disease Type has been created successfully.");
        return redirect()->route('disease-types.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Inertia\Response
     */
    public function show(DiseaseType $diseaseType)
    {
        return Inertia::render('DiseaseTypes/Show', compact('diseaseType'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Inertia\Response
     */
    public function edit(DiseaseType $diseaseType)
    {
        return Inertia::render('DiseaseTypes/Edit', compact('diseaseType'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(DiseaseTypeRequest $request, DiseaseType $diseaseType): \Illuminate\Http\RedirectResponse
    {
        $diseaseType->update($request->validated());
        session()->flash('success', "Disease Type has been updated successfully.");
        return redirect()->route('disease-types.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(DiseaseType $diseaseType)
    {
        $diseaseType->delete();
        session()->flash('success', "Disease Type has been deleted successfully.");
        return back();
    }

    public function changeStatus(DiseaseType $diseaseType){
        $diseaseType->update([
            'status' => !$diseaseType->status
        ]);
        session()->flash('success', "Disease Type has been ".($diseaseType->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
