<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Lab;
use Illuminate\Auth\Access\HandlesAuthorization;

class LabPolicy
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
        return $user->can('list labs');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Lab $lab)
    {
        return $user->can('view labs');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create labs');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Lab $lab)
    {
        return $user->can('update labs');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Lab $lab)
    {
        return $user->can('delete labs');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Lab $lab)
    {
        return $user->can('restore labs');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lab  $lab
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Lab $lab)
    {
        return $user->can('force delete labs');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lab $lab
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, Lab $lab)
    {
        return $user->can('toggle status labs');
    }
}
