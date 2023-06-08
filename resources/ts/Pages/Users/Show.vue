<template>
    <Head title="View User"/>
    <Toolbar
        title="View User"
        :buttons="[{label: 'Back', link: route('users.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Users', link: route('users.index')},
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
                                <label class="form-label fw-semibold">Name</label>
                                <span class="form-control form-control-solid">{{ user.name }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Username</label>
                                <span class="form-control form-control-solid">{{ user.username }}</span>
                            </div>
                        </div>

                        <div class="row mt-10">
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Email</label>
                                <span class="form-control form-control-solid">{{ user.email }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label fw-semibold">Status</label>
                                <span class="form-control form-control-solid">{{ user.status?'Active':'Inactive' }}</span>
                            </div>
                        </div>

                        <div class="row mt-10">
                            <div class="col-lg-12">
                                <label class="form-label fw-semibold">User Roles</label>
                                <span class="form-control form-control-solid" v-if="user.roles.length > 0">{{ user.roles?.map(obj => obj.name).join(', ') }}</span>
                                <span class="form-control form-control-solid" v-if="user.roles.length === 0">The {{ user.name }} have not any role</span>
                            </div>
                        </div>

                        <div class="row mt-10">
                            <div class="col-lg-12">
                                <label class="form-label fw-semibold">User Permissions</label>
                                <span class="form-control form-control-solid" v-if="user.permissions.length > 0">{{ user.permissions?.map(obj => obj.name).join(', ') }}</span>
                                <span class="form-control form-control-solid" v-if="user.permissions.length === 0">The {{ user.name }} have not any permission</span>
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
    user: { type: Object, required: true},
    roles: Array,
    permissions: Array
});
</script>
