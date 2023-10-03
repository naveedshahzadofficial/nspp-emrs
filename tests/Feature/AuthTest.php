<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class AuthTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        //Artisan::call('migrate:fresh --seed');
    }

    public function test_unauthenticated_user_cannot_access_dashboard()
    {
        $this->get('/')->assertRedirect(route('login'));
    }

    public function test_show_the_login_page()
    {
        $this->get(route('login'))
            ->assertOk()
            ->assertInertia(function (Assert $page) {
               return $page->component('Auth/Login')
                   ->has('errors')
                   ->where('errors', [])
                   ->has('auth.user')
                   ->where('auth.user', null);
           });
    }

    public function test_return_errors_when_required_fields_fail_validation()
    {
       $this->get(route('login'));

       $this->followingRedirects()
           ->post('/login')
           ->assertOk()
           ->assertInertia(function (Assert $page) {
               return $page->component('Auth/Login')
                   ->has('errors')
                   ->where('errors.username', 'The username field is required.')
                   ->where('errors.password', 'The username field is required.');
           });
    }

    public function test_login_successfully_and_redirect_to_the_dashboard_page(){
        $this->get(route('login'));

        $this->followingRedirects()
            ->post('/login', [
                'username' => 'admin',
                'password' => '12345678'
            ])
            ->assertOk()
            ->assertInertia(function (Assert $page) {
                return $page->component('Dashboard')
                    ->has('errors')
                    ->where('errors', [])
                    ->where('auth.user', auth()->user());
            });

    }
}
