<template>
<Head title="Add Prescription"/>
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
                        Prescription
                    </h1>
                    <!--end::Title-->

                </div>
                <!--end::Page title-->
            </div>
            <!--begin::Card title-->

        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-0 position-relative">

            <ul class="nav nav-tabs nav-line-tabs mb-5 fs-5">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#kt_tab_pane_1"
                    >Vitals</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2"
                    >Risk Factors</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3"
                    >Presenting Complaints</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_4"
                    >Diagnosis</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5"
                    >Medicine Prescription</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6"
                    >Referrals</a
                    >
                </li>
            </ul>

            <!--begin::Header vitals-->
            <div class="card bg-secondary">
            <div class="card-body">
                <div class="d-flex">
                <div class="d-flex align-items-center bg-white p-4">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-125px me-5">
                        <img
                            v-if="patient.patient_image"
                            alt="Pic"
                            :src="patient.patient_image"
                        />
                        <span
                            v-else-if="patient.patient_name"
                            :class="`bg-light-primary text-primary`"
                            class="symbol-label fw-bolder fa-10x"
                        >
                                        {{ patient.patient_name.charAt(0) }}
                                        </span>
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Name-->
                    <div class="d-flex justify-content-start flex-column">
                        <a
                            href="#"
                            class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >{{ patient.patient_name }}</a
                        >
                        <a
                            href="#"
                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                        >
                            <span class="text-dark">Designation</span>:
                            {{ patient.designation }}
                        </a>
                        <a
                            href="#"
                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                        >
                            <span class="text-dark">Age</span>:
                            {{ patient.patient_age }}
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

            <div class="tab-content">
                <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Vitals</span></h4>
                    <div class="section_box">

                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Temperature (°F)</label>
                                <v-select v-model="preForm.vital.temperature" :options="range(97.0, 106.0, .1).reverse()" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.temperature"/>

                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">B.P. Systolic (mmHg)</label>
                                <v-select v-model="preForm.vital.bp_systolic" :options="range(40, 300, 5, 0)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.bp_systolic"/>

                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">B.P. Diastolic (mmHg)</label>
                                <v-select v-model="preForm.vital.bp_diastolic" :options="range(40, 300, 5, 0)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.bp_diastolic"/>

                            </div>


                        </div>
                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Pulse (bpm)</label>
                                <v-select v-model="preForm.vital.pulse" :options="range(50, 120, 1, 0)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.pulse"/>

                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">Sugar (mg/dL)</label>
                                <input v-model="preForm.vital.sugar"  type="text" class="form-control form-control-sm" placeholder="Sugar (mg/dL)"/>
                                <ServerErrorMessage :error="preForm.errors.vital?.sugar"/>

                            </div>
                            <div class="col-lg-4">
                                <label class="form-label">Weight (kg)</label>
                                <v-select v-model="preForm.vital.weight" :options="range(1.0, 200.0, .1)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.weight"/>

                            </div>
                        </div>

                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Height (cm)</label>
                                <input v-model="preForm.vital.height"  type="text" class="form-control form-control-sm" placeholder="Height (cm)"/>
                                <ServerErrorMessage :error="preForm.errors.vital?.height"/>

                            </div>
                        </div>

                        <div class="mb-10 row">
                            <div class="col-lg-12">
                                <label class="form-label">Notes</label>
                                <textarea v-model="preForm.vital.notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.vital?.notes"/>
                            </div>
                        </div>

                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Vital Date</th>
                                    <th class="text-center">Pulse</th>
                                    <th class="text-center">Temperature</th>
                                    <th class="text-center">BP</th>
                                    <th class="text-center">Height</th>
                                    <th class="text-center">Weight</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_visits" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.pulse }}</td>
                                        <td class="text-center">{{ history.temperature }}</td>
                                        <td class="text-center">{{ history.bp_systolic }}/{{ history.bp_diastolic }}</td>
                                        <td class="text-center">{{ history.height }}</td>
                                        <td class="text-center">{{ history.weight }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Risk Factors</span></h4>
                    <div class="section_box">

                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Risk Factors</label>
                                <v-select v-model="preForm.risk_factor.risk_factor_ids"
                                          :options="riskFactors"
                                          label="factor_name"
                                          :reduce="(option) => option.id"
                                          multiple
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.risk_factor?.risk_factor_ids"/>

                            </div>

                            <div class="col-lg-8">
                                <label class="form-label">Notes</label>
                                <textarea v-model="preForm.risk_factor.risk_factor_notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.risk_factor?.risk_factor_notes"/>
                            </div>


                        </div>

                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Risk Factor</th>
                                    <th class="text-center">Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_risk_factors" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.factor_name }}</td>
                                        <td class="text-left">{{ history.factor_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Presenting Complaints</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Complaints</label>
                                <v-select v-model="preForm.complaint.complaint_ids"
                                          :options="complaints"
                                          label="complaint_name"
                                          :reduce="(option) => option.id"
                                           multiple
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.complaint?.complaint_ids"/>

                            </div>

                            <div class="col-lg-8">
                                <label class="form-label">Complaint Notes</label>
                                <textarea v-model="preForm.complaint.complaint_notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.complaint?.complaint_notes"/>
                            </div>


                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Disease</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Diseases</label>
                                <v-select v-model="preForm.disease.disease_ids"
                                          :options="diseases"
                                          label="disease_name"
                                          :reduce="(option) => option.id"
                                          multiple
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.disease?.disease_ids"/>

                            </div>

                            <div class="col-lg-8">
                                <label class="form-label">Disease Notes</label>
                                <textarea v-model="preForm.disease.disease_notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.disease?.disease_notes"/>
                            </div>


                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Complaint History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Complaint</th>
                                    <th class="text-center">Complaint Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_complaints" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.complaint_name }}</td>
                                        <td class="text-left">{{ history.complaint_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Disease History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Disease</th>
                                    <th class="text-center">Disease Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_diseases" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.disease_name }}</td>
                                        <td class="text-left">{{ history.disease_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
                <div class="tab-pane fade" id="kt_tab_pane_4" role="tabpanel">

                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Preliminary Diagnosis</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">
                            <div class="col-lg-3">
                                <label class="form-label">Category</label>
                                <v-select
                                          v-model="diagForm.disease_type_id"
                                          :options="diseaseTypes"
                                          label="type_name"
                                          :reduce="(option) => option.id"
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="diagForm.errors.disease_type_id"/>


                            </div>

                            <div class="col-lg-3">
                                <label class="form-label">Diagnosis</label>
                                <v-select
                                          v-model="diagForm.disease_id"
                                          :options="filterDiseases"
                                          label="disease_name"
                                          :reduce="(option) => option.id"
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="diagForm.errors.disease_id"/>


                            </div>

                            <div class="col-lg-3" v-if="diagForm.disease_type_id===1">
                                <label class="form-label">Procedure</label>
                                <v-select
                                    v-model="diagForm.procedure_id"
                                    :options="filterProcedures"
                                    label="procedure_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom" placeholder="Please Select" />
                                 <ServerErrorMessage :error="diagForm.errors.procedure_id"/>

                            </div>
                            <div class="col-lg-3">
                                <button class="btn btn-success btn-sm mt-7" @click.prevent="addDiagnosis">Save</button>
                            </div>


                        </div>

                        <div class="mb-10 row">

                            <div class="table-responsive">
                                <table
                                    class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                                >
                                    <!--begin::Table head-->
                                    <thead>
                                    <tr class="fw-semibold fs-6 text-gray-800">
                                        <th class="text-center">Category</th>
                                        <th class="text-center">Diagnosis</th>
                                        <th class="text-center">Procedure</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="dig in preForm.diagnosis.diagnoses">
                                        <tr>
                                            <td class="text-center">{{ getDiseaseTypeName(dig.disease_type_id) }}</td>
                                            <td class="text-center">{{ getDiseaseName(dig.disease_id) }}</td>
                                            <td class="text-center">{{ getProcedureName(dig.disease_id) }}</td>
                                            <td class="text-center">
                                                <button class="btn btn-icon btn-sm btn-danger" @click.prevent="deleteDiagnosis(dig)"><i class="las la-trash fs-1"></i></button>
                                            </td>
                                        </tr>
                                    </template>

                                    </tbody>
                                </table>
                            </div>

                        </div>



                        <div class="mb-10 row">
                            <div class="col-lg-12">
                                <label class="form-label">Advise</label>
                                <textarea v-model="preForm.diagnosis.diagnosis_advise"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.diagnosis?.diagnosis_advise"/>
                            </div>
                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Diagnosis</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_diagnosis" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.diagnosis_name }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Medicine Prescription</span></h4>
                    <div class="section_box">

                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Referrals</span></h4>
                    <div class="section_box">

                    </div>
                </div>
            </div>

        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</template>

<script setup lang="ts">
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {useForm} from "@inertiajs/vue3";
import {ref, watch, PropType} from "vue";
import {IDisease} from "@/interfaces/disease.interface";
import {IDiagnosis} from "@/interfaces/diagnosis.interface";
import {IDiseaseType} from "@/interfaces/diseaseType.interface";

const props = defineProps({
    patient: { type: Object, required: true},
    patientVisit: { type: Object, required: true},
    complaints: { type: Array, required: true},
    diseases: { type: Array, required: true},
    diseaseTypes: { type: Array, required: true},
    procedures: { type: Array, required: true},
    riskFactors: { type: Array, required: true},
});

const filterDiseases = ref();
const filterProcedures = ref();

let diagForm = useForm({
    disease_type_id: null,
    disease_id: null,
    procedure_id: null,
});

let preForm = useForm({
    vital: {
            temperature: props.patientVisit?.temperature,
            bp_systolic: props.patientVisit?.bp_systolic,
            bp_diastolic: props.patientVisit?.bp_diastolic,
            pulse: props.patientVisit?.pulse,
            sugar: props.patientVisit?.sugar,
            weight: props.patientVisit?.weight,
            height: props.patientVisit?.height,
            notes: props.patientVisit?.notes
        },
    risk_factor: {
      risk_factor_ids: [],
      risk_factor_notes: ''
    },
    complaint: {
        complaint_ids: [],
        complaint_notes: ''
    },
    disease: {
        disease_ids: [],
        disease_notes: ''
    },
    diagnosis: {
        diagnoses: <IDiagnosis[]>[],
        diagnosis_advise: '',
    }
   }
);

watch(() => diagForm.disease_type_id, value => {
    diagForm.reset( "disease_id", "procedure_id");
    filterDiseases.value = props.diseases?.filter((disease: any) => disease.disease_type_id === value);
    filterProcedures.value = props.procedures?.filter((procedure: any) => procedure.disease_type_id === value);
});

const addDiagnosis = () => {
    diagForm.clearErrors();
    const row = diagForm.data();
    if(row.disease_type_id === null){
        diagForm.setError("disease_type_id", "Category is required.");
    }
    if(row.disease_id === null){
        diagForm.setError("disease_id", "Diagnosis is required.");
    }
    if(row.disease_type_id === null || row.disease_id === null)
        return;

    preForm.diagnosis.diagnoses.push({
        disease_type_id: row.disease_type_id,
        disease_id: row.disease_id,
        procedure_id: row.procedure_id,
    })
    diagForm.reset()
}

const deleteDiagnosis = (dig: Object) => {
    preForm.diagnosis.diagnoses = preForm.diagnosis.diagnoses.filter(obj => obj != dig);
}

const getDiseaseTypeName = (id: number) => (props.diseaseTypes?.filter((diseaseType: any) => diseaseType.id === id)[0] as any)?.type_name
const getDiseaseName = (id: number) => (props.diseases.filter((disease: any) => disease.id === id)[0] as any)?.disease_name;
const getProcedureName = (id: number) => (props.procedures.filter((procedure: any) => procedure.id === id)[0] as any)?.procedure_name || 'Not Available';


</script>
