<script lang="ts" setup>
defineProps({
    medicineGeneric: { type: Object, required: true },
});
</script>
<template>
    <Head title="View Medicine Generic" />
    <Toolbar
        title="View Medicine Generic"
        :buttons="[{ label: 'Back', link: route('medicine-generics.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            {
                label: 'Medicine Generics',
                link: route('medicine-generics.index'),
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
                                >Generic Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                medicineGeneric.generic_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                medicineGeneric.status ? "Active" : "Inactive"
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

