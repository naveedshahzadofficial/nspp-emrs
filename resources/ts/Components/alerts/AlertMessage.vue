<template>
    <div
        class="
      alert alert-dismissible
      bg-success
      d-flex
      flex-column flex-sm-row
      w-100
      p-5
      mb-10
    "
    >
    <span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0">
      <inline-svg src="media/icons/duotune/general/gen007.svg" />
    </span>
        <!--begin::Content-->
        <div class="d-flex flex-column text-light pe-0 pe-sm-10">
            <h4 class="mb-2 text-light" v-text="title"></h4>
            <span v-text="message"></span
            >
        </div>
        <!--end::Content-->
        <!--begin::Close-->
        <button
            type="button"
            class="
        position-absolute position-sm-relative
        m-2 m-sm-0
        top-0
        end-0
        btn btn-icon
        ms-sm-auto
      "
            data-bs-dismiss="alert"
        >
      <span class="svg-icon svg-icon-2x svg-icon-light">
        <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
      </span>
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
