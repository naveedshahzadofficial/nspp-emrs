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
        $this->call(PermissionSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(InstituteSeeder::class);
        $this->call(HeadSeeder::class);
        $this->call(HeadOfWingSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PatientTypeSeeder::class);
        $this->call(GenderSeeder::class);
        $this->call(ComplaintTypeSeeder::class);
        $this->call(ComplaintSeeder::class);
        $this->call(DiseaseTypeSeeder::class);
        $this->call(DiseaseSeeder::class);
        $this->call(ProcedureSeeder::class);
        $this->call(RiskFactorSeeder::class);
        $this->call(MedicineCategorySeeder::class);
        $this->call(MedicineTypeSeeder::class);
        $this->call(MedicineGenericSeeder::class);
        $this->call(MedicineSeeder::class);
        $this->call(RouteSeeder::class);
        $this->call(FrequencySeeder::class);
        $this->call(HospitalSeeder::class);
        $this->call(TestCategorySeeder::class);
        $this->call(TestTypeSeeder::class);
        $this->call(TestSeeder::class);
        $this->call(LabSeeder::class);

    }
}
