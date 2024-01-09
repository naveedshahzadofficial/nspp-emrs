<template>
    <Head title="View Test Type" />
    <Toolbar
        title="View Test Type"
        :buttons="[{ label: 'Back', link: route('test-types.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Test Types',
                link: route('test-types.index'),
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
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Type Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                testType.type_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Category Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                    testType?.test_category?.category_name
                                }}</span>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                testType.status ? "Active" : "Inactive"
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
    testType: { type: Object, required: true },
});
</script>
