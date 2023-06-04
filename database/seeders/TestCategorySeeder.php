<?php

namespace Database\Seeders;

use App\Models\TestCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TestCategory::create(['category_name' => 'Pathology', 'short_name' => 'L']);
        TestCategory::create(['category_name' => 'Radiology', 'short_name' => 'R']);
    }
}
