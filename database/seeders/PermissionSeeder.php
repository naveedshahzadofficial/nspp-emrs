<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'dashboard',
            'list institutes', 'create institutes', 'view institutes', 'update institutes', 'delete institutes', 'restore institutes', 'force delete institutes', 'toggle status institutes',
            'list permissions', 'create permissions', 'view permissions', 'update permissions', 'delete permissions', 'restore permissions', 'force delete permissions',
            'list roles', 'create roles', 'view roles', 'update roles', 'delete roles', 'restore roles', 'force delete roles', 'toggle status roles',
            'list users', 'create users', 'view users', 'update users', 'delete users', 'restore users', 'force delete users', 'toggle status users',
            'list patient types', 'create patient types', 'view patient types', 'update patient types', 'delete patient types', 'restore patient types', 'force delete patient types', 'toggle status patient types',
            'list complaints', 'create complaints', 'view complaints', 'update complaints', 'delete complaints', 'toggle status complaints',
            'list disease types', 'create disease types', 'view disease types', 'update disease types', 'delete disease types', 'restore disease types', 'force delete disease types', 'toggle status disease types',
            'list diseases', 'create diseases', 'view diseases', 'update diseases', 'delete diseases', 'restore diseases', 'force delete diseases', 'toggle status diseases',
            'list labs', 'create labs', 'view labs', 'update labs', 'delete labs', 'restore labs', 'force delete labs', 'toggle status labs',
            'list hospitals', 'create hospitals', 'view hospitals', 'update hospitals', 'delete hospitals', 'restore hospitals', 'force delete hospitals', 'toggle status hospitals',
            'list medicine categories', 'create medicine categories', 'view medicine categories', 'update medicine categories', 'delete medicine categories', 'restore medicine categories', 'force delete medicine categories', 'toggle status medicine categories',
            'list medicine types', 'create medicine types', 'view medicine types', 'update medicine types', 'delete medicine types', 'restore medicine types', 'force delete medicine types', 'toggle status medicine types',
            'list medicine generics', 'create medicine generics', 'view medicine generics', 'update medicine generics', 'delete medicine generics', 'restore medicine generics', 'force delete medicine generics', 'toggle status medicine generics',
            'list medicines', 'create medicines', 'view medicines', 'update medicines', 'delete medicines', 'restore medicines', 'force delete medicines', 'toggle status medicines',
            'list registrations', 'create registrations', 'view registrations', 'update registrations', 'delete registrations', 'restore registrations', 'force delete registrations', 'proceed registrations', 'pharmacy registrations', 'history registrations',
            'list reimbursements', 'create reimbursements', 'view reimbursements', 'update reimbursements', 'delete reimbursements', 'restore reimbursements', 'force delete reimbursements',
        ];

        foreach ($permissions as $permission)
            Permission::create(['name' => $permission]);

    }
}
