<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name'=>'Nurse',]);
        Role::create(['name'=>'MO/ Doctor',]);
        Role::create(['name'=>'Pharmacy',]);
        Role::create(['name'=>'Laboratory',]);
        Role::create(['name'=>'Hospital',]);
    }
}
