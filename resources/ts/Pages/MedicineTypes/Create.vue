<script lang="ts" setup>
import { useForm } from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";

const form = useForm({
    type_name: "",
    is_multiply: "",
    status: "",
});
</script>

<template>
    <Head title="Add Medicine Type" />
    <Toolbar
        title="Add Medicine Type"
        :buttons="[{ label: 'Back', link: route('medicine-types.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Medicine Types',
                link: route('medicine-types.index'),
            },
            { label: 'Add', link: null },
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form
                    @submit.prevent="
                        form.post(route('medicine-types.store'))
                    "
                >
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Type Name</label
                                >
                                <input
                                    v-model="form.type_name"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Type Name"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.type_name"
                                />
                            </div>

                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Multiply</label
                                >
                                <div class="d-flex">
                                    <div
                                        v-for="multiply in [
                                            { id: 1, name: 'Yes' },
                                            { id: 0, name: 'No' },
                                        ]"
                                        :key="multiply.id"
                                        class="form-check form-check-custom form-check-sm me-10"
                                    >
                                        <input
                                            v-model="form.is_multiply"
                                            :value="multiply.id"
                                            class="form-check-input"
                                            name="is_multiply"
                                            type="radio"
                                            :id="`multiply_${multiply.id}`"
                                        />
                                        <label
                                            class="form-check-label"
                                            :for="`multiply_${multiply.id}`"
                                        >{{ multiply.name }}</label
                                        >
                                    </div>
                                </div>
                                <ServerErrorMessage
                                    :error="form.errors.is_multiply"
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
                            <span class="indicator-label"> Submit </span>

                            <span class="indicator-progress">
                                Please wait...
                                <span
                                    class="spinner-border spinner-border-sm align-middle ms-2"
                                ></span>
                            </span>
                        </button>
                        <Link
                            :href="route('medicine-types.index')"
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
