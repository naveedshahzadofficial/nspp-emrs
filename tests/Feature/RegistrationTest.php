<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class RegistrationTest extends TestCase
{

    protected function setUp(): void
    {
        parent::setUp();
        //Artisan::call('migrate:fresh --seed');
    }

    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(302);
    }
}
