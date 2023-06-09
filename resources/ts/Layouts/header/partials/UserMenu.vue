<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <img alt="Logo" src="/media/avatars/blank.png" />
        </div>
        <!--end::Avatar-->

        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bolder d-flex align-items-center fs-5">
              {{ $page.props.auth.user.name }}
          </div>
            <span
                class="badge badge-light-info fw-bolder fs-7 py-1"
            >Roles: {{ $page.props.auth.user?.roles.map(role => role).join(', ') }}</span>
          <span class="badge badge-light-info fw-bolder fs-7 py-1"
            >Username: {{ $page.props.auth.user.username }}</span>
            <span class="badge badge-light-info fw-bolder fs-7 py-1"
            >Email: {{ $page.props.auth.user.email }}</span>
        </div>
        <!--end::Username-->
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <Link href="/pages/profile/overview" class="menu-link px-5">
        My Profile
      </Link>
    </div>
    <!--end::Menu item-->



    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <Link href="/pages/profile/overview" class="menu-link px-5">
          Change Password
      </Link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <Link :href="route('logout')" method="post" as="button"  class="menu-link px-5 btn btn-link-primary" style="width: 100% !important;"> Sign Out </Link>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  setup() {
    const i18n = useI18n();
    const store = useStore();

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    const countries = {
      en: {
        flag: "/media/flags/united-states.svg",
        name: "English",
      },
      es: {
        flag: "/media/flags/spain.svg",
        name: "Spanish",
      },
      de: {
        flag: "/media/flags/germany.svg",
        name: "German",
      },
      ja: {
        flag: "/media/flags/japan.svg",
        name: "Japanese",
      },
      fr: {
        flag: "/media/flags/france.svg",
        name: "French",
      },
    };


    const setLang = (lang) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = (lang) => {
      return i18n.locale.value === lang;
    };

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value];
    });

    return {
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
    };
  },
});
</script>
