<script lang="ts" setup>

defineProps<{
    test?: string;
}>();

</script>

<template>
    <Head title="Home" />
    <div>
        <h1>Inertiajs is {{ test }}</h1>

        <Link :href="route('about-us')">Go to about us</Link>
    </div>
</template>
