<template>
    <div class="d-flex flex-column flex-column-fluid auth-bg"
         :style="{ backgroundImage: 'url(/media/patterns/bg-nspp.jpg)' }">
        <!--begin::Content-->
        <div class="d-flex flex-center
        flex-column flex-column-fluid position-relative overflow-hidden p-15 pb-lg-20 w-100"

        >

            <!--begin::Logo-->
            <div class="d-flex gap-3">
                <div>
                    <Link :href="route('login')" class="mb-12">
                        <img alt="Logo" src="/media/logos/nspp-logo.png" class="h-100px w-100px"/>
                    </Link>
                </div>
                <div class="d-flex flex-column">
                <span class="auth-logo-title">MESS MANAGEMENT SYSTEM</span>
                <span class="auth-logo-subtitle">National School of Public Policy</span>
                <span class="auth-logo-caption">Government of Pakistan</span>
                </div>

            </div>
            <!--end::Logo-->

            <slot />

        </div>
        <!--end::Content-->

        <!--begin::Footer-->
        <div class="d-flex flex-center flex-column-auto pb-4 auth-footer">
            <!--begin::Links-->
            <div class="d-flex align-items-center fw-bold fs-6">
                <span class="px-2">Powered by : <a href="https://pitb.gov.pk" target="_blank">Punjab Information Technology Board</a></span>
            </div>
            <!--end::Links-->
        </div>
        <!--end::Footer-->

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
    name: "AuthLayout",
    components: {},
    setup() {
        const store = useStore();

        onMounted(() => {
            store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
        });

        onUnmounted(() => {
            store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
        });

        return {};
    },
});
</script>

<style lang="scss">
</style>
