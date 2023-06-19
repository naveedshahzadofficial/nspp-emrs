<?php

namespace App\Policies;

use App\Models\PatientVisit;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PatientVisitPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->can('list registrations');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientVisit  $patientVisit
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, PatientVisit $patientVisit)
    {
        return $user->can('view registrations') && $user->institute_id === $patientVisit->institute_id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create registrations');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientVisit  $patientVisit
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, PatientVisit $patientVisit)
    {
        return $user->can('update registrations') && $user->institute_id === $patientVisit->institute_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientVisit  $patientVisit
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, PatientVisit $patientVisit)
    {
        return $user->can('delete registrations') && $user->institute_id === $patientVisit->institute_id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientVisit  $patientVisit
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, PatientVisit $patientVisit)
    {
        return $user->can('restore registrations') && $user->institute_id === $patientVisit->institute_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientVisit  $patientVisit
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, PatientVisit $patientVisit)
    {
        return $user->can('force delete registrations') && $user->institute_id === $patientVisit->institute_id;
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientVisit $patientVisit
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function proceed(User $user,  PatientVisit $patientVisit)
    {
        return $user->can('proceed registrations') && $user->institute_id === $patientVisit->institute_id;
    }
}
