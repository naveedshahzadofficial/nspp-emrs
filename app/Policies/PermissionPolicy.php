<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Spatie\Permission\Models\Permission;

class PermissionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->can('list permission');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Permission $permission
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Permission $permission)
    {
        return $user->can('view permission');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create permission');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Permission $permission
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Permission $permission)
    {
        return $user->can('update permission');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Permission $permission
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Permission $permission)
    {
        return $user->can('delete permission');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Permission $permission
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Permission $permission)
    {
        return $user->can('restore permission');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Permission $permission
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Permission $permission)
    {
        return $user->can('force delete permission');
    }
}
