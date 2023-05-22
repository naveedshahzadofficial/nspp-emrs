<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\{
    LoginController,
};
use App\Http\Controllers\{
    DashboardController,
};

Route::get('/', function () {
    return Inertia::render('Home', ['test' => 'working home page perfectly']);
});

Route::get('/login', [LoginController::class,'showLoginForm'])->name('login.form');
Route::post('/login', [LoginController::class,'submitLoginForm'])->name('login.submit');

Route::get('/dashboard', [DashboardController::class,'index']);

Route::get('/about-us', function () {
    return Inertia::render('About', ['about_us' => 'working the about us']);
})->name('about-us');
