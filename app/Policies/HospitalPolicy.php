<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Hospital;
use Illuminate\Auth\Access\HandlesAuthorization;

class HospitalPolicy
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
        return $user->can('list hospitals');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Hospital $hospital)
    {
        return $user->can('view hospitals');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create hospitals');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Hospital $hospital)
    {
        return $user->can('update hospitals');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Hospital $hospital)
    {
        return $user->can('delete hospitals');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Hospital $hospital)
    {
        return $user->can('restore hospitals');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Hospital $hospital)
    {
        return $user->can('force delete hospitals');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Hospital $hospital
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, Hospital $hospital)
    {
        return $user->can('toggle status hospitals');
    }
}
