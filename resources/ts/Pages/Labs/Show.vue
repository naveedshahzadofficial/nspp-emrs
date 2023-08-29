<script lang="ts" setup>
defineProps({
    lab: { type: Object, required: true },
});
</script>

<template>
    <Head title="View Lab" />
    <Toolbar
        title="View Lab"
        :buttons="[{ label: 'Back', link: route('labs.index') }]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            { label: 'Labs', link: route('labs.index') },
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
                                >Lab Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                lab.lab_name
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Speciality</label
                            >
                            <span class="form-control form-control-solid">{{
                                lab.speciality
                            }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Address</label
                            >
                            <span class="form-control form-control-solid">{{
                                lab.address
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Contact</label
                            >
                            <span class="form-control form-control-solid">{{
                                lab.contact
                            }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                lab.status ? "Active" : "Inactive"
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
