<?php

namespace Database\Seeders;

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
        User::create([
            'name'=> 'Admin PITB',
            'username'=> 'admin',
            'email'=> 'admin@gmail.com',
            'password'=> bcrypt(12345678),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);
        User::factory(10)->create();
    }
}
