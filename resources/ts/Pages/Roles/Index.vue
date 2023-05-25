<template>
    <Head title="Roles"/>
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
                        Roles
                    </h1>
                    <!--end::Title-->

                    <!--begin::Breadcrumb-->
                    <ul
                        class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
                    >
                            <li class="breadcrumb-item text-muted">
                                System Settings
                            </li>
                            <li class="breadcrumb-item">
                                <span class="bullet bg-gray-200 w-5px h-2px"></span>
                            </li>
                        <li class="breadcrumb-item pe-3 text-dark">
                            Roles
                        </li>
                    </ul>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
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

        <div class="table-responsive ">

            <DataTable class="table table-striped table-row-bordered gy-5 gs-7" :data="roles" :columns="columns"

            :options="{
                responsive:true,
                lengthChange: false,
                language: {
                infoFiltered: '',
                },
                processing: true,
                pageLength: 30,
                serverSide: false,
                autoWidth:false,
                lengthMenu: [
                [10, 20, 30, 50, 100, -1],
                ['10', '20', '30', '50', '100', 'All']
                ],
                dom:'Blrtip',
                buttons: buttons
                }">
                <thead>
                <tr>
                    <th>Role Name</th>
                    <th>Created Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
            </DataTable>
        </div>
    </div>
    </div>


</template>

<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select';
import DataTablesCore from 'datatables.net-bs5';
import Buttons from 'datatables.net-buttons-bs5';
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import print from 'datatables.net-buttons/js/buttons.print';
import pdfmake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfmake as any).vfs = pdfFonts.pdfMake.vfs;

import 'datatables.net-buttons-bs5';
DataTable.use(Select);
DataTable.use(Buttons);
DataTable.use(print);
DataTable.use(DataTablesCore);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);

import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import {onMounted, ref} from "vue";
const props = defineProps({
    roles: { type: Array, required: true },
});

const columns = [
    { name:'Role Name', data: 'name' },
    { name:'Created Date', data: 'created_at' },
    { name:'Actions', data: 'id', orderable: false, searchable: false, class: 'text-center not-exported', render: function(data,type,row,meta){
           `'<a href="roles/3/edit" class="btn btn-icon btn-outline-success btn-circle btn-sm mr-2" title="Update">
            <i class="flaticon2-edit"></i>
                </a>'<a
            href='roles'
            class='btn btn-icon  btn-outline-danger btn-circle btn-sm mr-2' title='Delete'>
            <i class=' icon-xl fas fa-toggle-off'></i>
                </a>"`;
    } },
];

const buttons= [
        {
            extend: 'print',
            text: '<i class="fa fa-print"></i>',
            titleAttr: 'Print',
            charset: "utf-8",
            bom: "true",
            className: 'btn btn-xs',
            exportOptions: {
                columns: ':visible:not(.not-exported)',
                modifier: {
                    search: 'applied',
                    order: 'applied',
                    page: 'all'
                }
            }
        },
        {
            extend: 'csvHtml5',
            text: '<i class="fa fa-file-csv"></i>',
            titleAttr: 'CSV',
            charset: "utf-8",
            "bom": "true",
            className: 'btn btn-xs',
            exportOptions: {
                columns: ':visible:not(.not-exported)',
                modifier: {
                    search: 'applied',
                    order: 'applied',
                    page: 'all'
                }
            }

        },
        {
            extend: 'excelHtml5',
            text: '<i class="fa fa-file-excel"></i>',
            titleAttr: 'Excel',
            charset: "utf-8",
            "bom": "true",
            className: 'btn btn-xs',
            exportOptions: {
                columns: ':visible:not(.not-exported)',
                modifier: {
                    search: 'applied',
                    order: 'applied',
                    page: 'all'
                }
            }
        },
        {
            extend: 'pdfHtml5',
            text: '<i class="fa fa-file-pdf"></i>',
            titleAttr: 'PDF',
            charset: "utf-8",
            "bom": "true",
            className: 'btn btn-xs',
            exportOptions: {
                columns: ':visible:not(.not-exported)',
                modifier: {
                    search: 'applied',
                    order: 'applied',
                    page: 'all'
                }
            }
        }
    ];
    onMounted(() => {
   //setCurrentPageTitle("Roles");
    setCurrentPageBreadcrumbs("Roles", ["System Settings"]);
})

const getRoles = () => {
    router.get(route('roles.index'),{},{
        preserveState: true
    });
}

</script>

<style scoped>

</style>
