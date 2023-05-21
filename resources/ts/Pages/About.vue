<template>
        <Head title="About Us" />
            <div>
                <h1>inertiajs is {{ about_us }}</h1>

                <Link href="/">Go to Home</Link>
            </div>
</template>

<script setup>

defineProps({
    about_us: {
        type: String,
    },
});
</script>
