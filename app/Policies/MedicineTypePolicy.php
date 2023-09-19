<?php

namespace App\Policies;

use App\Models\MedicineType;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MedicineTypePolicy
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
        return $user->can('list medicine types');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, MedicineType $medicineType)
    {
        return $user->can('view medicine types');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create medicine types');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, MedicineType $medicineType)
    {
        return $user->can('update medicine types');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, MedicineType $medicineType)
    {
        return $user->can('delete medicine types');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, MedicineType $medicineType)
    {
        return $user->can('restore medicine types');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineType  $medicineType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, MedicineType $medicineType)
    {
        return $user->can('force delete medicine types');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineType $medicineType
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, MedicineType $medicineType)
    {
        return $user->can('toggle status medicine types');
    }
}
