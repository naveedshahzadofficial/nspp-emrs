<script lang="ts" setup>
defineProps({
    medicine: { type: Object, required: true },
});
</script>
<template>
    <Head title="View Medicine" />
    <Toolbar
        title="View Medicine"
        :buttons="[{ label: 'Back', link: route('medicines.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Medicines',
                link: route('medicines.index'),
            },
            { label: 'View', link: null },
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Card body-->
                <div class="card-body">
                    <div class="row mb-4">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Medicine Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                medicine.medicine_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Medicine Category</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.medicine_category?.category_name
                                }}</span>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Medicine Generic</label
                            >
                            <span class="form-control form-control-solid">{{
                                    medicine.medicine_generic?.generic_name
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Medicine Type</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.medicine_type?.type_name || '-'
                                }}</span>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Strength</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.strength || '-'
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Controlled</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.is_controlled? "Yes" : "No"
                                }}</span>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Multiply</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.is_multiply? "Yes" : "No"
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Over Counter</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.is_over_counter? "Yes" : "No"
                                }}</span>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Frequently Used</label
                            >
                            <span class="form-control form-control-solid">{{
                                    medicine.is_frequently_used? "Yes" : "No"
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                    medicine.status ? "Active" : "Inactive"
                                }}</span>
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

