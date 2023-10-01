<?php

namespace App\Http\Controllers;

use App\Http\Requests\PharmacyRequest;
use App\Http\Requests\PrescriptionCheckoutRequest;
use App\Http\Requests\StoreRegistrationRequest;
use App\Http\Requests\UpdateRegistrationRequest;
use App\Http\Resources\ComplaintResource;
use App\Http\Resources\DiseaseResource;
use App\Http\Resources\DiseaseTypeResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\FrequencyResource;
use App\Http\Resources\GenderResource;
use App\Http\Resources\HospitalResource;
use App\Http\Resources\LabResource;
use App\Http\Resources\MedicineResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\PatientTypeResource;
use App\Http\Resources\PatientVisitResource;
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
use App\Models\Patient;
use App\Models\PatientType;
use App\Models\PatientVisit;
use App\Models\Procedure;
use App\Models\RiskFactor;
use App\Models\Route;
use App\Models\Test;
use App\Models\TestCategory;
use App\Models\TestType;
use App\Services\EmployeeService;
use App\Services\RegistrationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class RegistrationController extends Controller
{

    private $registrationService;
    private $employeeService;
    public function __construct(RegistrationService $registrationService, EmployeeService $employeeService)
    {
        $this->authorizeResource(PatientVisit::class, 'patient_visit');
        $this->registrationService = $registrationService;
        $this->employeeService = $employeeService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $patientVisits = PatientVisitResource::collection(
            PatientVisit::query()
                ->with('patient')
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('token_no', 'like', "%{$search}%")->orWhere(DB::raw("DATE_FORMAT(created_at,'%d-%m-%Y')"),'like', "{$search}%");
                })
                ->when(!auth()->user()->isSuperAdmin(), function ($query){
                    $query->where('institute_id', auth()->user()->institute_id);
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Registrations/Index', compact('patientVisits', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(EmployeeService $employeeService): Response
    {
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());

        $heightUnits = ["Feet", "Inches"];
        /* Begin: Search */
        $patients = Collect([]);
        $filters = request()->only(['mobile_no', 'cnic_no', 'patient_name']);
        if(request()->input('mobile_no') || request()->input('cnic_no') || request()->input('patient_name')) {
            $patients = PatientResource::collection(Patient::query()
                ->with('patientEmployee')
                ->when(request()->input('mobile_no'), function ($query, $search){
                    $query->where('patient_phone', $search);
                })
                ->when(request()->input('cnic_no'), function ($query, $search){
                    $query->where('patient_cnic', $search);
                })
                ->when(request()->input('patient_name'), function ($query, $search){
                    $query->where('patient_name', 'like', "%{$search}%");
                })
                ->get());
        }
        /* End: Search */

        $employees = EmployeeResource::collection(Collect($this->employeeService->getOfficers(1)));

        return Inertia::render('Registrations/Create', compact('patientTypes', 'genders', 'heightUnits' , 'patients', 'filters', 'employees'));
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

        $patient = $this->registrationService->updateOrCreatePatient($request->validated(), $request->patient_id);
            $this->registrationService->addPatientVisit($request->validated(), $patient);
        });
        session()->flash('success', 'Your Registration has been added successfully.');
        return redirect()->route('registrations.index');
    }

    /**
     * Display the specified resource.
     *
     * @param PatientVisit $patientVisit
     * @return Response
     */
    public function show(PatientVisit $patientVisit): Response
    {
        $patientVisit = PatientVisit::relations()->find($patientVisit->id);
        return Inertia::render('Registrations/Show',
            compact( 'patientVisit'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit(PatientVisit $patientVisit): Response
    {
        $patientVisit->load('patient', 'patientEmployee');
        $patientVisit = new PatientVisitResource($patientVisit);
        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
        $heightUnits = ["Feet", "Inches"];
        $employees = EmployeeResource::collection(Collect($this->employeeService->getOfficers(1)));
        return Inertia::render('Registrations/Edit', compact('patientTypes', 'genders','heightUnits', 'patientVisit', 'employees'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRegistrationRequest $request
     * @param PatientVisit $patientVisit
     * @return RedirectResponse
     */
    public function update(UpdateRegistrationRequest $request, PatientVisit $patientVisit): RedirectResponse
    {
        $patientVisit->load('patient');
        DB::transaction(function() use ($request, $patientVisit) {
            $patient = $this->registrationService->updateOrCreatePatient($request->validated());
            $this->registrationService->updatePatientVisit($request->validated(), $patient, $patientVisit);
        });
        session()->flash('success', 'Your Registration has been updated successfully.');
        return redirect()->route('registrations.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PatientVisit $patientVisit
     * @return RedirectResponse
     */
    public function destroy(PatientVisit $patientVisit): RedirectResponse
    {
        $patientVisit->delete();
        session()->flash('success', 'Your registration has been deleted successfully.');
        return redirect()->route('registrations.index');
    }

    public function proceed(PatientVisit $patientVisit): Response
    {
        $this->authorize('proceed', $patientVisit);

        //$data = new \stdClass;
        $patient = Patient::relations()->find($patientVisit->patient_id);

        $patientTypes = PatientTypeResource::collection(PatientType::active()->get());
        $genders = GenderResource::collection(Gender::active()->get());
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
        $heightUnits = ["Feet", "Inches"];

        return Inertia::render('Registrations/Proceed',
            compact('patientTypes', 'genders', 'patient', 'heightUnits',
                'patientVisit', 'complaints', 'diseases', 'diseaseTypes', 'procedures',
                'riskFactors', 'medicines', 'routes', 'frequencies', 'hospitals', 'testCategories', 'testTypes', 'tests', 'labs'));
    }


    public function checkout(PrescriptionCheckoutRequest $request, PatientVisit $patientVisit)
    {
        $response = $this->registrationService->moCheckout($request->all(), $patientVisit);
        if($response->error){
            session()->flash('error', $response->message);
            return redirect()->route('registrations.proceed', $patientVisit);
        }
        session()->flash('success', 'Your prescription has been saved successfully.');
        return redirect()->route('registrations.index');
    }

    public function pharmacyView(PatientVisit $patientVisit): Response
    {
        $this->authorize('pharmacy', $patientVisit);
        $patientVisit->load('patient', 'patientMedicines', 'patientOtherMedicines');
        $data = array();
        $data['patientVisit'] = new PatientVisitResource($patientVisit);
        $data['medicines'] = MedicineResource::collection(Medicine::with('medicineType', 'medicineGeneric')->active()->get());
        $data['routes'] = RouteResource::collection(Route::active()->get());
        $data['frequencies'] = FrequencyResource::collection(Frequency::active()->get());

        return Inertia::render('Registrations/Pharmacy',$data);
    }

    public function pharmacySubmit(PharmacyRequest $request, PatientVisit $patientVisit)
    {
        $response = $this->registrationService->pharmacy($request->all(), $patientVisit);
        if($response->error){
            session()->flash('error', $response->message);
            return redirect()->route('registrations.pharmacy.view', $patientVisit);
        }
        session()->flash('success', 'Your medicine has been added successfully.');
        return redirect()->route('registrations.index');
    }

    public function history(PatientVisit $patientVisit): Response
    {
        $patient = Patient::relations()->find($patientVisit->patient_id);
        return Inertia::render('Registrations/History',
            compact( 'patient',
                'patientVisit'));
    }

    public function receipt(PatientVisit $patientVisit): Response
    {
        $patientVisit->load('patient.gender', 'institute', 'user.roles', 'patient.patientVisit','patient.patientVisits',);
        return Inertia::render('Registrations/Receipt',['patientVisit' => new PatientVisitResource($patientVisit)]);
    }
}
