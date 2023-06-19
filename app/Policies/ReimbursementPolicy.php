<?php

namespace App\Policies;

use App\Models\Reimbursement;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReimbursementPolicy
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
        return $user->can('list reimbursements');

    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Reimbursement $reimbursement)
    {
        return $user->can('view reimbursements');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('create reimbursements');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Reimbursement $reimbursement)
    {
        return $user->can('update reimbursements');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Reimbursement $reimbursement)
    {
        return $user->can('delete reimbursements');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Reimbursement $reimbursement)
    {
        return $user->can('restore reimbursements');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Reimbursement $reimbursement)
    {
        return $user->can('force delete reimbursements');
    }

    /**
     * Determine whether the user can toggle status the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Reimbursement $reimbursement
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function toggleStatus(User $user, Reimbursement $reimbursement)
    {
        return $user->can('toggle status reimbursements');
    }
}
