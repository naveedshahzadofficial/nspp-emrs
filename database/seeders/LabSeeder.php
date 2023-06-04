<?php

namespace Database\Seeders;

use App\Models\Lab;
use Illuminate\Database\Seeder;

class LabSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lab::create(['lab_name' => 'Chughtai Labs']);
        Lab::create(['lab_name' => 'Shaukat Khanum Memorial Cancer Hospital & Research Centre']);

    }
}
