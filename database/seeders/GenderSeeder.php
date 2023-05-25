<?php

namespace Database\Seeders;

use App\Models\Gender;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gender::create(['gender_name'=>'Male']);
        Gender::create(['gender_name'=>'Female']);
        Gender::create(['gender_name'=>'Transgender']);

    }
}
