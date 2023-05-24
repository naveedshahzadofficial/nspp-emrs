<template>
    <Head title="Roles"/>
    <div class="card">
        <!--begin::Card header-->

        <div class="card-header border-0 pt-6">
            <!--begin::Card title-->
            <div class="card-title">
                <!--begin::Search-->
                <div class="d-flex align-items-center position-relative my-1">
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
            <!--begin::Card title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">

                <!--begin::Add button-->
                <button
                    type="button"
                    class="btn btn-primary"
                >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
                    Add Role
                </button>
                <!--end::Add button-->

            </div>
            <!--end::Card toolbar-->

        </div>
       <!--end::Card header-->

    <div class="card-body pt-0">
        <Datatable
            :table-data="tableData"
            :table-header="tableHeader"
            :enable-items-per-page-dropdown="true"
        >
        <template v-slot:cell-name="{ row: role }">
            {{ role.name }}
        </template>
        <template v-slot:cell-created_at="{ row: role }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
                {{ role.created_at }}
            </a>
        </template>

        </Datatable>
    </div>
    </div>


</template>

<script lang="ts" setup>
import Datatable from "@/Components/kt-datatable/KTDatatable.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import {onMounted, ref} from "vue";
const props = defineProps({
    roles: { type: Object, required: true },
});

const tableHeader = ref([
    {
        name: "Role Name",
        key: "name",
        sortable: true,
    },
    {
        name: "Created Date",
        key: "created_at",
        sortable: true,
    },
    {
        name: "Actions",
        key: "actions",
    },
]);
const tableData = ref(props.roles??[]);

onMounted(() => {
   //setCurrentPageTitle("Roles");
    setCurrentPageBreadcrumbs("Roles", ["System Settings"]);
})

</script>

<style scoped>

</style>
