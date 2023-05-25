<template>
    <Head title="Add Registration"/>

    <!--begin::Card-->
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <h3 class="card-title">Registration Add</h3>

        </div>

        <!--begin::Form-->
        <div class="card-body">

            <div class="mb-10">
                <label for="exampleFormControlInput1" class="required form-label">Type of Patient</label>
                <div class="d-flex">
                <div v-for="patientType in patientTypes" :key="patientType.id" class="form-check form-check-custom form-check-solid me-10">
                    <input v-model="searchForm.patient_type_id" class="form-check-input" name="type_of_patient" type="radio" :id="`type_of_patient_${patientType.id}`">
                    <label class="form-check-label" :for="`type_of_patient_${patientType.id}`">{{ patientType.patient_type }}</label>
                </div>
                </div>
            </div>

            <div class="mb-10 row">
                <div class="col-lg-6">
                    <label class="required form-label">Name of Patient</label>
                    <input v-model="searchForm.patient_name"  type="text" class="form-control form-control-solid" placeholder="Patient Name"/>
                </div>
                <div class="col-lg-6">
                    <label class="required form-label">Gender</label>
                    <input v-model="searchForm.patient_gender"  type="text" class="form-control form-control-solid" placeholder="Patient Name"/>
                </div>
            </div>



            <div class="row form-group mt-5">
                <div class="col-lg-6">
                    <label>CNIC No.<span class="color-red-700"></span></label>
                    <input maxlength="254" type="text" name="website_url" class="form-control" placeholder="CNIC No."  />
                    <div class="error"></div>
                </div>
                <div class="col-lg-6">
                    <label>Email Address <span class="color-red-700"></span></label>
                    <input maxlength="100" type="email" name="business_email_address" class="form-control" placeholder="Email Address"  />
                    <div class="error"></div>
                </div>
            </div>


        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <a href="" class="btn btn-secondary">Cancel</a>
        </div>
        <!--end::Form-->
    </div>

</template>

<script lang="ts" setup>
import {useForm} from "@inertiajs/vue3";

defineProps({
    patientTypes: { type: Array, required: true },
});

let searchForm = useForm({
    patient_type_id: '',
    patient_name: '',
    patient_gender: '',
});

</script>

<style scoped>

</style>
