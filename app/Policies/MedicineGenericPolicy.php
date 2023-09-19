<?php

namespace App\Policies;

use App\Models\MedicineGeneric;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MedicineGenericPolicy
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
        return $user->can('list medicine generics');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, MedicineGeneric $medicineGeneric)
    {
        return $user->can('view medicine generics');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create medicine generics');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, MedicineGeneric $medicineGeneric)
    {
        return $user->can('update medicine generics');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, MedicineGeneric $medicineGeneric)
    {
        return $user->can('delete medicine generics');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, MedicineGeneric $medicineGeneric)
    {
        return $user->can('restore medicine generics');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineGeneric  $medicineGeneric
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, MedicineGeneric $medicineGeneric)
    {
        return $user->can('force delete medicine generics');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineGeneric $medicineGeneric
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, MedicineGeneric $medicineGeneric)
    {
        return $user->can('toggle status medicine generics');
    }
}
