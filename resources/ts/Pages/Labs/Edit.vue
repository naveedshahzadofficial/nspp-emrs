<script lang="ts" setup>
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import { useForm } from "@inertiajs/vue3";
const props = defineProps({
    lab: { type: Object, required: true },
});
const form = useForm({
    lab_name: props.lab?.lab_name,
    speciality: props.lab?.speciality,
    address: props.lab?.address,
    contact: props.lab?.contact,
    status: props.lab?.status,
});
</script>

<template>
    <Head title="Update Lab" />
    <Toolbar
        title="Update Lab"
        :buttons="[{ label: 'Back', link: route('labs.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            { label: 'Labs', link: route('labs.index') },
            { label: 'Update', link: null },
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.put(route('labs.update', lab?.id))">
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Lab Name</label
                                >
                                <input
                                    v-model="form.lab_name"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Lab Name"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.lab_name"
                                />
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Speciality</label
                                >
                                <input
                                    v-model="form.speciality"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Speciality"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.speciality"
                                />
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Address</label
                                >
                                <input
                                    v-model="form.address"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Address"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.address"
                                />
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Contact</label
                                >
                                <input
                                    v-model="form.contact"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Contract"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.contact"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Status</label
                                >
                                <div class="d-flex">
                                    <div
                                        v-for="status in [
                                            { id: 1, name: 'Active' },
                                            { id: 0, name: 'Inactive' },
                                        ]"
                                        :key="status.id"
                                        class="form-check form-check-custom form-check-sm me-10"
                                    >
                                        <input
                                            v-model="form.status"
                                            :value="status.id"
                                            class="form-check-input"
                                            name="status"
                                            type="radio"
                                            :id="`status_${status.id}`"
                                        />
                                        <label
                                            class="form-check-label"
                                            :for="`status_${status.id}`"
                                            >{{ status.name }}</label
                                        >
                                    </div>
                                </div>
                                <ServerErrorMessage
                                    :error="form.errors.status"
                                />
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
                            :data-kt-indicator="form.processing ? 'on' : 'off'"
                        >
                            <span class="indicator-label"> Update </span>

                            <span class="indicator-progress">
                                Please wait...
                                <span
                                    class="spinner-border spinner-border-sm align-middle ms-2"
                                ></span>
                            </span>
                        </button>
                        <Link
                            :href="route('labs.index')"
                            class="btn btn-secondary"
                            >Cancel</Link
                        >
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
