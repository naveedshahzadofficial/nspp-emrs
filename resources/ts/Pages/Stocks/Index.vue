<script lang="ts" setup>
import AlertMessage from "@/Components/alerts/AlertMessage.vue";
import Pagination from "@/Components/paginations/Pagination.vue";
import { ref, watch } from "vue";
import { debounce } from "lodash";
import { useCommons } from "@/core/composables/commons";
import { usePermission } from "@/core/composables/permission";
const { filterData, destroy, toggleStatus } = useCommons();
const { hasPermission } = usePermission();

const props = defineProps({
    stocks: { type: Object, required: true },
    filters: Object,
});

const search: any = ref(props.filters?.search);
const limit: any = ref(props.filters?.limit || "30");

watch(
    [search, limit],
    debounce((value: any) => {
        filterData("stocks.index", {
            search: search.value,
            limit: limit.value,
        });
    }, 500) as any
);
</script>

<template>
    <Head title="Stocks" />
    <Toolbar
        title="Stocks"
        :buttons="[
            {
                label: 'Add Stock',
                link: route('stocks.create'),
                permission: 'create stocks',
            },
        ]"
        :breadcrumbs="[
            { label: 'Stocks', link: null },
        ]"
    />

    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <AlertMessage
                v-if="$page.props.flash.title"
                :title="$page.props.flash.title"
                :message="$page.props.flash.message"
            />

            <div class="card card-custom">
                <!--begin::Card header-->
                <div class="card-header">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <select
                            v-model="limit"
                            @change.prevent="filterData"
                            class="form-select form-select-sm form-select-solid"
                        >
                            <option
                                v-for="_limit in range(30, 100, 10, 0)"
                                :value="_limit"
                            >
                                {{ _limit }}
                            </option>
                        </select>
                    </div>
                    <!--begin::Card title-->

                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                        <!--begin::Search-->
                        <div
                            class="d-flex align-items-center position-relative"
                        >
                            <span
                                class="svg-icon svg-icon-1 position-absolute ms-6"
                            >
                                <inline-svg
                                    src="/media/icons/duotune/general/gen021.svg"
                                />
                            </span>
                            <input
                                v-model="search"
                                type="text"
                                class="form-control form-control-solid w-250px ps-15"
                                placeholder="Search"
                            />
                        </div>
                        <!--end::Search-->
                    </div>
                    <!--end::Card toolbar-->
                </div>
                <!--end::Card header-->

                <div class="card-body">
                    <div class="table-responsive">
                        <table
                            class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                        >
                            <!--begin::Table head-->
                            <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th>Category</th>
                                    <th>Medicine Name</th>
                                    <th>Qty</th>
                                    <th>Total Stock</th>
                                    <th>Stock In</th>
                                    <th>Stock Out</th>
                                    <th>Expiry Date</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center w-200px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template
                                    v-for="stock in stocks.data"
                                    :key="stock.id"
                                >
                                    <tr>
                                        <td>
                                            {{ stock?.medicine_category?.category_name }}
                                        </td>
                                        <td>
                                            {{ stock?.medicine?.medicine_name }}
                                        </td>
                                        <td>
                                            {{ stock.qty }}
                                        </td>

                                        <td>
                                            {{ stock?.medicine?.total_stocks || 0 }}
                                        </td>

                                        <td>
                                            {{ stock?.medicine?.total_stocks_qty || 0 }}
                                        </td>

                                        <td>
                                            {{ parseInt(stock?.medicine?.consume_medicine_stocks || '0') +  parseInt(stock?.medicine?.consume_other_medicine_stocks || '0' )}}
                                        </td>

                                        <td :class="{ 'badge badge-danger': new Date(stock.expiry_date) < new Date(), 'badge badge-warning': new Date(stock.expiry_date) - new Date() <= 2 * 24 * 60 * 60 * 1000 }">
                                            {{ stock.expiry_date }}
                                        </td>
                                        <td class="text-center">
                                            <span
                                                class="badge font-weight-bold"
                                                :class="[
                                                    stock.status
                                                        ? 'badge-success'
                                                        : 'badge-danger',
                                                ]"
                                            >
                                                {{
                                                    stock.status
                                                        ? "Active"
                                                        : "Expire"
                                                }}
                                            </span>
                                        </td>
                                        <td class="text-center">
                                            <Link
                                                v-if="
                                                    hasPermission(
                                                        'view stocks'
                                                    )
                                                "
                                                :href="
                                                    route(
                                                        'stocks.show',
                                                        stock.id
                                                    )
                                                "
                                                class="btn btn-icon btn-primary btn-circle btn-sm me-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="View"
                                            >
                                                <i class="fas fa-eye"></i>
                                            </Link>

                                            <Link
                                                v-if="
                                                    hasPermission(
                                                        'update stocks'
                                                    )
                                                "
                                                :href="
                                                    route(
                                                        'stocks.edit',
                                                        stock.id
                                                    )
                                                "
                                                class="btn btn-icon btn-secondary btn-circle btn-sm me-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Edit"
                                            >
                                                <i class="fas fa-edit"></i>
                                            </Link>

                                            <a
                                                v-if="
                                                    hasPermission(
                                                        'delete stocks'
                                                    )
                                                "
                                                @click.prevent="
                                                    destroy(
                                                        'stocks.destroy',
                                                        stock.id
                                                    )
                                                "
                                                class="btn btn-icon btn-danger btn-circle btn-sm me-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Delete"
                                            >
                                                <i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <Pagination
                        :meta="stocks?.meta"
                        :links="stocks?.links"
                    />
                </div>
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
