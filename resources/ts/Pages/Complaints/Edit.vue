<template>
    <Head title="Update Role"/>
    <Toolbar
        title="Update Role"
        :buttons="[{label: 'Back', link: route('roles.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Roles', link: route('roles.index')},
            {label: 'Update', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.put(route('roles.update', role?.id))">
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Role Name</label>
                                <input v-model="form.name"  type="text" class="form-control form-control-sm" placeholder="Role Name"/>
                                <ServerErrorMessage :error="form.errors.name"/>
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
                        <div class="row">
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
                        <Link :href="route('roles.index')" class="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                <!--end::Form-->

                <div class="card-header mt-10">
                    <div class="card-title">
                        <span class="fw-semibold">Role Permissions</span>
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
                        <template v-for="permission in role.permissions" :key="permission.id">
                            <tr>
                                <td>{{ permission.name }}</td>
                                <td class="text-center">
                                    <a
                                        @click.prevent="revoke(role.id, permission.id)"
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
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {router, useForm} from "@inertiajs/vue3";
import {onMounted, watch} from "vue";
const props = defineProps({
    role: { type: Object, required: true},
    permissions: Array,
});

const form = useForm({
    name: props.role?.name,
    status: props.role?.status,
    permissions: [],
});

onMounted(() => {
    form.permissions = props.role?.permissions;
});

watch(
    () => props.role,
    () => (form.permissions = props.role?.permissions)
);

const revoke = (role_id: number, permission_id: number) => {
    Swal.fire({
        text: "Are you sure you want to revoke this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Revoke',
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-secondary",
        },
    }).then(function (result) {
        if(result.isConfirmed){
            router.delete(route('roles.permissions.revoke', [role_id, permission_id]), {
                preserveScroll: true
            });
        }
    });
}

</script>
