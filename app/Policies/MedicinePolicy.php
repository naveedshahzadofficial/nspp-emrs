<?php

namespace App\Policies;

use App\Models\Medicine;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MedicinePolicy
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
        return $user->can('list medicines');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Medicine $medicine)
    {
        return $user->can('view medicines');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create medicines');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Medicine $medicine)
    {
        return $user->can('update medicines');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Medicine $medicine)
    {
        return $user->can('delete medicines');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Medicine $medicine)
    {
        return $user->can('restore medicines');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Medicine  $medicine
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Medicine $medicine)
    {
        return $user->can('force delete medicines');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Medicine $medicine
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, Medicine $medicine)
    {
        return $user->can('toggle status medicines');
    }
}
