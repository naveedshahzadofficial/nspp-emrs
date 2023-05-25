<template>
    <div v-if="error" class="fv-plugins-message-container">
        <div class="fv-help-block">
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        error: String
    });
</script>


<style scoped lang="scss">

</style>
