<template>

    <KTLoader v-if="loaderEnabled" :logo="loaderLogo" />

    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid" id="kt_layout">
        <!-- begin:: Aside Left -->
        <KTAside
            v-if="asideEnabled"
            :lightLogo="themeLightLogo"
            :darkLogo="themeDarkLogo"
        />
        <!-- end:: Aside Left -->

        <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
            <KTHeader :title="pageTitle" />

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
    <KTScrollTop />
    <KTDrawerMessenger />
    <KTUserMenu />
    <KTCreateApp />
    <KTInviteFriendsModal />

</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch, nextTick } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HtmlClass from "@/core/services/LayoutService";
import { Mutations } from "@/store/enums/StoreEnums";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import { removeModalBackdrop } from "@/core/helpers/dom";
import { MenuComponent } from "@/assets/ts/components";

import KTAside from "@/Layouts/aside/Aside.vue";
import KTHeader from "@/Layouts/header/Header.vue";
import KTFooter from "@/Layouts/footer/Footer.vue";
import KTScrollTop from "@/Layouts/extras/ScrollTop.vue";
import KTUserMenu from "@/Layouts/header/partials/ActivityDrawer.vue";
import KTLoader from "@/Components/Loader.vue";
import KTCreateApp from "@/Components/modals/wizards/CreateAppModal.vue";
import KTInviteFriendsModal from "@/Components/modals/general/InviteFriendsModal.vue";
import KTDrawerMessenger from "@/Layouts/extras/MessengerDrawer.vue";


import {
    toolbarDisplay,
    loaderEnabled,
    contentWidthFluid,
    loaderLogo,
    asideEnabled,
    subheaderDisplay,
    themeLightLogo,
    themeDarkLogo,
} from "@/core/helpers/config";
export default defineComponent({
    name: "DefaultLayout",
    components: {
        KTAside,
        KTHeader,
        KTFooter,
        KTScrollTop,
        KTCreateApp,
        KTInviteFriendsModal,
        KTUserMenu,
        KTDrawerMessenger,
        KTLoader,
    },
    setup() {
        const store = useStore();

        // show page loading
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

        // initialize html element classes
        HtmlClass.init();

        const pageTitle = computed(() => {
            return store.getters?.pageTitle;
        });

        const breadcrumbs = computed(() => {
            return store.getters?.pageBreadcrumbPath;
        });

        onMounted(() => {
            store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);

            nextTick(() => {
                reinitializeComponents();
            });

            // Simulate the delay page loading
            setTimeout(() => {
                // Remove page loader after some time
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
            }, 500);
        });

        watch(
            () => '/admin',
            () => {
                MenuComponent.hideDropdowns(undefined);

                // check if current user is authenticated
                // if (!store.getters.isUserAuthenticated) {
                //     router.push({ name: "sign-in" });
                // }

                nextTick(() => {
                    reinitializeComponents();
                });
                removeModalBackdrop();
            }
        );

        return {
            toolbarDisplay,
            loaderEnabled,
            contentWidthFluid,
            loaderLogo,
            asideEnabled,
            subheaderDisplay,
            pageTitle,
            breadcrumbs,
            themeLightLogo,
            themeDarkLogo,
        };

    }

});

</script>

<style lang="scss">
</style>
