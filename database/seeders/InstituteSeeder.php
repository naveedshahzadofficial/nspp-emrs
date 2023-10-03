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
        Institute::create(['head_id'=> 2, 'mapping_id'=>11, 'name' => 'National Institute of Management Islamabad', 'short_name'=> 'NIM Islamabad', 'order'=>1]);
        Institute::create(['head_id'=> 2, 'mapping_id'=>10, 'name' => 'National Institute of Management Karachi', 'short_name'=> 'NIM Karachi', 'order'=>2]);
        Institute::create(['head_id'=> 2, 'mapping_id'=>8, 'name' => 'National Institute of Management Lahore', 'short_name'=> 'NIM Lahore', 'order'=>3]);
        Institute::create(['head_id'=> 2, 'mapping_id'=>12, 'name' => 'National Institute of Management Peshawar', 'short_name'=> 'NIM Peshawar', 'order'=>4]);
        Institute::create(['head_id'=> 2, 'mapping_id'=>9, 'name' => 'National Institute of Management Quetta', 'short_name'=> 'NIM Quetta', 'order'=>5]);
        Institute::create(['head_id'=> 1, 'mapping_id'=>null, 'name' => 'National Management College Lahore', 'short_name'=> 'NMC Lahore', 'order'=>6]);

    }
}
