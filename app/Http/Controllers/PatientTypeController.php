<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientTypeRequest;
use App\Http\Resources\PatientTypeResource;
use App\Models\PatientType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $patientTypes = PatientTypeResource::collection(
            PatientType::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('type_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('PatientTypes/Index', compact('patientTypes', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('PatientTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(PatientTypeRequest $request)
    {
        PatientType::create($request->validated());
        session()->flash('success', "Patient Type has been created successfully.");
        return redirect()->route('patient-types.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PatientType  $patientType
     * @return \Inertia\Response
     */
    public function show(PatientType $patientType)
    {
        return Inertia::render('PatientTypes/Show', compact('patientType'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PatientType  $patientType
     * @return \Inertia\Response
     */
    public function edit(PatientType $patientType)
    {
        return Inertia::render('PatientTypes/Edit', compact('patientType'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(PatientTypeRequest $request, PatientType $patientType): \Illuminate\Http\RedirectResponse
    {
        $patientType->update($request->validated());
        session()->flash('success', "Patient Type has been updated successfully.");
        return redirect()->route('patient-types.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(PatientType $patientType)
    {
        $patientType->delete();
        session()->flash('success', "Patient Type has been deleted successfully.");
        return back();
    }

    public function changeStatus(PatientType $patientType){
        $patientType->update([
            'status' => !$patientType->status
        ]);
        session()->flash('success', "Patient Type has been ".($patientType->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
