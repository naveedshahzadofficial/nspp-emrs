<?php

namespace App\Policies;

use App\Models\Stock;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StockPolicy
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
        return $user->can('list stocks');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Stock $stock)
    {
        return $user->can('view stocks');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create stocks');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Stock $stock)
    {
        return $user->can('update stocks');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Stock $stock)
    {
        return $user->can('delete stocks');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Stock $stock)
    {
        return $user->can('restore stocks');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Stock $stock)
    {
        return $user->can('force delete stocks');
    }
}
