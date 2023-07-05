<template>
    <Head title="Registrations"/>
    <Toolbar
        title="Registrations"
        :buttons="[{label: 'Add Registration', link: route('registrations.create'), permission: 'create registrations'}]"
        :breadcrumbs="[
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
                            <th class="p-0 min-w-200px text-center">Date</th>
                            <th class="p-0 min-w-200px text-center">Time</th>
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
                                            v-if="patientVisit.patient.patient_image"
                                            alt="Pic"
                                            :src="patientVisit.patient.patient_image"
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
                            <td class="fw-semibold text-center">{{ patientVisit.date }}</td>
                            <td class="fw-semibold text-center">{{ patientVisit.time }}</td>

                            <td class="text-center">
                                <Link
                                    v-if="hasPermission('view registrations')"
                                    :href="route('registrations.show', patientVisit.id)"
                                    class="btn btn-icon btn-primary btn-circle btn-sm me-2 mb-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="View">
                                    <i class="fas fa-eye"></i>
                                </Link>

                                <Link
                                    v-if="hasPermission('history registrations')"
                                    :href="route('registrations.history', patientVisit.id)"
                                    class="btn btn-icon btn-primary btn-circle btn-sm me-2 mb-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="History">
                                    <i class="fas fa-history"></i>
                                </Link>

                                <Link
                                    v-if="hasPermission('proceed registrations')"
                                    :href="route('registrations.proceed', patientVisit.id)"
                                    class="btn btn-icon btn-warning btn-circle btn-sm me-2 mb-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Proceed">
                                    <i class="fas fa-step-forward"></i>
                                </Link>

                                <Link
                                    v-if="hasPermission('pharmacy registrations')"
                                    :href="route('registrations.pharmacy.view', patientVisit.id)"
                                    class="btn btn-icon btn-warning btn-circle btn-sm me-2 mb-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Dispense Medicine">
                                    <i class="fas fa-book-medical"></i>
                                </Link>


                                <Link
                                    v-if="hasPermission('update registrations')"
                                    :href="route('registrations.edit', patientVisit.id)"
                                    class="btn btn-icon btn-secondary btn-circle btn-sm me-2 mb-2"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Edit">
                                    <i class="fas fa-edit"></i>
                                </Link>

                                <a
                                    v-if="hasPermission('delete registrations')"
                                    @click.prevent="destroy('registrations.destroy', patientVisit.id)"
                                    class="btn btn-icon  btn-danger btn-circle btn-sm me-2 mb-2"
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
import {useCommons} from "@/core/composables/commons";
import {usePermission} from "@/core/composables/permission";
const { filterData, destroy } = useCommons();
const { hasPermission } = usePermission()

const props = defineProps({
   patientVisits: { type:Object, required: true},
   filters: Object
});

const search: any = ref(props.filters?.search);
const limit: any = ref(props.filters?.limit || '30');

watch([search, limit], debounce((value: any) =>{
    filterData('registrations.index', {search: search.value, limit:limit.value});
}, 500 ) as any);

</script>

<style scoped>

</style>
