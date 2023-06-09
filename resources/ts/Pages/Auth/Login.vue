<template>
    <Head title="Sign In"/>
    <!--begin::Wrapper-->
    <div class="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <form
            class="form w-100"
            id="kt_login_signin_form"
            @submit.prevent="form.post(route('login.submit'))"
        >
            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-white required">Username</label>
                <!--end::Label-->

                <!--begin::Input-->
                <input
                    v-model="form.username"
                    class="form-control form-control-sm"
                    type="text"
                    name="username"
                    autocomplete="off"
                />
                <ServerErrorMessage :error="form.errors.username"/>
                <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-5">

                <!--begin::Label-->
                <label class="form-label fw-bolder text-white required fs-6 mb-0"
                >Password</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <input
                    v-model="form.password"
                    class="form-control form-control-sm"
                    type="password"
                    name="password"
                    autocomplete="off"
                />
                <!--end::Input-->
                <ServerErrorMessage :error="form.errors.password"/>

                <!--begin::Wrapper-->
                <div class="d-flex flex-stack justify-content-end mt-4">
                    <!--begin::Link-->
                    <Link :href="route('password.forgot')" class="fs-6 fw-bolder auth-link">
                        Forgot Password ?
                    </Link>
                    <!--end::Link-->
                </div>
                <!--end::Wrapper-->

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
                    <span class="indicator-label"> Login </span>

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
        </form>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>

<style lang="scss">

</style>

<script lang="ts">
import AuthLayout from '@/Layouts/AuthLayout.vue';
export default {
    layout : AuthLayout,
}
</script>

<script lang="ts" setup >
import { ref } from "vue";

import { useForm } from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
const submitButton = ref<HTMLButtonElement | null>(null);

let form = useForm({
    username: '',
    password: ''
});
</script>


