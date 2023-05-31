<?php

namespace Database\Seeders;

use App\Models\DiseaseType;
use Illuminate\Database\Seeder;

class DiseaseTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    DiseaseType::create(['type_name'=> 'Gynae']);
    DiseaseType::create(['type_name'=> 'Medical']);
    DiseaseType::create(['type_name'=> 'Skin']);

    }
}
