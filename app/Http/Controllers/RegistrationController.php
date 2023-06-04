<?php

namespace App\Http\Controllers;

use App\Http\Requests\PrescriptionCheckoutRequest;
use App\Http\Requests\StoreRegistrationRequest;
use App\Http\Requests\UpdateRegistrationRequest;
use App\Http\Resources\ComplaintResource;
use App\Http\Resources\DiseaseResource;
use App\Http\Resources\DiseaseTypeResource;
use App\Http\Resources\FrequencyResource;
use App\Http\Resources\GenderResource;
use App\Http\Resources\HospitalResource;
use App\Http\Resources\LabResource;
use App\Http\Resources\MedicineResource;
use App\Http\Resources\MedicineTypeResource;
use App\Http\Resources\PatientTypeResource;
use App\Http\Resources\ProcedureResource;
use App\Http\Resources\RiskFactorResource;
use App\Http\Resources\RouteResource;
use App\Http\Resources\TestCategoryResource;
use App\Http\Resources\TestResource;
use App\Http\Resources\TestTypeResource;
use App\Models\Complaint;
use App\Models\Disease;
use App\Models\DiseaseType;
use App\Models\Frequency;
use App\Models\Gender;
use App\Models\Hospital;
use App\Models\Lab;
use App\Models\Medicine;
use App\Models\MedicineType;
use App\Models\Patient;
use App\Models\PatientType;
use App\Models\PatientVisit;
use App\Models\Procedure;
use App\Models\RiskFactor;
use App\Models\Route;
use App\Models\Test;
use App\Models\TestCategory;
use App\Models\TestType;
use App\Services\RegistrationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    private $registrationService;
    public function __construct(RegistrationService $registrationService)
    {
        $this->registrationService = $registrationService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        $patientVisits = PatientVisit::with('patient')->get();
        return Inertia::render('Registrations/Index', compact('patientVisits'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create(): \Inertia\Response
    {
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
        return Inertia::render('Registrations/Create', compact('patientTypes', 'genders'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRegistrationRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRegistrationRequest $request): \Illuminate\Http\RedirectResponse
    {
        DB::transaction(function() use ($request) {
        $patient = $this->registrationService->addPatient($request->validated());
            $this->registrationService->addPatientVisit($request->validated(), $patient);
        });
        session()->flash('success', 'Your Registration has been added successfully.');
        return redirect()->route('registrations.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id): \Inertia\Response
    {
        //$data = new \stdClass;
        $patientVisit = PatientVisit::with('patient.patientVisits')->findOrFail($id);
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
        $patient = $patientVisit->patient?? null;
        $complaints = ComplaintResource::collection(Complaint::active()->get());
        $diseases = DiseaseResource::collection(Disease::active()->get());
        $diseaseTypes = DiseaseTypeResource::collection(DiseaseType::active()->get());
        $procedures = ProcedureResource::collection(Procedure::active()->get());
        $riskFactors = RiskFactorResource::collection(RiskFactor::active()->get());
        $medicines = MedicineResource::collection(Medicine::with('medicineType', 'medicineGeneric')->active()->get());
        $routes = RouteResource::collection(Route::active()->get());
        $frequencies = FrequencyResource::collection(Frequency::active()->get());
        $hospitals = HospitalResource::collection(Hospital::active()->get());
        $testCategories = TestCategoryResource::collection(TestCategory::active()->get());
        $testTypes = TestTypeResource::collection(TestType::active()->get());
        $tests = TestResource::collection(Test::active()->get());
        $labs = LabResource::collection(Lab::active()->get());

        return Inertia::render('Registrations/Show',
            compact('patientTypes', 'genders', 'patient',
                'patientVisit', 'complaints', 'diseases', 'diseaseTypes', 'procedures',
                'riskFactors', 'medicines', 'routes', 'frequencies', 'hospitals', 'testCategories', 'testTypes', 'tests', 'labs'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function edit($id): \Inertia\Response
    {
        $patientVisit = PatientVisit::with('patient')->find($id);
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
        return Inertia::render('Registrations/Edit', compact('patientTypes', 'genders', 'patientVisit'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRegistrationRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateRegistrationRequest $request, $id): RedirectResponse
    {
        DB::transaction(function() use ($request, $id) {
            $patientVisit = PatientVisit::with('patient')->find($id);
            $this->registrationService->updatePatient($request->validated(), $patientVisit->patient);
            $this->registrationService->updatePatientVisit($request->validated(), $patientVisit);
        });
        session()->flash('success', 'Your Registration has been updated successfully.');
        return redirect()->route('registrations.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return RedirectResponse
     */
    public function destroy($id): RedirectResponse
    {
        PatientVisit::destroy($id);
        session()->flash('success', 'Your registration has been deleted successfully.');
        return redirect()->route('registrations.index');
    }

    public function checkout(PrescriptionCheckoutRequest $request, PatientVisit $patientVisit)
    {
        
        DB::transaction(function() use ($request, $patientVisit) {
            $this->registrationService->updatePatientVisit($request->validated(), $patientVisit);
        });
        //session()->flash('success', 'Your prescription has been saved successfully.');
        //return redirect()->route('registrations.index');
    }
}
