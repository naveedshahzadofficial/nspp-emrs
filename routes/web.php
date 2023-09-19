<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{
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
    InstituteController,
    LabController,
    HospitalController,
    MedicineCategoryController,
    MedicineTypeController,
    MedicineGenericController,
};

Route::get('/', [DashboardController::class, 'index']);

Route::group(['middleware' => ['auth']],function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::delete('/institutes/{institute}/toggle-status', [InstituteController::class, 'toggleStatus'])->name('institutes.toggle-status');
    Route::resource('institutes', InstituteController::class);


    Route::delete('/roles/{role}/toggle-status', [RoleController::class, 'toggleStatus'])->name('roles.toggle-status');
    Route::delete('/roles/{role}/permissions/{permission}/revoke', [RoleController::class, 'revokePermissionFromRole'])->name('roles.permissions.revoke');
    Route::resource('roles', RoleController::class);

    Route::resource('permissions', PermissionController::class);

    Route::delete('/users/{user}/roles/{role}/revoke', [UserController::class, 'revokeRoleFromUser'])->name('users.roles.revoke');
    Route::delete('/users/{user}/permissions/{permission}/revoke', [UserController::class, 'revokePermissionFromUser'])->name('users.permissions.revoke');
    Route::delete('/users/{user}/toggle-status', [UserController::class, 'toggleStatus'])->name('users.toggle-status');
    Route::get('/users/change-password', [UserController::class, 'changePasswordView'])->name('users.change-password');
    Route::get('/users/profile', [UserController::class, 'profileView'])->name('users.profile');
    Route::resource('users', UserController::class);

    Route::delete('/patient-types/{patient_type}/toggle-status', [PatientTypeController::class, 'toggleStatus'])->name('patient-types.toggle-status');
    Route::resource('patient-types', PatientTypeController::class);

    Route::delete('/complaints/{complaint}/toggle-status', [ComplaintController::class, 'toggleStatus'])->name('complaints.toggle-status');
    Route::resource('complaints', ComplaintController::class);

    Route::delete('/disease-types/{disease_type}/toggle-status', [DiseaseTypeController::class, 'toggleStatus'])->name('disease-types.toggle-status');
    Route::resource('disease-types', DiseaseTypeController::class);

    Route::delete('/diseases/{disease}/toggle-status', [DiseaseController::class, 'toggleStatus'])->name('diseases.toggle-status');
    Route::resource('diseases', DiseaseController::class);

    Route::delete('/labs/{lab}/toggle-status', [LabController::class, 'toggleStatus'])->name('labs.toggle-status');
    Route::resource('labs', LabController::class);

    Route::delete('/hospitals/{hospital}/toggle-status', [HospitalController::class, 'toggleStatus'])->name('hospitals.toggle-status');
    Route::resource('hospitals', HospitalController::class);

    Route::delete('/medicine-categories/{medicine_category}/toggle-status', [MedicineCategoryController::class, 'toggleStatus'])->name('medicine-categories.toggle-status');
    Route::resource('medicine-categories', MedicineCategoryController::class);

    Route::delete('/medicine-types/{medicine_type}/toggle-status', [MedicineTypeController::class, 'toggleStatus'])->name('medicine-types.toggle-status');
    Route::resource('medicine-types', MedicineTypeController::class);

    Route::delete('/medicine-generics/{medicine_generic}/toggle-status', [MedicineGenericController::class, 'toggleStatus'])->name('medicine-generics.toggle-status');
    Route::resource('medicine-generics', MedicineGenericController::class);


    Route::get('/registrations/{patient_visit}/receipt', [RegistrationController::class, 'receipt'])->name('registrations.receipt');
    Route::get('/registrations/{patient_visit}/history', [RegistrationController::class, 'history'])->name('registrations.history');
    Route::get('/registrations/{patient_visit}/pharmacy', [RegistrationController::class, 'pharmacyView'])->name('registrations.pharmacy.view');
    Route::post('/registrations/{patient_visit}/pharmacy', [RegistrationController::class, 'pharmacySubmit'])->name('registrations.pharmacy.submit');
    Route::get('/registrations/{patient_visit}/proceed', [RegistrationController::class, 'proceed'])->name('registrations.proceed');
    Route::post('/registrations/{patient_visit}/checkout', [RegistrationController::class, 'checkout'])->name('registrations.checkout');
    Route::resource('registrations', RegistrationController::class)->parameters(['registrations' => 'patient_visit']);

    Route::delete('/patients/{patient}/toggle-status', [PatientController::class, 'toggleStatus'])->name('patients.toggle-status');
    Route::resource('patients', PatientController::class);

    Route::resource('reimbursements', ReimbursementController::class);


});

Route::get('/about-us', function () {
    return Inertia::render('About', ['about_us' => 'working the about us']);
})->name('about-us');
