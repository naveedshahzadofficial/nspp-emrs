<template>
    <Head title="Sign In"/>
    <!--begin::Wrapper-->
    <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <form
            class="form w-100"
            id="kt_login_signin_form"
            @submit.prevent="submit"
        >
            <!--begin::Heading-->
            <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">Sign In</h1>
                <!--end::Title-->
            </div>
            <!--begin::Heading-->

            <div class="mb-10 bg-light-info p-8 rounded">
                <div class="text-info">
                    Use account <strong>admin@demo.com</strong> and password
                    <strong>demo</strong> to continue.
                </div>
            </div>

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                <!--end::Label-->

                <!--begin::Input-->
                <input
                    v-model="form.email"
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autocomplete="off"
                />
                <!--end::Input-->
                <div v-if="form.errors.email" class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <span>{{ form.errors.email }}</span>
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">

                <!--begin::Label-->
                <label class="form-label fw-bolder text-dark fs-6 mb-0"
                >Password</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <input
                    v-model="form.password"
                    class="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autocomplete="off"
                />
                <!--end::Input-->
                <div v-if="form.errors.email" class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <span>{{ form.errors.password }}</span>
                    </div>
                </div>

                <!--begin::Wrapper-->
                <div class="d-flex flex-stack  mt-2">
                    <!--begin::Link-->
                    <Link href="password-reset" class="link-primary fs-6 fw-bolder">
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
                    class="btn btn-lg btn-primary w-100 mb-5"
                    :disabled="form.processing"
                    :data-kt-indicator="form.processing?'on':'off'"


                >
                    <span class="indicator-label"> Continue </span>

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
const submitButton = ref<HTMLButtonElement | null>(null);

let form = useForm({
    email: '',
    password: ''
});

let submit = () => {
    form.post(route('login.submit'));
}

</script>


