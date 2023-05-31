<?php

namespace Database\Seeders;

use App\Models\Procedure;
use Illuminate\Database\Seeder;

class ProcedureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Procedure::create(['procedure_name'=>'Scaling', 'disease_type_id'=>1]);
        Procedure::create(['procedure_name'=>'Filling', 'disease_type_id'=>1]);
        Procedure::create(['procedure_name'=>'Extraction', 'disease_type_id'=>1]);
        Procedure::create(['procedure_name'=>'Surgical Extraction', 'disease_type_id'=>1]);
        Procedure::create(['procedure_name'=>'Root Canal', 'disease_type_id'=>1]);

    }
}
