<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $roles = RoleResource::collection(
            Role::query()
            ->when(request()->input('search'), function ($query, $search){
                $query->where('name', 'like', "%{$search}%");
            })
            ->orderBy('created_at', 'desc')
            ->paginate(request()->input('limit', 30))->withQueryString()
    );
        return Inertia::render('Roles/Index', compact('roles', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Roles/Create',[
        'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param RoleRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RoleRequest $request)
    {
        $role = Role::create($request->safe()->except('permissions'));
        if ($request->has('permissions')) {
            $role->syncPermissions($request->input('permissions.*.name'));
        }
        session()->flash('success', "Role has been created successfully.");
        return redirect()->route('roles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Role $role
     * @return \Inertia\Response
     */
    public function show(Role $role)
    {
        $role->load('permissions');
        return Inertia::render('Roles/Show', compact('role'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Role $role
     * @return \Inertia\Response
     */
    public function edit(Role $role)
    {
        $role->load('permissions');
        $permissions = PermissionResource::collection(Permission::all());
        return Inertia::render('Roles/Edit', compact('role', 'permissions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param RoleRequest $request
     * @param Role $role
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(RoleRequest $request, Role $role)
    {
        $role->update($request->safe()->except('permissions'));
        $role->syncPermissions($request->input('permissions.*.name'));
        session()->flash('success', "Role has been updated successfully.");
        return redirect()->route('roles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Role $role
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Role $role)
    {
        $role->delete();
        session()->flash('success', "Role has been deleted successfully.");
        return back();
    }

    public function changeStatus(Role $role){
        $role->update([
            'status' => !$role->status
        ]);
        session()->flash('success', "Role has been ".($role->status?'activated':'deactivated')." successfully.");
        return back();
    }

    public function revokePermissionFromRole(Role $role, Permission $permission){
        $role->revokePermissionTo($permission);
        return back();
    }
}
