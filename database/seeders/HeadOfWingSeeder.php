<?php

namespace Database\Seeders;

use App\Models\HeadOfWing;
use Illuminate\Database\Seeder;

class HeadOfWingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HeadOfWing::create(['name'=>'Rector Office', 'name_abbreviation'=> 'Rector Office', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Dean , NMC', 'name_abbreviation'=> 'Dean , NMC', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Dean, NIPP', 'name_abbreviation'=> 'Dean, NIPP', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Dean, EDI', 'name_abbreviation'=> 'Dean, EDI', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG (Admin), NSPP', 'name_abbreviation'=> 'DG (Admin), NSPP', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG (Policy & Devoplment), NSPP', 'name_abbreviation'=> 'DG (Policy & Devoplment), NSPP', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG (Finance), NSPP', 'name_abbreviation'=> 'DG (Finance), NSPP', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Lahore', 'name_abbreviation'=> 'DG, NIM Lahore', 'head_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Quetta', 'name_abbreviation'=> 'DG, NIM Quetta', 'head_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Karachi', 'name_abbreviation'=> 'DG, NIM Karachi', 'head_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Islamabad', 'name_abbreviation'=> 'DG, NIM Islamabad', 'head_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Peshawar', 'name_abbreviation'=> 'DG, NIM Peshawar', 'head_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'Directing Staff (Coord.), NSPP', 'name_abbreviation'=> 'Directing Staff (Coord.), NSPP', 'head_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Principal, PASC', 'name_abbreviation'=> 'Principal, PASC', 'head_id'=>1, 'status'=>1]);

    }
}
