<template>
    <Head title="Registrations"/>

    <AlertMessage v-if="$page.props.flash.title" :title="$page.props.flash.title" :message="$page.props.flash.message"/>


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
                        Registrations
                    </h1>
                    <!--end::Title-->

                </div>
                <!--end::Page title-->
            </div>
            <!--begin::Card title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">

                <!--begin::Add button-->
                <Link
                    :href="route('registrations.create')"
                    as="button"
                    type="button"
                    class="btn btn-primary"
                >
                    Add Registration
                </Link>
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

                <!--begin::Table container-->
                <div class="table-responsive">
                    <!--begin::Table-->
                    <table
                        class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                    >
                        <!--begin::Table head-->
                        <thead>
                        <tr class="fw-semibold fs-6 text-gray-800">
                            <th class="p-0 min-w-150px">Patient</th>
                            <th class="p-0 min-w-200px text-center">Token No.</th>
                            <th class="p-0 min-w-100px text-center">Action</th>
                        </tr>
                        </thead>
                        <!--end::Table head-->

                        <!--begin::Table body-->
                        <tbody>
                        <template v-for="patientVisit in patientVisits" :key="patientVisit.id">
                        <tr>

                            <td>
                                <div class="d-flex align-items-center">
                                    <!--begin::Avatar-->
                                    <div class="symbol symbol-45px me-5">
                                        <img
                                            v-if="patientVisit.patient_image"
                                            alt="Pic"
                                            :src="patientVisit.patient_image"
                                        />
                                        <span
                                            v-else-if="patientVisit.patient"
                                            :class="`bg-light-primary text-primary`"
                                            class="symbol-label fw-bolder"
                                        >
                                        {{ patientVisit.patient.patient_name.charAt(0) }}
                                        </span>
                                    </div>
                                    <!--end::Avatar-->

                                    <!--begin::Name-->
                                    <div class="d-flex justify-content-start flex-column">
                                        <a
                                            href="#"
                                            class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                        >{{ patientVisit.patient.patient_name }}</a
                                        >
                                        <a
                                            href="#"
                                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                        >
                                            <span class="text-dark">Designation</span>:
                                            {{ patientVisit.patient.designation }}
                                        </a>
                                        <a
                                            href="#"
                                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                        >
                                            <span class="text-dark">Age</span>:
                                            {{ patientVisit.patient.patient_age }}
                                        </a>

                                    </div>
                                    <!--end::Name-->
                                </div>
                            </td>

                            <td class="fw-semibold text-center">{{ patientVisit.token_no }}</td>

                            <td class="text-center">
                                <Link
                                    :href="route('registrations.show', patientVisit.id)"
                                    class="btn btn-icon btn-warning btn-circle btn-sm me-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Proceed">
                                    <i class="fas fa-step-forward"></i>
                                </Link>

                                <Link
                                    :href="route('registrations.edit', patientVisit.id)"
                                    class="btn btn-icon btn-secondary btn-circle btn-sm me-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Edit Registration">
                                    <i class="fas fa-edit"></i>
                                </Link>

                                <a
                                    @click.prevent="destroy(patientVisit.id)"
                                    class="btn btn-icon  btn-danger btn-circle btn-sm me-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Delete Registration">
                                    <i class="fas fa-trash"></i>
                                </a>

                            </td>

                        </tr>
                        </template>
                        </tbody>
                        <!--end::Table body-->
                    </table>
               </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import AlertMessage from "@/Components/alerts/AlertMessage.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import {router} from "@inertiajs/vue3";
defineProps({
   patientVisits: { type:Object, required: true}
});

const destroy = (patientVisitID: number) => {
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
          router.delete(route('registrations.destroy', patientVisitID));
      }
    });
}
</script>

<style scoped>

</style>
