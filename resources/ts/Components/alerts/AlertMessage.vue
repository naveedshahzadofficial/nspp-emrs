<template>
    <div
        :class="{
        'alert-success': title==='Success',
        'alert-danger': title==='Error',
        'alert-warning': title==='Warning',
        'alert-info': title==='Info',
         }"
        class="alert alert-success alert-dismissible d-flex align-items-center p-5"
    >
     <span class="svg-icon svg-icon-2hx svg-icon-success me-4">
      <inline-svg src="/media/icons/duotune/general/gen048.svg" />
    </span>
        <!--begin::Content-->
        <div class="d-flex flex-column">
            <h4 class="mb-2"
                :class="{
        'text-success': title==='Success',
        'text-danger': title==='Error',
        'text-warning': title==='Warning',
        'text-info': title==='Info',
         }"
                v-text="title"></h4>
            <span v-text="message"></span
            >
        </div>
        <!--end::Content-->
        <!--begin::Close-->
        <button
            type="button"
            class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto"
            data-bs-dismiss="alert"
        ><i class="bi bi-x fs-1 text-black"></i>
        </button>
        <!--end::Close-->
    </div>

</template>
<script setup lang="ts">
  defineProps({
      title: { type: String, required: true},
      message: { type: String, required: true},
  });
</script>
<style scoped lang="scss">

</style>
