<template>
    <!--begin::Toolbar-->
    <div class="toolbar" id="kt_toolbar" style="background-color: #bed8cb;">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
            <!--begin::Page title-->
            <div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                <!--begin::Title-->
                <h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">{{ title }}</h1>
                <!--end::Title-->
                <!--begin::Separator-->
                <span v-if="breadcrumbs.length > 1" class="h-20px border-gray-200 border-start mx-4"></span>
                <!--end::Separator-->
                <!--begin::Breadcrumb-->
                <ul v-if="breadcrumbs.length > 1" class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                    <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                        <li v-if="breadcrumb.link" class="breadcrumb-item"
                            :class="[isLastBreadcrumb(index)?'text-dark':'text-muted']">
                            <Link :href="breadcrumb.link"
                                  class="text-muted text-hover-primary"
                                  v-html="breadcrumb.label"/>

                        </li>
                        <li v-else
                            class="breadcrumb-item"
                            :class="[isLastBreadcrumb(index)?'text-dark':'text-muted']"
                        >{{ breadcrumb.label }}</li>

                        <li v-if="!isLastBreadcrumb(index)" class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                    </template>
                </ul>
                <!--end::Breadcrumb-->
            </div>
            <!--end::Page title-->
            <!--begin::Actions-->
            <div class="d-flex align-items-center py-1">
                <!--begin::Button-->
                <template v-for="(button, index) in buttons" :key="index">
                    <Link v-if="button.link && checkPermission(button?.permission)"
                          :href="button.link"
                          class="btn btn-sm ms-2"
                          :class="[button.class?button.class:'btn-primary']"
                          v-html="button.label"/>
                    <Link v-if="!button.link && checkPermission(button?.permission)"
                          @click.prevent="button.click"
                          as="button"
                          type="button"
                          class="btn btn-sm btn-primary ms-2"
                          :class="[button.class?button.class:'btn-primary']"
                          v-html="button.label"/>
                </template>
                <!--end::Button-->
            </div>
            <!--end::Actions-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Toolbar-->
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {usePermission} from "@/core/composables/permission";
const { hasPermission } = usePermission();


interface Breadcrumb {
    link: string;
    label: string;
}

interface Button {
    link: string | null;
    label: string;
    class?: string;
    click: () => void;
}

const props = defineProps({
    title: { type: String, required: true },
    breadcrumbs: {
        type: Array as () => any,
        required: true,
    },
    buttons: {
        type: Array as () => any,
        required: false,
    },
});

const isLastBreadcrumb = computed(() => (index) => index === props.breadcrumbs?.length - 1);

const checkPermission = computed(() => (permission) => {
    if(!permission) return true;
    return hasPermission(permission);
});
</script>
