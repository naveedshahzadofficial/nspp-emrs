<template>
            <Head title="About Us" />
                <div>
                    <h1>inertiajs is {{ about_us }}</h1>

                    <Link href="/">Go to Home</Link>
                </div>
</template>

<script lang="ts">
import BlankLayout from '@/Layouts/BlankLayout.vue';
export default {
    layout : BlankLayout,
}
</script>

<script lang="ts" setup>
defineProps({
    about_us: {
        type: String,
    },
});

</script>
