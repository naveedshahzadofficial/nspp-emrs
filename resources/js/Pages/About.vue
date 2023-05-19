<template>
    <GuestLayout>
        <Head title="About Us" />
            <div>
                <h1>inertiajs is {{ about_us }}</h1>

                <Link href="/">Go to Home</Link>
            </div>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from '@Layouts/GuestLayout.vue';
import { Link, Head } from "@inertiajs/vue3";

defineProps({
    about_us: {
        type: String,
    },
});
</script>
