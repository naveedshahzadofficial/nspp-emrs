<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use App\Http\Requests\UpdateRegistrationRequest;
use App\Http\Resources\GenderResource;
use App\Http\Resources\PatientTypeResource;
use App\Models\Gender;
use App\Models\PatientType;
use App\Models\PatientVisit;
use App\Services\RegistrationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $patientVisits = PatientVisit::with('patient')->get();
        return Inertia::render('Registrations/Index', compact('patientVisits'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $patientTypes = PatientTypeResource::collection(PatientType::all());
        $genders = GenderResource::collection(Gender::all());
        return Inertia::render('Registrations/Create', compact('patientTypes', 'genders'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRegistrationRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRegistrationRequest $request, RegistrationService $service): \Illuminate\Http\RedirectResponse
    {
        DB::transaction(function() use ($request, $service) {
        $patient = $service->addPatient($request->validated());
        $service->addPatientVisit($request->validated(), $patient);
        });
        session()->flash('success', 'Your Registration has been added successfully.');
        return redirect()->route('registrations.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $patientVisit = PatientVisit::with('patient')->find($id);
        $patientTypes = PatientTypeResource::collection(PatientType::all());
        $genders = GenderResource::collection(Gender::all());
        return Inertia::render('Registrations/Edit', compact('patientTypes', 'genders', 'patientVisit'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRegistrationRequest $request
     * @param int $id
     * @return Response
     */
    public function update(UpdateRegistrationRequest $request, $id)
    {
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
