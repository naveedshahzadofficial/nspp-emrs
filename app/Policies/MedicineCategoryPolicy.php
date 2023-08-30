<?php

namespace App\Policies;

use App\Models\MedicineCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MedicineCategoryPolicy
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
        return $user->can('list medicine categories');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, MedicineCategory $medicineCategory)
    {
        return $user->can('view medicine categories');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create medicine categories');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, MedicineCategory $medicineCategory)
    {
        return $user->can('update medicine categories');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, MedicineCategory $medicineCategory)
    {
        return $user->can('delete medicine categories');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, MedicineCategory $medicineCategory)
    {
        return $user->can('restore medicine categories');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineCategory  $medicineCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, MedicineCategory $medicineCategory)
    {
        return $user->can('force delete medicine categories');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\MedicineCategory $medicineCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, MedicineCategory $medicineCategory)
    {
        return $user->can('toggle status medicine categories');
    }
}
