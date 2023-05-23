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
        <table class="table table-row-dashed table-row-gray-300">
            <thead>
            <tr class="fw-bolder fs-5 text-gray-800">
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>


</template>

<script lang="ts" setup>
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import {onMounted} from "vue";
onMounted(() => {
   //setCurrentPageTitle("Roles");
    setCurrentPageBreadcrumbs("Roles", ["System Settings"]);
})
</script>

<style scoped>

</style>
