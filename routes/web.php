<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{
    AuthController,
    DashboardController,
    RoleController,
    PermissionController,
    RegistrationController,
    PatientController,
    UserController,
    PatientTypeController,
    ComplaintController,
    DiseaseTypeController,
    DiseaseController,
    ReimbursementController,
    InstituteController
};


Route::controller(AuthController::class)->group(function () {
    Route::get('/','showLoginForm');
    Route::get('/login', 'showLoginForm')->name('login');
    Route::post('/login', 'submitLoginForm')->name('login.submit');
    Route::get('/password/forgot', 'showForgotForm')->name('password.forgot');
    Route::post('/password/forgot', 'submitForgotForm')->name('password.forgot.submit');
    Route::get('/password/reset', 'showResetForm')->name('password.reset');
    Route::post('/password/reset', 'submitResetForm')->name('password.reset.submit');
});

Route::group(['middleware' => ['auth']],function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AuthController::class,'logout'])->name('logout');

    Route::delete('/institutes/{institute}/toggle-status', [InstituteController::class, 'toggleStatus'])->name('institutes.toggle-status');
    Route::resource('/institutes', InstituteController::class);


    Route::delete('/roles/{role}/toggle-status', [RoleController::class, 'toggleStatus'])->name('roles.toggle-status');
    Route::delete('/roles/{role}/permissions/{permission}/revoke', [RoleController::class, 'revokePermissionFromRole'])->name('roles.permissions.revoke');
    Route::resource('/roles', RoleController::class);

    Route::resource('/permissions', PermissionController::class);

    Route::delete('/users/{user}/roles/{role}/revoke', [UserController::class, 'revokeRoleFromUser'])->name('users.roles.revoke');
    Route::delete('/users/{user}/permissions/{permission}/revoke', [UserController::class, 'revokePermissionFromUser'])->name('users.permissions.revoke');
    Route::delete('/users/{user}/toggle-status', [UserController::class, 'toggleStatus'])->name('users.toggle-status');
    Route::resource('/users', UserController::class);

    Route::delete('/patient-types/{patient_type}/toggle-status', [PatientTypeController::class, 'toggleStatus'])->name('patient-types.toggle-status');
    Route::resource('/patient-types', PatientTypeController::class);

    Route::delete('/complaints/{complaint}/toggle-status', [ComplaintController::class, 'toggleStatus'])->name('complaints.toggle-status');
    Route::resource('/complaints', ComplaintController::class);

    Route::delete('/disease-types/{disease_type}/toggle-status', [DiseaseTypeController::class, 'toggleStatus'])->name('disease-types.toggle-status');
    Route::resource('/disease-types', DiseaseTypeController::class);

    Route::delete('/diseases/{disease}/toggle-status', [DiseaseController::class, 'toggleStatus'])->name('diseases.toggle-status');
    Route::resource('/diseases', DiseaseController::class);


    Route::get('/registrations/{patient_visit}/proceed', [RegistrationController::class, 'proceed'])->name('registrations.proceed');
    Route::post('/registrations/{patient_visit}/checkout', [RegistrationController::class, 'checkout'])->name('registrations.checkout');
    Route::resource('/registrations', RegistrationController::class);
    Route::resource('/patients', PatientController::class);

    Route::resource('/reimbursements', ReimbursementController::class);


});

Route::get('/about-us', function () {
    return Inertia::render('About', ['about_us' => 'working the about us']);
})->name('about-us');
