<script setup lang="ts">
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {useForm} from "@inertiajs/vue3";
import AlertMessage from "@/Components/alerts/AlertMessage.vue";
const props = defineProps({
    email: { type: String, required: true},
    token: { type: String, required: true},
});
let form = useForm({
    email: props?.email,
    token: props?.token,
    password: '',
    password_confirmation: '',
});

</script>

<script lang="ts">
import AuthLayout from '@/Layouts/AuthLayout.vue';
export default {
    layout : AuthLayout,
}
</script>

<template>
    <Head title="Password Update"/>
    <!--begin::Wrapper-->
    <div class="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto">
        <AlertMessage v-if="$page.props.flash.title" :title="$page.props.flash.title" :message="$page.props.flash.message"/>
        <AlertMessage v-if="form.errors.email" title="Error" :message="form.errors.email"/>

        <!--begin::Form-->
        <form
            class="form w-100"
            id="kt_login_signin_form"
            @submit.prevent="form.post(route('password.update'),{ preserveScroll: true })"
        >
            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-white required">Password</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                    v-model="form.password"
                    class="form-control form-control-sm"
                    type="password"
                    name="password"
                    autocomplete="off"
                />
                <ServerErrorMessage :error="form.errors.password"/>
                <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-white required">Confirm Password</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                    v-model="form.password_confirmation"
                    class="form-control form-control-sm"
                    type="password"
                    name="password_confirmation"
                    autocomplete="off"
                />
                <ServerErrorMessage :error="form.errors.password_confirmation"/>
                <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
                <!--begin::Submit button-->
                <button
                    type="submit"
                    ref="submitButton"
                    id="kt_sign_in_submit"
                    class="btn auth-btn w-100 mb-5"
                    :disabled="form.processing"
                    :data-kt-indicator="form.processing?'on':'off'"


                >
                    <span class="indicator-label"> Reset Password </span>

                    <span class="indicator-progress">
            Please wait...
            <span
                class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
                </button>
                <!--end::Submit button-->

            </div>
            <!--end::Actions-->

            <!--begin::Wrapper-->
            <div class="d-flex flex-stack justify-content-end mt-5">
                <!--begin::Link-->
                <Link :href="route('login')" class="fs-6 fw-bolder auth-link">
                    Back to Login
                </Link>
                <!--end::Link-->
            </div>
            <!--end::Wrapper-->

        </form>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>
