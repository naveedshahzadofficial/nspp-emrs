<template>
    <Head title="View Complaint"/>
    <Toolbar
        title="View Complaint"
        :buttons="[{label: 'Back', link: route('complaints.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Complaints', link: route('complaints.index')},
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
                                <label class="form-label fw-semibold">Complaint Name</label>
                                <span class="form-control form-control-solid">{{ complaint.complaint_name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ complaint.status?'Active':'Inactive' }}</span>
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
    complaint: { type: Object, required: true}
});
</script>
