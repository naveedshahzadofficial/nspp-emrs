<template>
    <Head title="Update Test" />
    <Toolbar
        title="Update Test"
        :buttons="[{ label: 'Back', link: route('tests.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Tests',
                link: route('tests.index'),
            },
            { label: 'Update', link: null },
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
                        form.put(
                            route(
                                'tests.update',
                                test?.id
                            )
                        )
                    "
                >
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Test Types</label
                                >
                                <v-select
                                    v-model="form.test_type_id"
                                    :options="testTypes"
                                    label="type_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom"
                                    placeholder="Please Select"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.test_type_id"
                                />
                            </div>

                            <div class="col-lg-6">
                                <label class="required form-label"
                                    >Test Name</label
                                >
                                <input
                                    v-model="form.test_name"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Type Name"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.test_name"
                                />
                            </div>
                        </div>
                        <div class="row mt-5">
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
                            :href="route('tests.index')"
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

<script lang="ts" setup>
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import { useForm } from "@inertiajs/vue3";
const props = defineProps({
    testTypes: {type: Array ,required: true},
    test: { type: Object, required: true },
});
const form = useForm({
    test_type_id: props.test?.test_type_id,
    test_name: props.test?.test_name,
    status: props.test?.status,
});
</script>
