<template>
    <Head title="View Patient"/>
    <Toolbar
        title="View Patient"
        :buttons="[{label: 'Back', link: route('patients.index')}]"
        :breadcrumbs="[
            {label: 'Patients', link: route('patients.index')},
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
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Patient Type</label>
                                <span class="form-control form-control-solid">{{ patient?.patient_type?.type_name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Patient Name</label>
                                <span class="form-control form-control-solid">{{ patient.patient_name }}</span>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Gender</label>
                                <span class="form-control form-control-solid">{{ patient?.gender?.gender_name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Age</label>
                                <span class="form-control form-control-solid">{{ patient.patient_age }}</span>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Relationship with Employee</label>
                                <span class="form-control form-control-solid">{{ patient?.relationship_with_employee }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Designation</label>
                                <span class="form-control form-control-solid">{{ patient.designation }}</span>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Mobile No.</label>
                                <span class="form-control form-control-solid">{{ patient?.patient_phone }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">CNIC No.</label>
                                <span class="form-control form-control-solid">{{ patient.patient_cnic }}</span>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ patient.status?'Active':'Inactive' }}</span>
                            </div>
                        </div>
                    </div>
                    <!--end::Card body-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
<script lang="ts" setup>
defineProps({
    patient: { type: Object, required: true}
});
</script>
