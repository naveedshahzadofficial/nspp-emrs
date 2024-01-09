<template>
    <Head title="View Test Category" />
    <Toolbar
        title="View Test Category"
        :buttons="[{ label: 'Back', link: route('test-categories.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Test Categories',
                link: route('test-categories.index'),
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
                                >Category Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                testCategory.category_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Short Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                    testCategory.short_name
                                }}</span>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                testCategory.status ? "Active" : "Inactive"
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
    testCategory: { type: Object, required: true },
});
</script>
