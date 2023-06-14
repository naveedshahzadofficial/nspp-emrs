<template>
    <Head title="View Institute"/>
    <Toolbar
        title="View Institute"
        :buttons="[{label: 'Back', link: route('institutes.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Institutes', link: route('institutes.index')},
            {label: 'View', link: null}
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
                                <label class="form-label fw-semibold">Institute Name</label>
                                <span class="form-control form-control-solid">{{ institute.name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Institute Short Name</label>
                                <span class="form-control form-control-solid">{{ institute.short_name }}</span>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Institute Order</label>
                                <span class="form-control form-control-solid">{{ institute.order }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ institute.status?'Active':'Inactive' }}</span>
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
    institute: { type: Object, required: true}
});
</script>
