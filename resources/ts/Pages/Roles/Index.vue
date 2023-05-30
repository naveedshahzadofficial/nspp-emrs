<template>
    <Head title="Roles"/>
    <div class="card">
        <!--begin::Card header-->
        <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
                <!--begin::Page title-->
                <div
                    id="kt_page_title"
                    data-kt-swapper="true"
                    data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                    class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
                >
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
                        Roles
                    </h1>
                    <!--end::Title-->

                    <!--begin::Breadcrumb-->
                    <ul
                        class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
                    >
                            <li class="breadcrumb-item text-muted">
                                System Settings
                            </li>
                            <li class="breadcrumb-item">
                                <span class="bullet bg-gray-200 w-5px h-2px"></span>
                            </li>
                        <li class="breadcrumb-item pe-3 text-dark">
                            Roles
                        </li>
                    </ul>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
            </div>
            <!--begin::Card title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">

                <!--begin::Add button-->
                <button
                    type="button"
                    class="btn btn-primary"
                >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="/media/icons/duotune/arrows/arr075.svg" />
            </span>
                    Add Role
                </button>
                <!--end::Add button-->

            </div>
            <!--end::Card toolbar-->

        </div>
       <!--end::Card header-->

    <div class="card-body pt-0 position-relative">

        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-6">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
               <inline-svg src="/media/icons/duotune/general/gen021.svg" />
          </span>
            <input
                type="text"
                class="form-control form-control-solid w-250px ps-15"
                placeholder="Search"
            />
        </div>
        <!--end::Search-->

        <div class="table-responsive ">

            <table
                class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
            >
                <!--begin::Table head-->
                <thead>
                <tr class="fw-bold">
                    <th class="p-0">Role Name</th>
                    <th class="p-0  text-center">Created</th>
                    <th class="p-0 min-w-100px text-end">Action</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="role in roles" :key="role.id">
                    <tr>
                        <td class="fw-semibold">{{ role.name }}</td>
                        <td class="text-center">{{ role.created_at }}</td>
                        <td class="text-end">
                            <Link
                                :href="route('roles.show', role.id)"
                                title="Proceed"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                          src="/media/icons/duotune/general/gen019.svg"
                      />
                    </span>
                            </Link>

                            <Link
                                :href="route('roles.edit', role.id)"
                                title="Edit"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="/media/icons/duotune/art/art005.svg" />
                    </span>
                            </Link>

                            <a
                                @click.prevent="destroy(role.id)"
                                title="Delete"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                          src="/media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                            </a>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
    </div>


</template>

<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import Swal from "sweetalert2/dist/sweetalert2.min.js";

import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import {onMounted} from "vue";
const props = defineProps({
    roles: { type: Array, required: true },
});

onMounted(() => {
   //setCurrentPageTitle("Roles");
    setCurrentPageBreadcrumbs("Roles", ["System Settings"]);
})

const getRoles = () => {
    router.get(route('roles.index'),{},{
        preserveState: true
    });
}

const destroy = (RoleId: number) => {
    Swal.fire({
        text: "Are you sure you want to delete this?",
        icon: "warning",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: 'No',
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-secondary",
        },
    }).then(function (result) {
        if(result.isConfirmed){
            router.delete(route('roles.destroy', RoleId));
        }
    });
}

</script>

<style scoped>

</style>
