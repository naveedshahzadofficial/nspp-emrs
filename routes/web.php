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

    Route::delete('/institutes/{institute}/change-status', [InstituteController::class, 'changeStatus'])->name('institutes.change-status');
    Route::resource('/institutes', InstituteController::class);


    Route::delete('/roles/{role}/change-status', [RoleController::class, 'changeStatus'])->name('roles.change-status');
    Route::delete('/roles/{role}/permissions/{permission}/revoke', [RoleController::class, 'revokePermissionFromRole'])->name('roles.permissions.revoke');
    Route::resource('/roles', RoleController::class);

    Route::resource('/permissions', PermissionController::class);

    Route::delete('/users/{user}/roles/{role}/revoke', [UserController::class, 'revokeRoleFromUser'])->name('users.roles.revoke');
    Route::delete('/users/{user}/permissions/{permission}/revoke', [UserController::class, 'revokePermissionFromUser'])->name('users.permissions.revoke');
    Route::delete('/users/{user}/change-status', [UserController::class, 'changeStatus'])->name('users.change-status');
    Route::resource('/users', UserController::class);

    Route::delete('/patient-types/{patient_type}/change-status', [PatientTypeController::class, 'changeStatus'])->name('patient-types.change-status');
    Route::resource('/patient-types', PatientTypeController::class);

    Route::delete('/complaints/{complaint}/change-status', [ComplaintController::class, 'changeStatus'])->name('complaints.change-status');
    Route::resource('/complaints', ComplaintController::class);

    Route::delete('/disease-types/{disease_type}/change-status', [DiseaseTypeController::class, 'changeStatus'])->name('disease-types.change-status');
    Route::resource('/disease-types', DiseaseTypeController::class);

    Route::delete('/diseases/{disease}/change-status', [DiseaseController::class, 'changeStatus'])->name('diseases.change-status');
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
