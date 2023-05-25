<?php

namespace Database\Seeders;

use App\Models\PatientType;
use Illuminate\Database\Seeder;

class PatientTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       PatientType::create(['patient_type'=>'Employee']);
       PatientType::create(['patient_type'=>'Participant']);
       PatientType::create(['patient_type'=>'Dependent']);
       PatientType::create(['patient_type'=>'Walk-in']);
       PatientType::create(['patient_type'=>'Patient']);
    }
}
