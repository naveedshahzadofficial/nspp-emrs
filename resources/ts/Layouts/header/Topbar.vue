<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">


    <!--begin::User-->
    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <!--begin::Menu-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
          <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
          <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-3">&nbsp;{{ $page.props.auth?.user?.name }}&nbsp;</span>
          <span v-if="!$page.props.auth?.user?.profile_file" class="symbol symbol-35 bg-light-success" >
              <span class="symbol-label font-size-h5 font-weight-bold" v-if="$page.props.auth?.user?.name">{{ $page.props.auth?.user?.name.charAt(0) }}</span>
          </span>
          <img v-if="$page.props.auth?.user?.profile_file" src="/media/avatars/blank.png" :alt="$page.props.auth?.user?.name" />
      </div>
      <KTUserMenu></KTUserMenu>
      <!--end::Menu-->
    </div>
    <!--end::User -->

    <!--begin::Heaeder menu toggle-->
    <div
      class="d-flex align-items-center d-lg-none ms-2 me-n3 d-none"
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
        id="kt_header_menu_mobile_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/text/txt001.svg" />
        </span>
      </div>
    </div>
    <!--end::Heaeder menu toggle-->


  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTSearch from "@/Layouts/header/partials/Search.vue";
import KTNotificationsMenu from "@/Layouts/header/partials/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/Layouts/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/Layouts/header/partials/UserMenu.vue";

export default defineComponent({
  name: "header-topbar",
  components: {
    KTSearch,
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
  },
});
</script>
