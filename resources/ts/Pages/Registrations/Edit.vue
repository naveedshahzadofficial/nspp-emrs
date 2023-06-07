<template>
    <Head title="Update Registration"/>
    <Toolbar
        title="Update Registration"
        :buttons="[{label: 'Back', link: route('registrations.index')}]"
        :breadcrumbs="[
            {label: 'Registrations', link: route('registrations.index')},
            {label: 'Update', link: null}
        ]"
    />

    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
        <!--begin::Form-->
        <form @submit.prevent="form.put(route('registrations.update', patientVisit?.id))" >
            <div class="card-body">
                <div class="pb-5 pb-lg-5">
                    <h2 class="fw-bold text-dark">Patient Details</h2>
                </div>
                <div class="mb-10">
                    <label class="required form-label">Type of Patient</label>
                    <div class="d-flex">
                        <div v-for="patientType in patientTypes" :key="patientType.id" class="form-check form-check-custom form-check-sm me-10">
                            <input v-model="form.patient_type_id" :value="patientType.id" class="form-check-input" name="patient_type_id" type="radio" :id="`patient_type_id_${patientType.id}`">
                            <label class="form-check-label" :for="`patient_type_id_${patientType.id}`">{{ patientType.patient_type }}</label>
                        </div>
                    </div>
                    <ServerErrorMessage :error="form.errors.patient_type_id"/>
                </div>

                <div class="mb-10 row">
                    <div class="col-lg-4">
                        <label class="required form-label">Name of Patient</label>
                        <input v-model="form.patient_name"  type="text" class="form-control form-control-sm" placeholder="Patient Name"/>
                        <ServerErrorMessage :error="form.errors.patient_name"/>
                    </div>
                    <div class="col-lg-8">
                        <label class="required form-label">Gender</label>
                        <div class="d-flex">
                            <div v-for="gender in genders" :key="gender.id" class="form-check form-check-custom form-check-sm me-10">
                                <input v-model="form.gender_id" :value="gender.id" class="form-check-input" name="gender_id" type="radio" :id="`gender_id_${gender.id}`">
                                <label class="form-check-label" :for="`gender_id_${gender.id}`">{{ gender.gender_name }}</label>
                            </div>
                        </div>
                        <ServerErrorMessage :error="form.errors.gender_id"/>
                    </div>
                </div>

                <div class="mb-10 row">
                    <div class="col-lg-4">
                        <label class="required form-label">Age</label>
                        <input v-model="form.patient_age"  type="text" class="form-control form-control-sm" placeholder="Patient Age"/>
                        <ServerErrorMessage :error="form.errors.patient_age"/>
                    </div>
                    <div class="col-lg-4">
                        <label class="required form-label">Relationship with Employee</label>
                        <input v-model="form.relationship_with_employee"  type="text" class="form-control form-control-sm" placeholder="Relationship with Employee"/>
                        <ServerErrorMessage :error="form.errors.relationship_with_employee"/>
                    </div>
                    <div class="col-lg-4">
                        <label class="required form-label">Designation</label>
                        <input v-model="form.designation"  type="text" class="form-control form-control-sm" placeholder="Designation"/>
                        <ServerErrorMessage :error="form.errors.designation"/>
                    </div>
                </div>

                <div class="mb-10 row">
                    <div class="col-lg-4">
                        <label class="required form-label">CNIC No.</label>
                        <input v-model="form.patient_cnic"  type="text" class="form-control form-control-sm" placeholder="Patient CNIC"/>
                        <ServerErrorMessage :error="form.errors.patient_cnic"/>
                    </div>
                </div>

                <div class="separator my-10"></div>
                <div class="pb-5 pb-lg-5">
                    <h2 class="fw-bold text-dark">Vitals</h2>
                </div>

                <div class="mb-10 row">
                    <div class="col-lg-4">
                        <label class="form-label">Temperature (°F)</label>
                        <v-select v-model="form.temperature" :options="range(97.0, 106.0, .1).reverse()" class="v-select-custom" placeholder="Please Select" />
                        <ServerErrorMessage :error="form.errors.temperature"/>

                    </div>

                    <div class="col-lg-4">
                        <label class="form-label">B.P. Systolic (mmHg)</label>
                        <v-select v-model="form.bp_systolic" :options="range(40, 300, 5, 0)" class="v-select-custom" placeholder="Please Select" />
                        <ServerErrorMessage :error="form.errors.bp_systolic"/>

                    </div>

                    <div class="col-lg-4">
                        <label class="form-label">B.P. Diastolic (mmHg)</label>
                        <v-select v-model="form.bp_diastolic" :options="range(40, 300, 5, 0)" class="v-select-custom" placeholder="Please Select" />
                        <ServerErrorMessage :error="form.errors.bp_diastolic"/>

                    </div>


                </div>

                <div class="mb-10 row">
                    <div class="col-lg-4">
                        <label class="form-label">Pulse (bpm)</label>
                        <v-select v-model="form.pulse" :options="range(50, 120, 1, 0)" class="v-select-custom" placeholder="Please Select" />
                        <ServerErrorMessage :error="form.errors.pulse"/>

                    </div>

                    <div class="col-lg-4">
                        <label class="form-label">Sugar (mg/dL)</label>
                        <input v-model="form.sugar"  type="text" class="form-control form-control-sm" placeholder="Sugar (mg/dL)"/>
                        <ServerErrorMessage :error="form.errors.sugar"/>

                    </div>
                    <div class="col-lg-4">
                        <label class="form-label">Weight (kg)</label>
                        <v-select v-model="form.weight" :options="range(1.0, 200.0, .1)" class="v-select-custom" placeholder="Please Select" />
                        <ServerErrorMessage :error="form.errors.weight"/>

                    </div>
                </div>

                <div class="mb-10 row">
                    <div class="col-lg-4">
                        <label class="form-label">Height (cm)</label>
                        <input v-model="form.height"  type="text" class="form-control form-control-sm" placeholder="Height (cm)"/>
                        <ServerErrorMessage :error="form.errors.height"/>

                    </div>
                </div>

                <div class="mb-10 row">
                    <div class="col-lg-12">
                        <label class="form-label">Notes</label>
                        <textarea v-model="form.notes"  class="form-control form-control-sm" rows="4"></textarea>
                        <ServerErrorMessage :error="form.errors.notes"/>
                    </div>
                </div>



            </div>
            <div class="card-footer">
                <button
                    type="submit"
                    ref="submitButton"
                    class="btn btn-primary me-2"
                    :disabled="form.processing"
                    :data-kt-indicator="form.processing?'on':'off'"
                >
                    <span class="indicator-label"> Submit </span>

                    <span class="indicator-progress">
            Please wait...
            <span
                class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
                </button>
                <Link :href="route('registrations.index')" class="btn btn-secondary">Cancel</Link>
            </div>
        </form>
        <!--end::Form-->
    </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>

<script lang="ts" setup>
import {useForm} from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";

const props =  defineProps({
    patientTypes: { type: Object, required: true },
    genders: { type: Object, required: true },
    patientVisit: { type: Object, required: true },
});

const form = useForm({
    _method: 'put',
    patient_type_id: props.patientVisit?.patient?.patient_type_id,
    patient_name: props.patientVisit?.patient?.patient_name,
    gender_id: props.patientVisit?.patient?.gender_id,
    patient_age: props.patientVisit?.patient?.patient_age,
    relationship_with_employee: props.patientVisit?.patient?.relationship_with_employee,
    designation: props.patientVisit?.patient?.designation,
    patient_cnic: props.patientVisit?.patient?.patient_cnic,
    temperature: props.patientVisit?.temperature,
    bp_systolic: props.patientVisit?.bp_systolic,
    bp_diastolic: props.patientVisit?.bp_diastolic,
    pulse: props.patientVisit?.pulse,
    sugar: props.patientVisit?.sugar,
    weight: props.patientVisit?.weight,
    height: props.patientVisit?.height,
    notes: props.patientVisit?.notes
});


</script>
