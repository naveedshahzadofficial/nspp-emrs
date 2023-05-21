<template>
    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid" id="kt_layout">

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

<script setup>

</script>

<style scoped>

</style>
