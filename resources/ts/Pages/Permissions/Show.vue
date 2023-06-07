<template>
    <Head title="View Permission"/>
    <Toolbar
        title="View Permission"
        :buttons="[{label: 'Back', link: route('permissions.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Permissions', link: route('permissions.index')},
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
                                <label class="form-label fw-semibold">Permission Name</label>
                                <span class="form-control form-control-solid">{{ permission?.name }}</span>
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
    permission: { type: Object, required: true}
});
</script>
