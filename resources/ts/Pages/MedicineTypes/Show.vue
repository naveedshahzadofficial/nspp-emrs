<template>
    <Head title="View Medicine Type" />
    <Toolbar
        title="View Medicine Type"
        :buttons="[{ label: 'Back', link: route('medicine-types.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Medicine Types',
                link: route('medicine-types.index'),
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
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Type Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                medicineType.type_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Is Multiply</label>
                            <span class="form-control form-control-solid">{{
                                    medicineType.is_multiply ? "Yes" : "No"
                                }}</span>
                        </div>
                    </div>
                        <div class="row">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                medicineType.status ? "Active" : "Inactive"
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
<script lang="ts" setup>
defineProps({
    medicineType: { type: Object, required: true },
});
</script>
