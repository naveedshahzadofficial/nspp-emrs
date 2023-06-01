<?php

namespace Database\Seeders;

use App\Models\MedicineCategory;
use Illuminate\Database\Seeder;

class MedicineCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MedicineCategory::create(['category_name' => 'Medicine']);
        MedicineCategory::create(['category_name' => 'Surgical']);
        MedicineCategory::create(['category_name' => 'Laboratory']);
        MedicineCategory::create(['category_name' => 'Radiology']);
        MedicineCategory::create(['category_name' => 'ElectroMedical']);
        MedicineCategory::create(['category_name' => 'Dental']);
        MedicineCategory::create(['category_name' => 'Physiotherapy']);
    }
}
