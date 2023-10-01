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
        HeadOfWing::create(['name'=>'Rector Office', 'name_abbreviation'=> 'Rector Office', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Dean , NMC', 'name_abbreviation'=> 'Dean , NMC', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Dean, NIPP', 'name_abbreviation'=> 'Dean, NIPP', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Dean, EDI', 'name_abbreviation'=> 'Dean, EDI', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG (Admin), NSPP', 'name_abbreviation'=> 'DG (Admin), NSPP', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG (Policy & Devoplment), NSPP', 'name_abbreviation'=> 'DG (Policy & Devoplment), NSPP', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG (Finance), NSPP', 'name_abbreviation'=> 'DG (Finance), NSPP', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Lahore', 'name_abbreviation'=> 'DG, NIM Lahore', 'category_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Quetta', 'name_abbreviation'=> 'DG, NIM Quetta', 'category_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Karachi', 'name_abbreviation'=> 'DG, NIM Karachi', 'category_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Islamabad', 'name_abbreviation'=> 'DG, NIM Islamabad', 'category_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'DG, NIM Peshawar', 'name_abbreviation'=> 'DG, NIM Peshawar', 'category_id'=>2, 'status'=>1]);
        HeadOfWing::create(['name'=>'Directing Staff (Coord.), NSPP', 'name_abbreviation'=> 'Directing Staff (Coord.), NSPP', 'category_id'=>1, 'status'=>1]);
        HeadOfWing::create(['name'=>'Principal, PASC', 'name_abbreviation'=> 'Principal, PASC', 'category_id'=>1, 'status'=>1]);

    }
}
