<?php

namespace Database\Seeders;

use App\Models\Hospital;
use Illuminate\Database\Seeder;

class HospitalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Hospital::create(['hospital_name' => 'Services Hospital Lahore']);
        Hospital::create(['hospital_name' => 'Doctors Hospital']);
        Hospital::create(['hospital_name' => 'Lahore General Hospital']);
        Hospital::create(['hospital_name' => 'Jinnah Hospital']);
        Hospital::create(['hospital_name' => 'Mayo Hospital']);
        Hospital::create(['hospital_name' => 'Shaikh Zayed Hospital']);
        Hospital::create(['hospital_name' => 'Shaukat Khanum Memorial Hospital']);
        Hospital::create(['hospital_name' => 'Sir Ganga Ram Hospital']);
    }
}
