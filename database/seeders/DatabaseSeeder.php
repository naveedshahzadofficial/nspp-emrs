<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(PatientTypeSeeder::class);
        $this->call(GenderSeeder::class);
        $this->call(ComplaintTypeSeeder::class);
        $this->call(ComplaintSeeder::class);
        $this->call(DiseaseTypeSeeder::class);
        $this->call(DiseaseSeeder::class);
        $this->call(ProcedureSeeder::class);
        $this->call(RiskFactorSeeder::class);
    }
}
