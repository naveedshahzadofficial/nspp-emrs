<?php

namespace Database\Seeders;

use App\Models\ComplaintType;
use Illuminate\Database\Seeder;

class ComplaintTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ComplaintType::create(['type_name' => 'Chief Complaint']);
        ComplaintType::create(['type_name' => 'Associative Complaint']);
    }
}
