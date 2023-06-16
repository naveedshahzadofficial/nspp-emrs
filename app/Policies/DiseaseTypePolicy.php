<?php

namespace App\Policies;

use App\Models\DiseaseType;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DiseaseTypePolicy
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
        return $user->can('list disease types');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, DiseaseType $diseaseType)
    {
        return $user->can('view disease types');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create disease types');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, DiseaseType $diseaseType)
    {
        return $user->can('update disease types');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, DiseaseType $diseaseType)
    {
        return $user->can('delete disease types');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, DiseaseType $diseaseType)
    {
        return $user->can('restore disease types');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\DiseaseType  $diseaseType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, DiseaseType $diseaseType)
    {
        return $user->can('force delete disease types');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\DiseaseType $diseaseType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, DiseaseType $diseaseType)
    {
        return $user->can('toggle status disease types');
    }
}
