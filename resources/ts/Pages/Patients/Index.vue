<template>
    <Head title="Patients"/>
    <Toolbar
        title="Patients"
        :buttons="[{label: 'Add Patient', link: route('patients.create'), permission: 'create patients'}]"
        :breadcrumbs="[ {label: 'Patients', link: null} ]"
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

                <div class="table-responsive ">
                    <table
                        class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                    >
                        <!--begin::Table head-->
                        <thead>
                        <tr class="fw-semibold fs-6 text-gray-800">
                            <th>Patient</th>
                            <th>CNIC/Mobile</th>
                            <th class="text-center">Status</th>
                            <th class="text-center w-200px">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="patient in patients.data" :key="patient.id">
                            <tr>

                                <td>
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar-->
                                        <div class="symbol symbol-45px me-5">
                                            <img
                                                v-if="patient.patient_image"
                                                alt="Pic"
                                                :src="patient.patient_image"
                                            />
                                            <span
                                                v-else
                                                :class="`bg-light-primary text-primary`"
                                                class="symbol-label fw-bolder"
                                            >
                                        {{ patient.patient_name.charAt(0) }}
                                        </span>
                                        </div>
                                        <!--end::Avatar-->

                                        <!--begin::Name-->
                                        <div class="d-flex justify-content-start flex-column">
                                            <span class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ patient.patient_name }}</span>
                                            <span class="text-muted text-hover-primary fw-bold text-muted d-block fs-7">
                                                <span class="text-dark">Gender</span>:
                                                {{ patient?.gender?.gender_name }}
                                            </span>
                                            <span class="text-muted text-hover-primary fw-bold text-muted d-block fs-7">
                                                <span class="text-dark">Age</span>:
                                                {{ patient.patient_age }}
                                            </span>
                                            <span class="text-muted text-hover-primary fw-bold text-muted d-block fs-7">
                                                <span class="text-dark">Designation</span>:
                                                {{ patient.designation }}
                                            </span>

                                        </div>
                                        <!--end::Name-->
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">

                                        <!--begin::Name-->
                                        <div class="d-flex justify-content-start flex-column">
                                            <span class="text-muted text-hover-primary fw-bold text-muted d-block fs-7">
                                                <span class="text-dark">CNIC</span>:
                                                {{ patient.patient_cnic }}
                                            </span>
                                            <span class="text-muted text-hover-primary fw-bold text-muted d-block fs-7">
                                                <span class="text-dark">Mobile</span>:
                                                {{ patient.patient_phone }}
                                            </span>

                                        </div>
                                        <!--end::Name-->
                                    </div>
                                </td>

                                <td class="text-center">
                                    <span class="badge font-weight-bold"
                                          :class="[patient.status?'badge-success':'badge-danger']">
                                        {{ patient.status?'Active':'Inactive' }}
                                    </span>
                                </td>
                                <td class="text-center">
                                    <Link
                                        v-if="hasPermission('view patients')"
                                        :href="route('patients.show', patient.id)"
                                        class="btn btn-icon btn-primary btn-circle btn-sm me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="View">
                                        <i class="fas fa-eye"></i>
                                    </Link>

                                    <Link
                                        v-if="hasPermission('update patients')"
                                        :href="route('patients.edit', patient.id)"
                                        class="btn btn-icon btn-secondary btn-circle btn-sm me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Edit">
                                        <i class="fas fa-edit"></i>
                                    </Link>

                                    <a
                                        v-if="hasPermission('toggle status patients')"
                                        @click.prevent="toggleStatus('patients.toggle-status', patient)"
                                       class="btn btn-icon btn-circle btn-sm me-2"
                                       :class="[patient.status?'btn-danger':'btn-success']"
                                       data-bs-toggle="tooltip"
                                       data-bs-placement="top"
                                       :title="[patient.status?'Deactivate':'Activate']">
                                        <i class="icon-xl fas"
                                           :class="[patient.status?'fa-toggle-off':'fa-toggle-on']"
                                        ></i>
                                    </a>

                                    <a
                                        v-if="hasPermission('delete patients')"
                                        @click.prevent="destroy('patients.destroy', patient.id)"
                                        class="btn btn-icon btn-danger btn-circle btn-sm me-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Delete">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </div>

                <Pagination :meta="patients?.meta" :links="patients?.links" />
            </div>
            </div>

        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>

<script lang="ts" setup>
import AlertMessage from "@/Components/alerts/AlertMessage.vue";
import Pagination from "@/Components/paginations/Pagination.vue";
import { ref, watch} from "vue";
import {debounce} from "lodash";
import {useCommons} from "@/core/composables/commons";
import {usePermission} from "@/core/composables/permission";
const { filterData, destroy, toggleStatus } = useCommons();
const { hasPermission } = usePermission()


const props = defineProps({
    patients: { type: Object, required: true },
    filters: Object
});

const search: any = ref(props.filters?.search);
const limit: any = ref(props.filters?.limit || '30');

watch([search, limit], debounce((value: any) =>{
    filterData('patients.index', {search: search.value, limit:limit.value});
}, 500 ) as any);

</script>

<style scoped>

</style>
