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
     <span
         class="svg-icon svg-icon-2hx me-4"
         :class="{
        'svg-icon-success': title==='Success',
        'svg-icon-danger': title==='Error',
        'svg-icon-warning': title==='Warning',
        'svg-icon-info': title==='Info',
         }"
     >
      <inline-svg :src="iconUrl"/>
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
import {onMounted, ref} from "vue";

  const props = defineProps({
      title: { type: String, required: true},
      message: { type: String, required: true},
  });

  const iconUrl = ref('');

  onMounted(() => {
      switch (props.title){
          case 'Success':
              iconUrl.value =  '/media/icons/duotune/general/gen048.svg';
              break;
          case 'Error':
               iconUrl.value =  '/media/icons/duotune/general/gen050.svg';
              break;
          case 'Warning':
               iconUrl.value =  '/media/icons/duotune/general/gen044.svg';
              break;
          case 'Info':
               iconUrl.value =  '/media/icons/duotune/general/gen045.svg';
              break;
      }
  });

</script>
<style scoped lang="scss">

</style>
