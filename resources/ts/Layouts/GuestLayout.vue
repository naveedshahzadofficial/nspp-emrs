<template>
    <KTLoader v-if="loaderEnabled" :logo="loaderLogo" />

    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid" id="kt_layout">

        <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid">
            <!-- begin:: Content -->
            <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
                <!-- begin:: Content Body -->
                <div class="post d-flex flex-column-fluid">
                    <div
                        id="kt_content_container"
                        :class="{
              'container-fluid': contentWidthFluid,
              'container-xxl': !contentWidthFluid,
            }"
                    >
                        <slot />
                    </div>
                </div>
                <!-- end:: Content Body -->
            </div>
            <!-- end:: Content -->
            <KTFooter />
        </div>
    </div>
    <!-- end:: Body -->
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HtmlClass from "@/core/services/LayoutService";
import { Mutations } from "@/store/enums/StoreEnums";
import { initializeComponents } from "@/core/plugins/keenthemes";


import KTFooter from "@/Layouts/footer/Footer.vue";


import {
    loaderEnabled,
    contentWidthFluid,
    loaderLogo,
    asideEnabled,
    themeLightLogo,
    themeDarkLogo,
} from "@/core/helpers/config";
export default defineComponent({
    name: "guest-layout",
    components: {
        KTFooter,
    },
    setup() {
        const store = useStore();

        // show page loading
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

        // initialize html element classes
        HtmlClass.init();

        onMounted(() => {
            store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);

            nextTick(() => {
                initializeComponents();
            });

            // Simulate the delay page loading
            setTimeout(() => {
                // Remove page loader after some time
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
            }, 500);
        });

        return {
            loaderEnabled,
            contentWidthFluid,
            loaderLogo,
            asideEnabled,
            themeLightLogo,
            themeDarkLogo,
        };

    }

});

</script>

<style scoped></style>
