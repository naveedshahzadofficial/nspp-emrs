<?php

namespace Database\Seeders;

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

        User::factory(5)->create();
    }
}
