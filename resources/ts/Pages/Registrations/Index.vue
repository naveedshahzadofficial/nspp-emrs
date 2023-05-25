<template>
    <Head title="Registrations"/>

    <AlertMessage v-if="$page.props.flash.title" :title="$page.props.flash.title" :message="$page.props.flash.message"/>


    <div class="card">
        <!--begin::Card header-->
        <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
                <!--begin::Page title-->
                <div
                    id="kt_page_title"
                    data-kt-swapper="true"
                    data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                    class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
                >
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
                        Registrations
                    </h1>
                    <!--end::Title-->

                </div>
                <!--end::Page title-->
            </div>
            <!--begin::Card title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">

                <!--begin::Add button-->
                <Link
                    :href="route('registrations.create')"
                    as="button"
                    type="button"
                    class="btn btn-primary"
                >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
                    Add Registration
                </Link>
                <!--end::Add button-->

            </div>
            <!--end::Card toolbar-->

        </div>
        <!--end::Card header-->

        <div class="card-body pt-0 position-relative">

            <!--begin::Search-->
            <div class="d-flex align-items-center position-relative my-2">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
               <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
                <input
                    type="text"
                    class="form-control form-control-solid w-250px ps-15"
                    placeholder="Search"
                />
            </div>
            <!--end::Search-->

        </div>
    </div>

</template>

<script lang="ts" setup>
import AlertMessage from "@/Components/alerts/AlertMessage.vue";

</script>

<style scoped>

</style>
