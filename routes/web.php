<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{
    AuthController,
    DashboardController,
    RoleController,
    RegistrationController,
    PatientController,
};

Route::get('/',[AuthController::class,'showLoginForm']);

Route::get('/login', [AuthController::class,'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class,'submitLoginForm'])->name('login.submit');

Route::group(['middleware' => ['auth']],function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AuthController::class,'logout'])->name('logout');

    Route::delete('/roles/{role}/change-status', [RoleController::class, 'changeStatus'])->name('roles.change-status');
    Route::resource('/roles', RoleController::class);

    Route::post('/registrations/{patient_visit}/checkout', [RegistrationController::class, 'checkout'])->name('registrations.checkout');
    Route::resource('/registrations', RegistrationController::class);
    Route::resource('/patients', PatientController::class);

});

Route::get('/about-us', function () {
    return Inertia::render('About', ['about_us' => 'working the about us']);
})->name('about-us');
