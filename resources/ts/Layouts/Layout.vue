<template>
    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid" id="kt_layout">
        <!-- begin:: Aside Left -->
        <KTAside
            v-if="asideEnabled"
            :lightLogo="themeLightLogo"
            :darkLogo="themeDarkLogo"
        />
        <!-- end:: Aside Left -->

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
    <!-- end:: Body -->
    <div>
        <slot name="header" />
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import KTAside from "@/Layouts/aside/Aside.vue";
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

const store = useStore();

</script>

<style scoped></style>
