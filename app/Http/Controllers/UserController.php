<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\InstituteResource;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\Institute;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\RedirectResponse;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        $filters = request()->only(['search', 'limit']);
        $users = UserResource::collection(
            User::query()
                ->with('roles')
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->onEachSide(3)->withQueryString()
        );
        return Inertia::render('Users/Index', compact('users', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        $roles = RoleResource::collection(Role::active()->get());
        $permissions = PermissionResource::collection(Permission::all());
        $institutes = InstituteResource::collection(Institute::active()->get());
        return Inertia::render('Users/Create', compact('roles','permissions', 'institutes'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreUserRequest $request
     * @return RedirectResponse
     */
    public function store(StoreUserRequest $request): RedirectResponse
    {
        $user = User::create($request->safe()->except('roles','permissions'));
        $user->syncRoles($request->input('roles.*.name'));
        $user->syncPermissions($request->input('permissions.*.name'));
        session()->flash('success', "User has been created successfully.");
        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function show(User $user): Response
    {
        $user->load(['roles', 'permissions', 'institute']);
        return Inertia::render('Users/Show', compact('user'));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function edit(User $user): Response
    {
        $user->load(['roles', 'permissions']);
        $roles = RoleResource::collection(Role::active()->get());
        $permissions = PermissionResource::collection(Permission::all());
        $institutes = InstituteResource::collection(Institute::active()->get());
        return Inertia::render('Users/Edit', compact('user', 'roles', 'permissions', 'institutes'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateUserRequest $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(UpdateUserRequest $request, User $user): RedirectResponse
    {
        $data = $request->safe()->except('roles','permissions');
        if(!$request->input('password'))
            unset($data['password']);
        $user->update($data);
        $user->syncRoles($request->input('roles.*.name'));
        $user->syncPermissions($request->input('permissions.*.name'));
        session()->flash('success', "User has been updated successfully.");
        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return RedirectResponse
     */
    public function destroy(User $user): RedirectResponse
    {
        $user->delete();
        session()->flash('success', "Role has been deleted successfully.");
        return back();
    }

    public function toggleStatus(User $user): RedirectResponse
    {
        $this->authorize('toggleStatus', $user);
        $user->update([
            'status' => !$user->status
        ]);
        session()->flash('success', "User has been ".($user->status?'activated':'deactivated')." successfully.");
        return back();
    }

    public function revokeRoleFromUser(User $user, Role $role): RedirectResponse
    {
        $user->removeRole($role);
        return back();
    }

    public function revokePermissionFromUser(User $user, Permission $permission): RedirectResponse
    {
        $user->revokePermissionTo($permission);
        return back();
    }

    public function changePasswordView(): Response
    {
        return Inertia::render('Auth/ChangePassword');
    }

    public function profileView(): Response
    {
        return Inertia::render('Auth/Profile');
    }
}
