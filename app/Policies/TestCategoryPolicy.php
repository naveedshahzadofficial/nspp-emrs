<?php

namespace App\Policies;

use App\Models\TestCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TestCategoryPolicy
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
        return $user->can('list test categories');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, TestCategory $testCategory)
    {
        return $user->can('view test categories');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create test categories');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, TestCategory $testCategory)
    {
        return $user->can('update test categories');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, TestCategory $testCategory)
    {
        return $user->can('delete test categories');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, TestCategory $testCategory)
    {
        return $user->can('restore test categories');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TestCategory  $testCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, TestCategory $testCategory)
    {
        return $user->can('force delete test categories');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TestCategory $testCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, TestCategory $testCategory)
    {
        return $user->can('toggle status test categories');
    }}
