<?php

namespace App\Policies;

use App\Models\Institute;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class InstitutePolicy
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
       return $user->can('list institutes');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Institute $institute)
    {
        return $user->can('view institutes');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create institutes');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Institute $institute)
    {
        return $user->can('update institutes');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Institute $institute)
    {
        return $user->can('delete institutes');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Institute $institute)
    {
        return $user->can('restore institutes');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Institute $institute)
    {
        return $user->can('force delete institutes');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Institute $institute
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, Institute $institute)
    {
        return $user->can('toggle status institutes');
    }
}
