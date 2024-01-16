<template>
    <Head title="Update Reimbursement"/>
    <Toolbar
        title="Update Reimbursement"
        :buttons="[{label: 'Back', link: route('reimbursements.index')}]"
        :breadcrumbs="[
            {label: 'Reimbursements', link: route('reimbursements.index')},
            {label: 'Update', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.post(route('reimbursements.update', reimbursement?.id))">
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-12">
                                <label class="form-label required">Patient</label>
                                <v-select
                                    v-model="form.patient_id"
                                    :options="patients"
                                    :reduce="(option) => option.id"
                                    label="patient_name"
                                    class="v-select-custom"
                                    placeholder="Please Select" >
                                    <template v-slot:option="option">
                                        {{ option.patient_name }} --- {{ option?.patient_type?.type_name }}
                                        <span v-if="[1,3].includes(parseInt(option.patient_type_id)) && option?.patient_employee"> --- ({{ option?.patient_employee?.officer_name }}, {{ option?.patient_employee?.designation}})</span>
                                        <span v-if="2 === parseInt(option.patient_type_id) && option?.patient_participant"> --- ({{ option?.patient_participant?.participant_name }}, {{ option?.patient_participant?.participant_designation}})</span>
                                    </template>
                                    <template
                                        #selected-option="option"
                                    >
                                        {{ option.patient_name }} --- {{ option?.patient_type?.type_name }}
                                        <span v-if="[1,3].includes(parseInt(option.patient_type_id)) && option?.patient_employee"> --- ({{ option?.patient_employee?.officer_name }}, {{ option?.patient_employee?.designation}})</span>
                                        <span v-if="2 === parseInt(option.patient_type_id) && option?.patient_participant"> --- ({{ option?.patient_participant?.participant_name }}, {{ option?.patient_participant?.participant_designation}})</span>
                                    </template>
                                </v-select>
                                <ServerErrorMessage :error="form.errors.patient_id"/>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Attachment  <span v-if="reimbursement?.attachment_file">
                                    <a :href="reimbursement?.attachment_file" target="_blank">View File</a>
                                </span></label>
                                <input style="background-color: transparent !important;" type="file" @input="form.attachment_file = $event.target.files[0]" class="form-control form-control-sm" placeholder="Upload File" />
                                <ServerErrorMessage :error="form.errors.attachment_file"/>
                                <div v-if="form.progress" class="progress">
                                    <div class="progress-bar" role="progressbar" :style="{width: form.progress.percentage+'%' }" :aria-valuenow="form.progress.percentage" aria-valuemin="0" aria-valuemax="100">{{ form.progress.percentage }}%</div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Actual Amount</label>
                                <input v-model="form.actual_amount"  type="text" class="form-control form-control-sm" placeholder="Actual Amount"/>
                                <ServerErrorMessage :error="form.errors.actual_amount"/>
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label">Approved Amount by MO</label>
                                <input v-model="form.approved_amount"  type="text" class="form-control form-control-sm" placeholder="Approved Amount"/>
                                <ServerErrorMessage :error="form.errors.approved_amount"/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <label class="form-label">Comments</label>
                                <textarea v-model="form.comments"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="form.errors.comments"/>
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
                            <span class="indicator-label"> Update </span>

                            <span class="indicator-progress">
                                    Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
          </span>
                        </button>
                        <Link :href="route('reimbursements.index')" class="btn btn-secondary">Cancel</Link>
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
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {useForm} from "@inertiajs/vue3";
const props = defineProps({
    patients: { type: Array, required: true},
    reimbursement: { type: Object, required: true}
});
const form = useForm({
    _method: 'PUT',
    patient_id: props.reimbursement?.patient_id,
    old_attachment_file: props.reimbursement?.attachment_file,
    attachment_file: '',
    actual_amount: props.reimbursement?.actual_amount,
    approved_amount: props.reimbursement?.approved_amount,
    comments: props.reimbursement?.comments,
});
</script>
