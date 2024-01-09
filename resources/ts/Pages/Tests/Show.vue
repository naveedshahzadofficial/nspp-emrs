<template>
    <Head title="View Test" />
    <Toolbar
        title="View Test"
        :buttons="[{ label: 'Back', link: route('tests.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Tests',
                link: route('tests.index'),
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
                                >Test Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                test.test_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Type Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                    test?.test_type?.type_name
                                }}</span>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                test.status ? "Active" : "Inactive"
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
    test: { type: Object, required: true },
});
</script>
