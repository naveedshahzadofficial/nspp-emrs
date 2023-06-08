<template>
    <Head title="Update Complaint"/>
    <Toolbar
        title="Update Complaint"
        :buttons="[{label: 'Back', link: route('complaints.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Complaints', link: route('complaints.index')},
            {label: 'Update', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.put(route('complaints.update', complaint?.id))">
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Complaint Name</label>
                                <input v-model="form.complaint_name"  type="text" class="form-control form-control-sm" placeholder="Complaint Name"/>
                                <ServerErrorMessage :error="form.errors.complaint_name"/>
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
                            <span class="indicator-label"> Update </span>

                            <span class="indicator-progress">
                                    Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
          </span>
                        </button>
                        <Link :href="route('complaints.index')" class="btn btn-secondary">Cancel</Link>
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
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {router, useForm} from "@inertiajs/vue3";
import {onMounted, watch} from "vue";
const props = defineProps({
    complaint: { type: Object, required: true},
    permissions: Array,
});

const form = useForm({
    complaint_name: props.complaint?.complaint_name,
    status: props.complaint?.status,
});


</script>
