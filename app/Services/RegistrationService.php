<?php

namespace App\Services;


use App\Models\Patient;

class RegistrationService
{

    public function addPatient($data){
        return Patient::create($data);
    }

    public function addPatientVisit($data, Patient $patient){
        $patient->patientVisits()->create($data);
    }
}
