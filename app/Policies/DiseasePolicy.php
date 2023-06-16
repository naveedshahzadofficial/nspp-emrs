<?php

namespace App\Policies;

use App\Models\Disease;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DiseasePolicy
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
        return $user->can('list diseases');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Disease $disease)
    {
        return $user->can('view diseases');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create diseases');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Disease $disease)
    {
        return $user->can('update diseases');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Disease $disease)
    {
        return $user->can('delete diseases');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Disease $disease)
    {
        return $user->can('restore diseases');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Disease  $disease
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Disease $disease)
    {
        return $user->can('force delete diseases');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Disease $disease
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, Disease $disease)
    {
        return $user->can('toggle status diseases');
    }
}
