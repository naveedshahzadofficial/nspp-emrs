<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientRequest;
use App\Http\Resources\GenderResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\PatientTypeResource;
use App\Models\Gender;
use App\Models\Patient;
use App\Models\PatientType;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PatientController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Patient::class , 'patient');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $patients = PatientResource::collection(
            Patient::query()
                ->with('patientType', 'gender')
                ->when(request()->input('search'), function ($query, $search){
                    $query->whereRelation('patientType', 'type_name', 'like', "%{$search}%")->orWhere('patient_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Patients/Index', compact('patients', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
        return Inertia::render('Patients/Create', compact('patientTypes', 'genders'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return RedirectResponse
     */
    public function store(PatientRequest $request): RedirectResponse
    {
        Patient::create($request->validated());
        session()->flash('success', "Patient has been created successfully.");
        return redirect()->route('patients.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Patient $patient
     * @return Response
     */
    public function show(Patient $patient)
    {
        $patient->load('patientType', 'gender');
        return Inertia::render('Patients/Show', compact('patient'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Patient $patient
     * @return Response
     */
    public function edit(Patient $patient)
    {
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
        return Inertia::render('Patients/Edit', compact('patient', 'patientTypes', 'genders'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PatientRequest $request
     * @param Patient $patient
     * @return RedirectResponse
     */
    public function update(PatientRequest $request, Patient $patient): RedirectResponse
    {
        $patient->update($request->validated());
        session()->flash('success', "Patient has been updated successfully.");
        return redirect()->route('patients.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Patient $patient
     * @return RedirectResponse
     */
    public function destroy(Patient $patient): RedirectResponse
    {
        $patient->delete();
        session()->flash('success', "Patient has been deleted successfully.");
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Patient $patient
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function toggleStatus(Patient $patient): RedirectResponse
    {
        $this->authorize('toggleStatus', $patient);
        $patient->update([
            'status' => !$patient->status
        ]);
        session()->flash('success', "Patient has been ".($patient->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
