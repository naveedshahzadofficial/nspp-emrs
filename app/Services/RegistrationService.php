<?php

namespace App\Services;


use App\Models\Patient;
use App\Models\PatientVisit;

class RegistrationService
{

    public function addPatient($data){
        return Patient::create($data);
    }

    public function addPatientVisit($data, Patient $patient){
        $patient->patientVisits()->create($data);
    }

    public function updatePatient($data, Patient $patient){
        $patient->update($data);
    }

    public function updatePatientVisit($data, PatientVisit  $patientVisit){
        $patientVisit->update($data);
    }


}
