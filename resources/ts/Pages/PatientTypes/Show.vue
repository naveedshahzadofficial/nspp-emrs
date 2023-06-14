<template>
    <Head title="View Patient Type"/>
    <Toolbar
        title="View Patient Type"
        :buttons="[{label: 'Back', link: route('patient-types.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Patient Types', link: route('patient-types.index')},
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
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Patient Type</label>
                                <span class="form-control form-control-solid">{{ patientType.type_name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ patientType.status?'Active':'Inactive' }}</span>
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
    patientType: { type: Object, required: true}
});
</script>
