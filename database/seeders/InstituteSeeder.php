<?php

namespace Database\Seeders;

use App\Models\Institute;
use Illuminate\Database\Seeder;

class InstituteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Institute::create(['name' => 'National Institute of Management Islamabad', 'short_name'=> 'NIM Islamabad', 'order'=>1]);
        Institute::create(['name' => 'National Institute of Management Karachi', 'short_name'=> 'NIM Karachi', 'order'=>2]);
        Institute::create(['name' => 'National Institute of Management Lahore', 'short_name'=> 'NIM Lahore', 'order'=>3]);
        Institute::create(['name' => 'National Institute of Management Peshawar', 'short_name'=> 'NIM Peshawar', 'order'=>4]);
        Institute::create(['name' => 'National Institute of Management Quetta', 'short_name'=> 'NIM Quetta', 'order'=>5]);
        Institute::create(['name' => 'National Management College Lahore', 'short_name'=> 'NMC Lahore', 'order'=>6]);

    }
}
