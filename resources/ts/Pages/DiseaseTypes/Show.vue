<template>
    <Head title="View Disease Type"/>
    <Toolbar
        title="View Disease Type"
        :buttons="[{label: 'Back', link: route('disease-types.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Disease Types', link: route('disease-types.index')},
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
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Disease Type</label>
                                <span class="form-control form-control-solid">{{ diseaseType.type_name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ diseaseType.status?'Active':'Inactive' }}</span>
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
    diseaseType: { type: Object, required: true}
});
</script>
