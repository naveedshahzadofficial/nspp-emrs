<template>
    <Head title="View Reimbursement"/>
    <Toolbar
        title="View Reimbursement"
        :buttons="[{label: 'Back', link: route('reimbursements.index')}]"
        :breadcrumbs="[
            {label: 'Reimbursements', link: route('reimbursements.index')},
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
                            <div class="col-lg-12">
                                <label class="form-label fw-semibold">Employee</label>
                                <span class="form-control form-control-solid">
                                      {{ reimbursement?.employee?.officer_name }}&nbsp;({{ reimbursement?.employee?.designation}}) </span>
                            </div>
                        </div>
                         <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Attachment</label>
                                <span class="form-control form-control-solid"><span v-if="reimbursement?.attachment_file">
                                    <a :href="reimbursement?.attachment_file" target="_blank">View File</a>
                                </span></span>
                            </div>
                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Actual Amount</label>
                                <span class="form-control form-control-solid">{{ reimbursement.actual_amount }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Approved Amount by MO</label>
                                <span class="form-control form-control-solid">{{ reimbursement.approved_amount }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <label class="form-label fw-semibold">Comments</label>
                                <span class="form-control form-control-solid">{{ reimbursement.comments }}</span>
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
    reimbursement: { type: Object, required: true}
});
</script>
