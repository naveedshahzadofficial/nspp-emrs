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
        Role::create(['name'=>'Super Admin',]);
        Role::create(['name'=>'Admin',]);
        Role::create(['name'=>'Nurse',]);
        Role::create(['name'=>'MO/ Doctor',]);
        Role::create(['name'=>'Pharmacy',]);
        Role::create(['name'=>'Laboratory',]);
        Role::create(['name'=>'Hospital',]);

        $roles = Role::whereNotIn('name', ['Super Admin'])->get();
        foreach ($roles as $role) {
            $role->syncPermissions([
                'dashboard',
                'list registrations', 'create registrations', 'view registrations', 'update registrations', 'delete registrations', 'restore registrations', 'force delete registrations', 'proceed registrations',
                'list reimbursements', 'create reimbursements', 'view reimbursements', 'update reimbursements', 'delete reimbursements', 'restore reimbursements', 'force delete reimbursements',
            ]);
        }
    }
}
