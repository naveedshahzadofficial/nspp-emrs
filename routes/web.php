<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['test' => 'working home page perfectly']);
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/about-us', function () {
    return Inertia::render('About', ['about_us' => 'working the about us']);
})->name('about-us');
