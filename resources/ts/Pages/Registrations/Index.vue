<template>
    <Head title="Registrations"/>
    <Toolbar
        title="Registrations"
        :buttons="[{label: 'Add Registration', link: route('registrations.create')}]"
        :breadcrumbs="[
           {label: 'Dashboard', link: route('dashboard')},
           {label: 'Registrations', link: null}
        ]"
    />

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
                        <template v-for="patientVisit in patientVisits.data" :key="patientVisit.id">
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
                                    title="Edit">
                                    <i class="fas fa-edit"></i>
                                </Link>

                                <a
                                    @click.prevent="destroy(patientVisit.id)"
                                    class="btn btn-icon  btn-danger btn-circle btn-sm me-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Delete">
                                    <i class="fas fa-trash"></i>
                                </a>

                            </td>

                        </tr>
                        </template>
                        </tbody>
                        <!--end::Table body-->
                    </table>
               </div>
            <Pagination :meta="patientVisits?.meta" :links="patientVisits?.links" />

        </div>
    </div>

      </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->

</template>

<script lang="ts" setup>
import AlertMessage from "@/Components/alerts/AlertMessage.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import {router} from "@inertiajs/vue3";
import Pagination from "@/Components/paginations/Pagination.vue";
import {ref, watch} from "vue";
import {debounce} from "lodash";
const props = defineProps({
   patientVisits: { type:Object, required: true},
   filters: Object
});

const search: any = ref(props.filters?.search);
const limit: any = ref(props.filters?.limit || '30');

watch(search, debounce((value: any) =>{
    filterData();
}, 500 ) as any);

const filterData = () => {
    router.get(route('patient-visits.index'),{search: search.value, limit:limit.value},{
        preserveScroll: true,
        preserveState: true,
        replace: true
    });
}

const destroy = (_id: number) => {
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
            router.delete(route('patient-types.destroy', _id), {
                preserveScroll: true
            });
        }
    });
}

</script>

<style scoped>

</style>
