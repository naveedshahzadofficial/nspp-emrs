<template>
    <Head title="Add Patient"/>
    <Toolbar
        title="Add Patient"
        :buttons="[{label: 'Back', link: route('patients.index')}]"
        :breadcrumbs="[
            {label: 'Patients', link: route('patients.index')},
            {label: 'Add', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.post(route('patients.store'))">
                <!--begin::Card body-->
                <div class="card-body">
                    <div class="row mb-10">
                        <div class="col-lg-12">
                            <label class="form-label required">Patient Type</label>
                            <div class="d-flex">
                                <div v-for="patientType in patientTypes" :key="patientType.id" class="form-check form-check-custom form-check-sm me-10">
                                    <input v-model="form.patient_type_id" :value="patientType.id" class="form-check-input" name="patient_type_id" type="radio" :id="`patient_type_id_${patientType.id}`">
                                    <label class="form-check-label" :for="`patient_type_id_${patientType.id}`">{{ patientType.type_name }}</label>
                                </div>
                            </div>
                            <ServerErrorMessage :error="form.errors.patient_type_id"/>
                        </div>
                    </div>

                    <div class="row mb-10">

                        <div class="col-lg-6">
                            <label class="required form-label">Name of Patient</label>
                            <input v-model="form.patient_name"  type="text" class="form-control form-control-sm" placeholder="Patient Name"/>
                            <ServerErrorMessage :error="form.errors.patient_name"/>
                        </div>

                        <div class="col-lg-6">
                            <label class="form-label required">Gender</label>
                            <div class="d-flex">
                                <div v-for="gender in genders" :key="gender.id" class="form-check form-check-custom form-check-sm me-10">
                                    <input v-model="form.gender_id" :value="gender.id" class="form-check-input" name="gender_id" type="radio" :id="`gender_id_${gender.id}`">
                                    <label class="form-check-label" :for="`gender_id_${gender.id}`">{{ gender.gender_name }}</label>
                                </div>
                            </div>
                            <ServerErrorMessage :error="form.errors.patient_type_id"/>
                        </div>
                    </div>

                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="required form-label">Age</label>
                            <input v-model="form.patient_age"  type="text" class="form-control form-control-sm" placeholder="Patient Age"/>
                            <ServerErrorMessage :error="form.errors.patient_age"/>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label">Relationship with Employee</label>
                            <input v-model="form.relationship_with_employee"  type="text" class="form-control form-control-sm" placeholder="Relationship with Employee"/>
                            <ServerErrorMessage :error="form.errors.relationship_with_employee"/>
                        </div>
                    </div>

                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="required form-label">Designation</label>
                            <input v-model="form.designation"  type="text" class="form-control form-control-sm" placeholder="Designation"/>
                            <ServerErrorMessage :error="form.errors.designation"/>
                        </div>

                        <div class="col-lg-6">
                            <label class="required form-label">Mobile No.</label>
                            <input v-model="form.patient_phone"  type="text" class="form-control form-control-sm" placeholder="Patient Mobile"/>
                            <ServerErrorMessage :error="form.errors.patient_phone"/>
                        </div>
                    </div>

                     <div class="row">
                         <div class="col-lg-6">
                             <label class="form-label">CNIC No.</label>
                             <input v-model="form.patient_cnic"  type="text" class="form-control form-control-sm" placeholder="Patient CNIC"/>
                             <ServerErrorMessage :error="form.errors.patient_cnic"/>
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
                            <span class="indicator-label"> Submit </span>

                            <span class="indicator-progress">
                                    Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
          </span>
                        </button>
                        <Link :href="route('patients.index')" class="btn btn-secondary">Cancel</Link>
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
defineProps({
    patientTypes: {type: Object ,required: true},
    genders: {type: Object ,required: true},
});
const form = useForm({
    patient_type_id: '',
    patient_name: '',
    gender_id: '',
    patient_age: '',
    relationship_with_employee: '',
    designation: '',
    patient_cnic: '',
    patient_phone: '',
    status: '',
});
</script>
