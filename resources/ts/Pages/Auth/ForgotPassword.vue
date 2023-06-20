<script setup lang="ts">
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {useForm} from "@inertiajs/vue3";
import AlertMessage from "@/Components/alerts/AlertMessage.vue";

let form = useForm({
    email: ''
});

</script>

<script lang="ts">
import AuthLayout from '@/Layouts/AuthLayout.vue';
export default {
    layout : AuthLayout,
}
</script>

<template>
    <Head title="Forgot Password"/>
    <!--begin::Wrapper-->
    <div class="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto">
        <AlertMessage v-if="$page.props.flash.title" :title="$page.props.flash.title" :message="$page.props.flash.message"/>

        <!--begin::Form-->
        <form
            class="form w-100"
            id="kt_login_signin_form"
            @submit.prevent="form.post(route('password.email'), { preserveScroll: true, onSuccess: (): any => form.reset('email'), })"
        >
            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-white required">Email</label>
                <!--end::Label-->

                <!--begin::Input-->
                <input
                    v-model="form.email"
                    class="form-control form-control-sm"
                    type="email"
                    name="email"
                    autocomplete="off"
                />
                <ServerErrorMessage :error="form.errors.email"/>
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
                    <span class="indicator-label"> Send Password Reset Link </span>

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
