<template>
    <Head title="View Disease"/>
    <Toolbar
        title="View Disease"
        :buttons="[{label: 'Back', link: route('diseases.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Diseases', link: route('diseases.index')},
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
                                <label class="form-label fw-semibold">Disease Type</label>
                                <span class="form-control form-control-solid">{{ disease?.disease_type?.type_name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Disease Name</label>
                                <span class="form-control form-control-solid">{{ disease.disease_name }}</span>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ disease.status?'Active':'Inactive' }}</span>
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-12">
                                <label class="form-label fw-semibold">Description</label>
                                <span class="form-control form-control-solid">{{ disease.disease_description }}</span>
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
    disease: { type: Object, required: true}
});
</script>
