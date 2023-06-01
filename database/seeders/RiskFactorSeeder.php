<?php

namespace Database\Seeders;

use App\Models\RiskFactor;
use Illuminate\Database\Seeder;

class RiskFactorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RiskFactor::create(['factor_name'=>'Factor 1']);
        RiskFactor::create(['factor_name'=>'Factor 2']);
        RiskFactor::create(['factor_name'=>'Factor 3']);

    }
}
