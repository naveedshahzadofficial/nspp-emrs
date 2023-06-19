<?php

namespace App\Policies;

use App\Models\PatientType;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PatientTypePolicy
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
        return $user->can('list patient types');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, PatientType $patientType)
    {
        return $user->can('view patient types');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create patient types');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, PatientType $patientType)
    {
        return $user->can('update patient types');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, PatientType $patientType)
    {
        return $user->can('delete patient types');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, PatientType $patientType)
    {
        return $user->can('restore patient types');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, PatientType $patientType)
    {
        return $user->can('force delete patient types');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PatientType $patientType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, PatientType $patientType)
    {
        return $user->can('toggle status patient types');
    }
}
