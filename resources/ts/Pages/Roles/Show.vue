<template>
    <Head title="View Role"/>
    <Toolbar
        title="View Role"
        :buttons="[{label: 'Back', link: route('roles.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Roles', link: route('roles.index')},
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
                                <label class="form-label fw-semibold">Role Name</label>
                                <span class="form-control form-control-solid">{{ role.name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ role.status?'Active':'Inactive' }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <label class="form-label fw-semibold">Role Permissions</label>
                                <span class="form-control form-control-solid" v-if="role.permissions.length > 0">{{ role.permissions?.map(obj => obj.name).join(', ') }}</span>
                                <span class="form-control form-control-solid" v-if="role.permissions.length === 0">The {{ role.name }} have not any permission</span>
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
    role: { type: Object, required: true},
    permissions: Array
});
</script>
