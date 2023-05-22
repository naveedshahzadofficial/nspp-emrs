<template>
    <Head title="Sign In"/>
    <!--begin::Wrapper-->
    <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <Form
            class="form w-100"
            id="kt_login_signin_form"
            @submit="onSubmitLogin"
            :validation-schema="login"
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
                <Field
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autocomplete="off"
                />
                <!--end::Input-->
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack mb-2">
                    <!--begin::Label-->
                    <label class="form-label fw-bolder text-dark fs-6 mb-0"
                    >Password</label
                    >
                    <!--end::Label-->

                    <!--begin::Link-->
                    <router-link to="/password-reset" class="link-primary fs-6 fw-bolder">
                        Forgot Password ?
                    </router-link>
                    <!--end::Link-->
                </div>
                <!--end::Wrapper-->

                <!--begin::Input-->
                <Field
                    class="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autocomplete="off"
                />
                <!--end::Input-->
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="password" />
                    </div>
                </div>
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
        </Form>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>

<style lang="scss">

</style>

<script lang="ts">
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";

export default defineComponent({
    name: "sign-in",
    layout : AuthLayout,
    components: {
        Field,
        Form,
        ErrorMessage,
    },
    setup() {
        const store = useStore();
        //const router = useRouter();

        const submitButton = ref<HTMLButtonElement | null>(null);

        //Create form validation object
        const login = Yup.object().shape({
            email: Yup.string().email().required().label("Email"),
            password: Yup.string().min(4).required().label("Password"),
        });

        //Form submit function
        const onSubmitLogin = async (values) => {
            // Clear existing errors
            store.dispatch(Actions.LOGOUT);

            if (submitButton.value) {
                // eslint-disable-next-line
                submitButton.value!.disabled = true;
                // Activate indicator
                submitButton.value.setAttribute("data-kt-indicator", "on");
            }

            // Send login request
            await store.dispatch(Actions.LOGIN, values);
            const [errorName] = Object.keys(store.getters.getErrors);
            const error = store.getters.getErrors[errorName];

            if (!error) {
                Swal.fire({
                    text: "You have successfully logged in!",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {
                        confirmButton: "btn fw-bold btn-light-primary",
                    },
                }).then(function () {
                    // Go to page after successfully login
                    //router.push({ name: "dashboard" });
                });
            } else {
                Swal.fire({
                    text: error[0],
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Try again!",
                    customClass: {
                        confirmButton: "btn fw-bold btn-light-danger",
                    },
                });
            }

            //Deactivate indicator
            submitButton.value?.removeAttribute("data-kt-indicator");
            // eslint-disable-next-line
            submitButton.value!.disabled = false;
        };

        return {
            onSubmitLogin,
            login,
            submitButton,
        };
    },
});
</script>


