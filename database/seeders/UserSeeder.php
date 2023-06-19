<?php

namespace Database\Seeders;

use App\Models\Institute;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'institute_id'=>1,
            'name'=> 'Admin PITB',
            'username'=> 'admin',
            'email'=> 'admin@gmail.com',
            'password'=> '12345678',
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);
        // Assign a role to the user
        $role = Role::where('name', 'Super Admin')->first();
        $user->roles()->attach($role);

        $institutes = Institute::all();
        foreach ($institutes as $institute){
           $roles = Role::whereNotIn('name', ['Super Admin'])->get();
            foreach ($roles as $role){
                $role->syncPermissions([
                    'dashboard',
                    'list registrations', 'create registrations', 'view registrations', 'update registrations', 'delete registrations', 'restore registrations', 'force delete registrations', 'proceed registrations',
                    'list reimbursements', 'create reimbursements', 'view reimbursements', 'update reimbursements', 'delete reimbursements', 'restore reimbursements', 'force delete reimbursements',
                    ]);
                $username = strtolower(str_replace('/ Doctor','',$role->name)).'.'.strtolower(str_replace(' ','.', $institute->short_name));
                $user = User::create([
                    'institute_id'=>$institute->id,
                    'name'=> $role->name.' '.$institute->short_name,
                    'username'=> $username,
                    'email'=> $username.'@gmail.com',
                    'password'=> '12345678',
                    'email_verified_at' => now(),
                    'remember_token' => Str::random(10),
                ]);
                $user->roles()->attach($role);
            }
        }
        //User::factory(5)->create();
    }
}
