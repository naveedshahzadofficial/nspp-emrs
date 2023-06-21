<script lang="ts" setup>
import {useForm} from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import AlertMessage from "@/Components/alerts/AlertMessage.vue";

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});
</script>

<template>
    <Head title="Change Password"/>
    <Toolbar
        title="Change Password"
        :breadcrumbs="[
            {label: 'Profile Settings', link: '#'},
            {label: 'Change Password', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <AlertMessage v-if="$page.props.flash.title" :title="$page.props.flash.title" :message="$page.props.flash.message"/>
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.put(route('user-password.update'), { preserveScroll: true, onSuccess: (): any => form.reset(), })">
                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-lg-3"></div>
                            <div class="col-sm-12 col-lg-7">
                                <div class="row mb-10">
                                    <div class="col-sm-12 col-lg-9">
                                        <label class="required form-label">Current Password</label>
                                        <input v-model="form.current_password"  type="password" class="form-control form-control-sm" placeholder="Current Password"/>
                                        <ServerErrorMessage :error="form.errors.current_password"/>
                                    </div>
                                </div>
                                <div class="row mb-10">
                                    <div class="col-sm-12 col-lg-9">
                                        <label class="required form-label">New Password</label>
                                        <input v-model="form.password"  type="password" class="form-control form-control-sm" placeholder="New Password"/>
                                        <ServerErrorMessage :error="form.errors.password"/>
                                    </div>
                                </div>
                                <div class="row mb-10">
                                    <div class="col-sm-12 col-lg-9">
                                        <label class="required form-label">Confirm Password</label>
                                        <input v-model="form.password_confirmation"  type="password" class="form-control form-control-sm" placeholder="Confirm Password"/>
                                        <ServerErrorMessage :error="form.errors.password_confirmation"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Card body-->
                    <div class="card-footer">
                        <div class="row">
                        <div class="col-sm-12 col-lg-3 "></div>
                            <div class="col-sm-12 col-lg-9">
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
                            </div>
                        </div>
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->

</template>
