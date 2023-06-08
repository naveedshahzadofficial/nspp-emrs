<template>
    <Head title="Update User"/>
    <Toolbar
        title="Update User"
        :buttons="[{label: 'Back', link: route('users.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Users', link: route('users.index')},
            {label: 'Update', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.put(route('users.update', user?.id))">

                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Name</label>
                                <input v-model="form.name"  type="text" class="form-control form-control-sm" placeholder="Full Name"/>
                                <ServerErrorMessage :error="form.errors.name"/>
                            </div>

                            <div class="col-lg-6">
                                <label class="required form-label">Username</label>
                                <input v-model="form.username"  type="text" class="form-control form-control-sm" placeholder="Username"/>
                                <ServerErrorMessage :error="form.errors.username"/>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Email</label>
                                <input v-model="form.email"  type="email" class="form-control form-control-sm" placeholder="Email"/>
                                <ServerErrorMessage :error="form.errors.email"/>
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label">Status</label>
                                <div class="d-flex">
                                    <div v-for="status in [{id: 1, name:'Active'}, {id: 0, name:'Inactive'}]" :key="status.id" class="form-check form-check-custom form-check-sm me-10">
                                        <input v-model="form.status" :value="status.id" class="form-check-input" name="status" type="radio" :id="`status_${status.id}`">
                                        <label class="form-check-label" :for="`status_${status.id}`">{{ status.name }}</label>
                                    </div>
                                </div>
                                <ServerErrorMessage :error="form.errors.status"/>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Password</label>
                                <input v-model="form.password"  type="password" class="form-control form-control-sm" placeholder="Password"/>
                                <ServerErrorMessage :error="form.errors.password"/>
                            </div>

                            <div class="col-lg-6">
                                <label class="required form-label">Confirm Password</label>
                                <input v-model="form.password_confirmation"  type="password" class="form-control form-control-sm" placeholder="Confirm Password"/>
                                <ServerErrorMessage :error="form.errors.password_confirmation"/>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-12">
                                <label class="form-label">Roles</label>
                                <v-select
                                    v-model="form.roles"
                                    :options="roles"
                                    multiple
                                    label="name"
                                    class="v-select-custom"
                                    placeholder="Please Select" />
                                <ServerErrorMessage :error="form.errors.roles"/>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-12">
                                <label class="form-label">Permissions</label>
                                <v-select
                                    v-model="form.permissions"
                                    :options="permissions"
                                    multiple
                                    label="name"
                                    class="v-select-custom"
                                    placeholder="Please Select" />
                                <ServerErrorMessage :error="form.errors.permissions"/>
                            </div>
                        </div>

                    </div>
                    <!--end::Card body-->

                    <div class="card-footer">
                        <button
                            type="submit"
                            ref="submitButton"
                            class="btn btn-success me-2"
                            :disabled="form.processing"
                            :data-kt-indicator="form.processing?'on':'off'"
                        >
                            <span class="indicator-label"> Update </span>

                            <span class="indicator-progress">
                                    Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
          </span>
                        </button>
                        <Link :href="route('users.index')" class="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                <!--end::Form-->

                <div class="card-header mt-10">
                    <div class="card-title">
                        <span class="fw-semibold">User Roles</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive ">
                        <table
                            class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                        >
                            <!--begin::Table head-->
                            <thead>
                            <tr class="fw-semibold fs-6 text-gray-800">
                                <th>Role Name</th>
                                <th class="text-center w-200px">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="role in user.roles" :key="role.id">
                                <tr>
                                    <td>{{ role.name }}</td>
                                    <td class="text-center">
                                        <a
                                            @click.prevent="revoke('users.roles.revoke', user.id, role.id)"
                                            class="btn btn-icon btn-danger btn-circle btn-sm me-2"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Revoke">
                                            <i class="fas fa-undo"></i>
                                        </a>
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="card-header">
                    <div class="card-title">
                        <span class="fw-semibold">User Permissions</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive ">
                        <table
                            class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                        >
                            <!--begin::Table head-->
                            <thead>
                            <tr class="fw-semibold fs-6 text-gray-800">
                                <th>Permission Name</th>
                                <th class="text-center w-200px">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="permission in user.permissions" :key="permission.id">
                                <tr>
                                    <td>{{ permission.name }}</td>
                                    <td class="text-center">
                                        <a
                                            @click.prevent="revoke('users.permissions.revoke', user.id, permission.id)"
                                            class="btn btn-icon btn-danger btn-circle btn-sm me-2"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Revoke">
                                            <i class="fas fa-undo"></i>
                                        </a>
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->

</template>

<script lang="ts" setup>
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {useForm} from "@inertiajs/vue3";
import {onMounted, watch} from "vue";
import {useCommons} from "@/core/composables/commons";
const { revoke } = useCommons();

const props = defineProps({
    user: { type: Object, required: true},
    roles: Array,
    permissions: Array
});
const form = useForm({
    name: props.user?.name,
    username: props.user?.username,
    email: props.user?.email,
    status: props.user?.status,
    password: '',
    password_confirmation: '',
    roles: [],
    permissions: []
});

onMounted(() => {
    form.permissions = props.user?.permissions;
    form.roles = props.user?.roles;
});

watch(
    () => props.user,
    () => {
        form.permissions = props.user?.permissions,
            form.roles = props.user?.roles
    }
);

</script>
