<template>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n/index";
import KTMenu from "@/layout/aside/Menu.vue";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
    name: "KTAside",
    components: {
        KTMenu,
    },
    props: {
        lightLogo: String,
        darkLogo: String,
    },
    setup() {
        const { t } = useI18n();

        return {
            asideTheme,
            t,
        };
    },
});
</script>
