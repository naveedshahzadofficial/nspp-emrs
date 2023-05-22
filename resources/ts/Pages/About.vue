<template>
            <Head title="About Us" />
                <div>
                    <h1>inertiajs is {{ about_us }}</h1>

                    <Link href="/">Go to Home</Link>
                </div>
</template>

<script lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
export default {
    layout : GuestLayout,
}
</script>

<script lang="ts" setup>
defineProps({
    about_us: {
        type: String,
    },
});

</script>
