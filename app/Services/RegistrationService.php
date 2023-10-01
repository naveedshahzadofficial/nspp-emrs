<?php

namespace App\Services;


use App\Models\Patient;
use App\Models\PatientComplaint;
use App\Models\PatientDiagnosis;
use App\Models\PatientDisease;
use App\Models\PatientEmployee;
use App\Models\PatientHospital;
use App\Models\PatientLab;
use App\Models\PatientMedicine;
use App\Models\PatientOtherMedicine;
use App\Models\PatientRiskFactor;
use App\Models\PatientVisit;
use Exception;
use Illuminate\Support\Facades\DB;

class RegistrationService
{
    public function addPatientEmployee($data, Patient $patient, PatientVisit  $patientVisit){
        $data['patient_id'] = $patient->id;
        $data['patient_visit_id'] = $patientVisit->id;
        PatientEmployee::create($data);
    }
    public function addPatient($data){
        return Patient::create($data);
    }

    public function addPatientVisit($data, Patient $patient){
        $patientVisit = $patient->patientVisits()->create($data);
        if($patient->patient_type_id == 1){
            $this->addPatientEmployee($data['employee'], $patient, $patientVisit);
        }
    }

    public function updatePatient($data, Patient $patient){
        $patient->update($data);
    }

    public function updatePatientVisit($data, PatientVisit  $patientVisit){
        $patientVisit->update($data);
    }

    public function updateOrCreatePatient($data, $patient_id){
        if(!empty($patient_id))
        $checked = ['id' => $patient_id];
        else
        $checked =  ['patient_cnic' => $data['patient_cnic']];

        return Patient::updateOrCreate($checked, $data);
    }



    private function addPatientRiskFactors($data, PatientVisit  $patientVisit){
        $patient_risk_factors = Collect($data['patient_risk_factors'])->map(function ($row) use ($patientVisit){
           return new PatientRiskFactor($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_risk_factors)>0)
            $patientVisit->patientRiskFactors()->saveMany($patient_risk_factors);
    }

    private function addPatientComplaints($data, PatientVisit  $patientVisit){
        $patient_complaints = Collect($data['patient_complaints'])->map(function ($row) use ($patientVisit){
            return new PatientComplaint($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_complaints)>0)
            $patientVisit->patientComplaints()->saveMany($patient_complaints);
    }

    private function addPatientDiseases($data, PatientVisit  $patientVisit){
        $patient_diseases = Collect($data['patient_diseases'])->map(function ($row) use ($patientVisit){
            return new PatientDisease($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_diseases)>0)
            $patientVisit->patientDiseases()->saveMany($patient_diseases);
    }

    private function addPatientDiagnoses($data, PatientVisit  $patientVisit){
        $patient_diagnoses = Collect($data['patient_diagnoses'])->map(function ($row) use ($patientVisit){
            return new PatientDiagnosis($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_diagnoses)>0)
            $patientVisit->patientDiagnoses()->saveMany($patient_diagnoses);
    }

    private function addPatientMedicines($data, PatientVisit  $patientVisit){
        $patient_medicines = Collect($data['patient_medicines'])->map(function ($row) use ($patientVisit){
            return new PatientMedicine($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_medicines)>0)
            $patientVisit->patientMedicines()->saveMany($patient_medicines);
    }

    private function updateOrCreatePatientMedicines($data, PatientVisit  $patientVisit){
        Collect($data['patient_medicines'])->map(function ($row) use ($patientVisit){
            PatientMedicine::updateOrCreate(['id'=>$row['id']??null, 'patient_visit_id'=>$patientVisit->id, 'patient_id' => $patientVisit->patient_id], $row);
            return true;
        });
    }

    private function addPatientOtherMedicines($data, PatientVisit  $patientVisit){
        $patient_other_medicines = Collect($data['patient_other_medicines'])->map(function ($row) use ($patientVisit){
            return new PatientOtherMedicine($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_other_medicines)>0)
            $patientVisit->patientOtherMedicines()->saveMany($patient_other_medicines);
    }

    private function updateOrCreatePatientOtherMedicines($data, PatientVisit  $patientVisit){
        Collect($data['patient_other_medicines'])->map(function ($row) use ($patientVisit){
            PatientOtherMedicine::updateOrCreate(['id'=>$row['id']??null, 'patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id], $row);
            return true;
        });
    }
    private function addPatientHospitals($data, PatientVisit  $patientVisit){
        $patient_hospitals = Collect($data['patient_hospitals'])->map(function ($row) use ($patientVisit){
            return new PatientHospital($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_hospitals)>0)
            $patientVisit->patientHospitals()->saveMany($patient_hospitals);
    }
    private function addPatientLabs($data, PatientVisit  $patientVisit){
        $patient_labs = Collect($data['patient_labs'])->map(function ($row) use ($patientVisit){
            return new PatientLab($row + ['patient_id' => $patientVisit->patient_id, 'patient_visit_id'=>$patientVisit->id]);
        });
        if(count($patient_labs)>0)
            $patientVisit->patientLabs()->saveMany($patient_labs);
    }

    public function moCheckout($data, PatientVisit  $patientVisit): \stdClass
    {
        $response = new \stdClass;
        DB::beginTransaction();
        try{
            // Vitals updated...
            $this->updatePatientVisit($data, $patientVisit);
            // Add Patient Risk Factors
            $this->addPatientRiskFactors($data, $patientVisit);
            // Add Patient Complaints
            $this->addPatientComplaints($data, $patientVisit);
            // Add Patient Diseases
            $this->addPatientDiseases($data, $patientVisit);
            // Add Patient Diagnoses
            $this->addPatientDiagnoses($data, $patientVisit);
            // Add Patient Medicines
            $this->addPatientMedicines($data, $patientVisit);
            // Add Patient Other Medicines
            $this->addPatientOtherMedicines($data, $patientVisit);
            // Add Patient referral Hospitals
            $this->addPatientHospitals($data, $patientVisit);
            // Add Patient referral Labs
            $this->addPatientLabs($data, $patientVisit);

            DB::Commit();
            $response->error = false;
            $response->message = "Your record has been saved successfully.";
        } catch (Exception $ex) {
            DB::rollback();
            $response->error = true;
            $response->message = $ex->getMessage();
        }
        return $response;
    }


    public function pharmacy($data, PatientVisit  $patientVisit): \stdClass
    {
        $response = new \stdClass;
        DB::beginTransaction();
        try{
            // updateOrCreate Patient Medicines
            $this->updateOrCreatePatientMedicines($data, $patientVisit);
            // updateOrCreate Other Medicines
            $this->updateOrCreatePatientOtherMedicines($data, $patientVisit);
            DB::Commit();
            $response->error = false;
            $response->message = "Your record has been saved successfully.";
        } catch (Exception $ex) {
            DB::rollback();
            $response->error = true;
            $response->message = $ex->getMessage();
        }
        return $response;
    }
}
