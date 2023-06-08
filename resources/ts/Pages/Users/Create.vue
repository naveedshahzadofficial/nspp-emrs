<template>
    <Head title="Add User"/>
    <Toolbar
        title="Add User"
        :buttons="[{label: 'Back', link: route('users.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Users', link: route('users.index')},
            {label: 'Add', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.post(route('users.store'))">
                <!--begin::Card body-->
                <div class="card-body">
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="required form-label">Name</label>
                            <input v-model="form.name"  type="text" class="form-control form-control-sm" placeholder="Full Name"/>
                            <ServerErrorMessage :error="form.errors.name"/>
                        </div>

                        <div class="col-lg-6">
                            <label class="required form-label">Username</label>
                            <input v-model="form.username"  type="text" class="form-control form-control-sm" placeholder="Username"/>
                            <ServerErrorMessage :error="form.errors.username"/>
                        </div>
                    </div>
                     <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Email</label>
                                <input v-model="form.email"  type="email" class="form-control form-control-sm" placeholder="Email"/>
                                <ServerErrorMessage :error="form.errors.email"/>
                            </div>
                            <div class="col-lg-6">
                                <label class="required form-label">Status</label>
                                <div class="d-flex">
                                    <div v-for="status in [{id: 1, name:'Active'}, {id: 0, name:'Inactive'}]" :key="status.id" class="form-check form-check-custom form-check-sm me-10">
                                        <input v-model="form.status" :value="status.id" class="form-check-input" name="status" type="radio" :id="`status_${status.id}`">
                                        <label class="form-check-label" :for="`status_${status.id}`">{{ status.name }}</label>
                                    </div>
                                </div>
                                <ServerErrorMessage :error="form.errors.status"/>
                            </div>
                        </div>

                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="required form-label">Password</label>
                            <input v-model="form.password"  type="password" class="form-control form-control-sm" placeholder="Password"/>
                            <ServerErrorMessage :error="form.errors.password"/>
                        </div>

                        <div class="col-lg-6">
                            <label class="required form-label">Confirm Password</label>
                            <input v-model="form.password_confirmation"  type="password" class="form-control form-control-sm" placeholder="Confirm Password"/>
                            <ServerErrorMessage :error="form.errors.password_confirmation"/>
                        </div>
                    </div>

                    <div class="row mb-10">
                        <div class="col-lg-12">
                            <label class="form-label">Roles</label>
                            <v-select
                                v-model="form.roles"
                                :options="roles"
                                multiple
                                label="name"
                                class="v-select-custom"
                                placeholder="Please Select" />
                            <ServerErrorMessage :error="form.errors.roles"/>
                        </div>
                    </div>

                    <div class="row mb-10">
                        <div class="col-lg-12">
                            <label class="form-label">Permissions</label>
                            <v-select
                                v-model="form.permissions"
                                :options="permissions"
                                multiple
                                label="name"
                                class="v-select-custom"
                                placeholder="Please Select" />
                            <ServerErrorMessage :error="form.errors.permissions"/>
                        </div>
                    </div>

                </div>
                <!--end::Card body-->
                <div class="card-footer">
                        <button
                            type="submit"
                            ref="submitButton"
                            class="btn btn-success me-2"
                            :disabled="form.processing"
                            :data-kt-indicator="form.processing?'on':'off'"
                        >
                            <span class="indicator-label"> Submit </span>

                            <span class="indicator-progress">
                                    Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
          </span>
                        </button>
                        <Link :href="route('users.index')" class="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->

</template>

<script lang="ts" setup>
import {useForm} from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";

defineProps({
    roles: Array,
    permissions: Array
})

const form = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    status: '',
    roles: [],
    permissions: []
});
</script>
