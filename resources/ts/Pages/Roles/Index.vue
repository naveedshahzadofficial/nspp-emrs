<template>
    <Head title="Roles"/>

    <Toolbar title="Roles">
    <template v-slot:breadcrumbs>
        <!--begin::Item-->
        <li class="breadcrumb-item text-muted">
            <Link href="#"
               class="text-muted text-hover-primary">System Settings</Link>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="breadcrumb-item">
            <span class="bullet bg-gray-200 w-5px h-2px"></span>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="breadcrumb-item text-dark">Roles</li>
        <!--end::Item-->
    </template>
     <template v-slot:buttons>
         <Link :href="route('roles.create')" class="btn btn-sm btn-primary ms-2"  v-html="'Add Role'"/>
     </template>
    </Toolbar>

    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">

            <AlertMessage v-if="$page.props.flash.title" :title="$page.props.flash.title" :message="$page.props.flash.message"/>

            <div class="card card-custom">
                <!--begin::Card header-->
                <div class="card-header">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <select v-model="limit" @change.prevent="filterData" class="form-select form-select-sm form-select-solid">
                            <option v-for="_limit in range(30, 100, 10, 0)" :value="_limit">{{ _limit }}</option>
                        </select>
                    </div>
                    <!--begin::Card title-->

                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                        <!--begin::Search-->
                        <div class="d-flex align-items-center position-relative">
                  <span class="svg-icon svg-icon-1 position-absolute ms-6">
                       <inline-svg src="/media/icons/duotune/general/gen021.svg" />
                  </span>
                            <input
                                v-model="search"
                                type="text"
                                class="form-control form-control-solid w-250px ps-15"
                                placeholder="Search"
                            />
                        </div>
                        <!--end::Search-->
                    </div>
                    <!--end::Card toolbar-->
                </div>
               <!--end::Card header-->

            <div class="card-body">

                <div class="table-responsive ">
                    <table
                        class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                    >
                        <!--begin::Table head-->
                        <thead>
                        <tr class="fw-semibold fs-6 text-gray-800">
                            <th>Role Name</th>
                            <th class="text-center">Status</th>
                            <th class="text-center w-200px">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="role in roles.data" :key="role.id">
                            <tr>
                                <td>{{ role.name }}</td>
                                <td class="text-center">
                                    <span class="badge font-weight-bold"
                                          :class="[role.status?'badge-success':'badge-danger']">
                                        {{ role.status?'Active':'Inactive' }}
                                    </span>
                                </td>
                                <td class="text-center">
                                    <Link
                                        :href="route('roles.show', role.id)"
                                        class="btn btn-icon btn-primary btn-circle btn-sm me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="View Role">
                                        <i class="fas fa-eye"></i>
                                    </Link>

                                    <Link
                                        :href="route('roles.edit', role.id)"
                                        class="btn btn-icon btn-secondary btn-circle btn-sm me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Edit Role">
                                        <i class="fas fa-edit"></i>
                                    </Link>

                                    <a @click.prevent="changeStatus(role)"
                                       class="btn btn-icon btn-circle btn-sm me-2"
                                       :class="[role.status?'btn-danger':'btn-success']"
                                       data-bs-toggle="tooltip"
                                       data-bs-placement="top"
                                       :title="[role.status?'Deactivate':'Activate']">
                                        <i class="icon-xl fas"
                                           :class="[role.status?'fa-toggle-off':'fa-toggle-on']"
                                        ></i>
                                    </a>

                                    <a
                                        @click.prevent="destroy(role.id)"
                                        class="btn btn-icon btn-danger btn-circle btn-sm me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Delete Role">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </div>

                <Pagination :meta="roles?.meta" :links="roles?.links" />
            </div>
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>

<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import AlertMessage from "@/Components/alerts/AlertMessage.vue";
import Pagination from "@/Components/paginations/Pagination.vue";
import Toolbar from "@/Components/toobars/Toolbar.vue";
import {ref, watch } from "vue";
import {debounce} from "lodash";

const props = defineProps({
    roles: { type: Object, required: true },
    filters: Object
});

const search: any = ref(props.filters?.search);
const limit: any = ref(props.filters?.limit || '30');


watch(search, debounce((value: any) =>{
    filterData();
}, 500 ) as any);

const filterData = () => {
    router.get(route('roles.index'),{search: search.value, limit:limit.value},{
        preserveScroll: true,
        preserveState: true,
        replace: true
    });
}

const destroy = (RoleId: number) => {
    Swal.fire({
        text: "Are you sure you want to delete this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-secondary",
        },
    }).then(function (result) {
        if(result.isConfirmed){
            router.delete(route('roles.destroy', RoleId), {
                preserveScroll: true
            });
        }
    });
}
const changeStatus = (role: any) => {
    Swal.fire({
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: role?.status?'Deactivate':'Activate',
        buttonsStyling: false,
        customClass: {
            confirmButton: role?.status?'btn fw-bold btn-danger':'btn fw-bold btn-success',
            cancelButton: "btn fw-bold btn-secondary",
        },
    }).then(function (result) {
        if(result.isConfirmed){
            router.delete(route('roles.change-status', role?.id), {
                preserveScroll: true,
            });
        }
    });
}

</script>

<style scoped>

</style>
