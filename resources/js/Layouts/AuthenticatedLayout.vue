<script setup>
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <div>
        <slot name="header" />
    </div>
    <main>
        <slot />
    </main>
</template>

<style scoped>

</style>
