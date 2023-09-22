<script lang="ts" setup>
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import { useForm } from "@inertiajs/vue3";
const props = defineProps({
    medicineCategories: {type: Object ,required: true},
    medicineGenerics: {type: Object ,required: true},
    medicineTypes: {type: Object ,required: true},
    medicine: { type: Object, required: true },
});
const form = useForm({
    medicine_category_id: props.medicine?.medicine_category_id,
    medicine_generic_id: props.medicine?.medicine_generic_id,
    medicine_type_id: props.medicine?.medicine_type_id,
    medicine_name: props.medicine?.medicine_name,
    strength: props.medicine?.strength,
    is_controlled: props.medicine?.is_controlled,
    is_multiply: props.medicine?.is_multiply,
    is_over_counter: props.medicine?.is_over_counter,
    is_frequently_used: props.medicine?.is_frequently_used,
    status: props.medicine?.status,
});
</script>

<template>
    <Head title="Update Medicine Category" />
    <Toolbar
        title="Update Medicine Category"
        :buttons="[{ label: 'Back', link: route('medicines.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Medicine Categories',
                link: route('medicines.index'),
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
                                'medicines.update',
                                medicine?.id
                            )
                        )
                    "
                >
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Medicine Category</label
                                >
                                <v-select
                                    v-model="form.medicine_category_id"
                                    :options="medicineCategories"
                                    label="category_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom"
                                    placeholder="Please Select"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.medicine_category_id"
                                />
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Medicine Generic</label
                                >
                                <v-select
                                    v-model="form.medicine_generic_id"
                                    :options="medicineGenerics"
                                    label="generic_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom"
                                    placeholder="Please Select"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.medicine_generic_id"
                                />
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label"
                                >Medicine Type</label
                                >
                                <v-select
                                    v-model="form.medicine_type_id"
                                    :options="medicineTypes"
                                    label="type_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom"
                                    placeholder="Please Select"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.medicine_type_id"
                                />
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Medicine Name</label
                                >
                                <input
                                    v-model="form.medicine_name"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Medicine Name"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.medicine_name"
                                />
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label"
                                >Strength</label
                                >
                                <input
                                    v-model="form.strength"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Strength"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.strength"
                                />
                            </div>

                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Controlled</label
                                >
                                <div class="d-flex">
                                    <div
                                        v-for="controlled in [
                                            { id: 1, name: 'Yes' },
                                            { id: 0, name: 'No' },
                                        ]"
                                        :key="controlled.id"
                                        class="form-check form-check-custom form-check-sm me-10"
                                    >
                                        <input
                                            v-model="form.is_controlled"
                                            :value="controlled.id"
                                            class="form-check-input"
                                            name="is_controlled"
                                            type="radio"
                                            :id="`controlled_${controlled.id}`"
                                        />
                                        <label
                                            class="form-check-label"
                                            :for="`controlled_${controlled.id}`"
                                        >{{ controlled.name }}</label
                                        >
                                    </div>
                                </div>
                                <ServerErrorMessage
                                    :error="form.errors.is_controlled"
                                />
                            </div>

                        </div>
                        <div class="row mb-10">
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
                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Over Counter</label
                                >
                                <div class="d-flex">
                                    <div
                                        v-for="over_counter in [
                                            { id: 1, name: 'Yes' },
                                            { id: 0, name: 'No' },
                                        ]"
                                        :key="over_counter.id"
                                        class="form-check form-check-custom form-check-sm me-10"
                                    >
                                        <input
                                            v-model="form.is_over_counter"
                                            :value="over_counter.id"
                                            class="form-check-input"
                                            name="is_over_counter"
                                            type="radio"
                                            :id="`over_counter_${over_counter.id}`"
                                        />
                                        <label
                                            class="form-check-label"
                                            :for="`over_counter_${over_counter.id}`"
                                        >{{ over_counter.name }}</label
                                        >
                                    </div>
                                </div>
                                <ServerErrorMessage
                                    :error="form.errors.is_over_counter"
                                />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="required form-label"
                                >Frequently Used</label
                                >
                                <div class="d-flex">
                                    <div
                                        v-for="frequently_used in [
                                            { id: 1, name: 'Yes' },
                                            { id: 0, name: 'No' },
                                        ]"
                                        :key="frequently_used.id"
                                        class="form-check form-check-custom form-check-sm me-10"
                                    >
                                        <input
                                            v-model="form.is_frequently_used"
                                            :value="frequently_used.id"
                                            class="form-check-input"
                                            name="is_frequently_used"
                                            type="radio"
                                            :id="`frequently_used_${frequently_used.id}`"
                                        />
                                        <label
                                            class="form-check-label"
                                            :for="`frequently_used_${frequently_used.id}`"
                                        >{{ frequently_used.name }}</label
                                        >
                                    </div>
                                </div>
                                <ServerErrorMessage
                                    :error="form.errors.is_frequently_used"
                                />
                            </div>
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
                            :href="route('medicines.index')"
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

