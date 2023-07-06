<script lang="ts" setup>
import {ref} from "vue";
import {useCommons} from "@/core/composables/commons";
const { printReceipt } = useCommons();

const props = defineProps({
    patientVisit: { type: Object, required: true},
});

const patient = ref<any>(props.patientVisit?.patient);
</script>
<style scoped>
@media print {
    @page { margin: 0 15px; }
    body { margin: 1.6cm; }
}
</style>
<template>
    <Head title="View Patient"/>
    <Toolbar
        title="View Patient"
        :buttons="[
            {label: 'Back', link: route('registrations.index')},
            {label: `<i class='fas fa-print'></i>`, link: null, type: 'button', click:printReceipt, class: 'btn-info' },

        ]"
        :breadcrumbs="[
            {label: 'Registrations', link: route('registrations.index')},
            {label: 'View', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Card body-->
                <div class="card-body">

                    <!--begin::Header vitals-->
                    <div class="card bg-secondary">
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="d-flex align-items-center bg-white p-4">
                                    <!--begin::Avatar-->
                                    <div class="symbol symbol-125px me-5">
                                        <img
                                            v-if="patient?.patient_image"
                                            alt="Pic"
                                            :src="patient?.patient_image"
                                        />
                                        <span
                                            v-else-if="patient?.patient_name"
                                            :class="`bg-light-primary text-primary`"
                                            class="symbol-label fw-bolder fa-10x"
                                        >
                                        {{ patient?.patient_name.charAt(0) }}
                                        </span>
                                    </div>
                                    <!--end::Avatar-->

                                    <!--begin::Name-->
                                    <div class="d-flex justify-content-start flex-column">
                                        <a
                                            href="#"
                                            class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                        >{{ patient?.patient_name }}</a
                                        >
                                        <a
                                            href="#"
                                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                        >
                                            <span class="text-dark">Designation</span>:
                                            {{ patient?.designation }}
                                        </a>
                                        <a
                                            href="#"
                                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                        >
                                            <span class="text-dark">Age</span>:
                                            {{ patient?.patient_age }}
                                        </a>

                                    </div>
                                    <!--end::Name-->
                                </div>
                                <div class="flex-grow-1 align-items-center flex-column p-4">
                                    <h3> Vitals &nbsp;</h3>
                                    <div class="separator border-primary my-2"></div>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item m-1"><b>Pulse: </b>{{ patientVisit?.pulse }}</li>
                                        <li class="list-group-item m-1"><b>Temp: </b>{{ patientVisit?.temperature }}</li>
                                        <li class="list-group-item m-1"><b>BP: </b>{{ patientVisit?.bp_systolic }}/{{ patientVisit?.bp_diastolic }}</li>
                                        <li class="list-group-item m-1"><b>Height (cm): </b>{{ patientVisit?.height }}</li>
                                        <li class="list-group-item m-1"><b>Weight (kg): </b>{{ patientVisit?.weight }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Header vitals-->

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Vitals</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-center">Pulse</th>
                                    <th class="text-center">Temperature</th>
                                    <th class="text-center">BP</th>
                                    <th class="text-center">Height</th>
                                    <th class="text-center">Weight</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-start">{{ patientVisit?.created_at }}</td>
                                    <td class="text-center">{{ patientVisit?.pulse }}</td>
                                    <td class="text-center">{{ patientVisit?.temperature }}</td>
                                    <td class="text-center">{{ patientVisit?.bp_systolic }}/{{ patientVisit?.bp_diastolic }}</td>
                                    <td class="text-center">{{ patientVisit?.height }}</td>
                                    <td class="text-center">{{ patientVisit?.weight }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Risk Factors</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_risk_factors.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-start">Risk Factor</th>
                                    <th class="text-start">Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_risk_factors" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td class="text-start">{{ history?.risk_factor?.factor_name }}</td>
                                        <td class="text-start">{{ history.risk_factor_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Risk Factors Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Complaints</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_complaints.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-start">Complaint</th>
                                    <th class="text-start">Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_complaints" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td class="text-start">{{ history?.complaint?.complaint_name }}</td>
                                        <td class="text-start">{{ history?.complaint_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Complaint Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Diseases</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_diseases.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-start">Disease</th>
                                    <th class="text-start">Disease Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_diseases" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td class="text-start">{{ history?.disease?.disease_name }}</td>
                                        <td class="text-start">{{ history.disease_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Disease Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Diagnosis</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_diagnoses.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-start">Category</th>
                                    <th class="text-start">Diagnosis</th>
                                    <th class="text-start">Procedure</th>
                                    <th class="text-start">Advise</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_diagnoses" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td class="text-start">{{ history?.disease_type?.type_name }}</td>
                                        <td class="text-start">{{ history?.disease?.disease_name }}</td>
                                        <td class="text-start">{{ history?.procedure?.procedure_name }}</td>
                                        <td class="text-start">{{ history.diagnosis_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Diagnosis Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Medicine</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_medicines.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th>Name</th>
                                    <th>Generic</th>
                                    <th>Route</th>
                                    <th>Dosage</th>
                                    <th>Frequency</th>
                                    <th>Days</th>
                                    <th class="text-center">Qty</th>
                                    <th class="text-center">Acquire Qty</th>
                                    <th>Acquire From</th>
                                    <th>Instructions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_medicines" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td>{{ history?.medicine?.medicine_name }}</td>
                                        <td>{{ history?.medicine?.medicine_generic.generic_name }}</td>
                                        <td>{{ history?.route?.route_name }}</td>
                                        <td>{{ history.dosage }}</td>
                                        <td>{{ history?.frequency?.frequency_name }}</td>
                                        <td>{{ history.duration_value }}</td>
                                        <td class="text-center">{{ history.qty }}</td>
                                        <td class="text-center"><span v-if="history.acquire_from==='In-House'">{{ history.acquire_qty }}</span><span v-else>-</span></td>
                                        <td>{{ history.acquire_from }}</td>
                                        <td>{{ history.medicine_instructions }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Medicine Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Other Items</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_other_medicines.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th>Name</th>
                                    <th>Generic</th>
                                    <th class="text-center"> Qty</th>
                                    <th class="text-center"> Acquire Qty</th>
                                    <th>Acquire From</th>
                                    <th>Instructions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_other_medicines" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td>{{ history?.medicine?.medicine_name }}</td>
                                        <td>{{ history?.medicine?.medicine_generic.generic_name }}</td>
                                        <td class="text-center">{{ history.qty }}</td>
                                        <td class="text-center"><span v-if="history.acquire_from==='In-House'">{{ history.acquire_qty }}</span><span v-else>-</span></td>
                                        <td>{{ history.acquire_from }}</td>
                                        <td>{{ history.medicine_instructions }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Other Item Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Referral – Labs</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_labs.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-start">Test Category</th>
                                    <th class="text-start">Test Type</th>
                                    <th class="text-start">Test Name</th>
                                    <th class="text-start">Further Instructions</th>
                                    <th class="text-start">Refer to Lab</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_labs" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td>{{ history?.test_category?.category_name }}</td>
                                        <td>{{ history?.test_type?.type_name }}</td>
                                        <td>{{ history?.test?.test_name }}</td>
                                        <td>{{ history.test_instructions }}</td>
                                        <td>{{ history?.lab?.lab_name }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Lab Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Referral – Hospitals</span></h4>
                    <div class="section_box">
                        <div class="table-responsive"
                             v-if="patientVisit?.patient_hospitals.length">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-start">Date</th>
                                    <th class="text-start"> Hospital</th>
                                    <th class="text-center">Priority</th>
                                    <th class="text-start"> Remarks</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patientVisit?.patient_hospitals" :key="history.id">
                                    <tr>
                                        <td class="text-start">{{ history.created_at }}</td>
                                        <td>{{ history?.hospital?.hospital_name }}</td>
                                        <td class="text-center">{{ history.priority }}</td>
                                        <td>{{ history.remarks }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                        <p v-else>No Hospital Found</p>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Advice</span></h4>
                    <div class="section_box">
                        <p>{{ patientVisit?.diagnosis_notes }}</p>
                    </div>



                </div>
                <!--end::Card body-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
