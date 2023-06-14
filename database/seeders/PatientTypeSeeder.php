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
       PatientType::create(['type_name'=>'Employee']);
       PatientType::create(['type_name'=>'Participant']);
       PatientType::create(['type_name'=>'Dependent']);
       PatientType::create(['type_name'=>'Walk-in']);
       PatientType::create(['type_name'=>'Patient']);
    }
}
