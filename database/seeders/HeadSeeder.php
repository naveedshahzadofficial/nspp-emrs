<?php

namespace Database\Seeders;

use App\Models\Head;
use Illuminate\Database\Seeder;

class HeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Head::create(['name'=>'Rector, NSPP Sectt', 'sort_id'=>1, 'status'=>1]);
        Head::create(['name'=>'Constiuent unit', 'sort_id'=>2, 'status'=>1]);
    }
}
