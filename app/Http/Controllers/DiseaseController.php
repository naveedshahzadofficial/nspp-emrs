<?php

namespace App\Http\Controllers;

use App\Http\Requests\DiseaseRequest;
use App\Http\Resources\DiseaseResource;
use App\Http\Resources\DiseaseTypeResource;
use App\Models\Disease;
use App\Models\DiseaseType;
use Inertia\Inertia;

class DiseaseController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Disease::class , 'disease');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $diseases = DiseaseResource::collection(
            Disease::query()
                ->with('diseaseType')
                ->when(request()->input('search'), function ($query, $search){
                    $query->whereRelation('diseaseType', 'type_name', 'like', "%{$search}%")->orWhere('disease_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Diseases/Index', compact('diseases', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $diseaseTypes = DiseaseTypeResource::collection(DiseaseType::active()->get());
        return Inertia::render('Diseases/Create', compact('diseaseTypes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(DiseaseRequest $request)
    {
        Disease::create($request->validated());
        session()->flash('success', "Disease has been created successfully.");
        return redirect()->route('diseases.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Disease  $disease
     * @return \Inertia\Response
     */
    public function show(Disease $disease)
    {
        $disease->load('diseaseType');
        return Inertia::render('Diseases/Show', compact('disease'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Disease  $disease
     * @return \Inertia\Response
     */
    public function edit(Disease $disease)
    {
        $diseaseTypes = DiseaseTypeResource::collection(DiseaseType::active()->get());
        return Inertia::render('Diseases/Edit', compact('disease', 'diseaseTypes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(DiseaseRequest $request, Disease $disease): \Illuminate\Http\RedirectResponse
    {
        $disease->update($request->validated());
        session()->flash('success', "Disease has been updated successfully.");
        return redirect()->route('diseases.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Disease $disease)
    {
        $disease->delete();
        session()->flash('success', "Disease has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Disease $disease){
        $this->authorize('toggleStatus', $disease);
        $disease->update([
            'status' => !$disease->status
        ]);
        session()->flash('success', "Disease has been ".($disease->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
