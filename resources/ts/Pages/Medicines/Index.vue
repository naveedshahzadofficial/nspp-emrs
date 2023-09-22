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
    medicines: { type: Object, required: true },
    filters: Object,
});

const search: any = ref(props.filters?.search);
const limit: any = ref(props.filters?.limit || "30");

watch(
    [search, limit],
    debounce((value: any) => {
        filterData("medicines.index", {
            search: search.value,
            limit: limit.value,
        });
    }, 500) as any
);
</script>

<template>
    <Head title="Medicines" />
    <Toolbar
        title="Medicines"
        :buttons="[
            {
                label: 'Add Medicine',
                link: route('medicines.create'),
                permission: 'create medicines',
            },
        ]"
        :breadcrumbs="[
            { label: 'System Settings', link: '#' },
            { label: 'Medicines', link: null },
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
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Generic</th>
                                    <th>Type</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center w-200px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template
                                    v-for="medicine in medicines.data"
                                    :key="medicine.id"
                                >
                                    <tr>
                                        <td>
                                            {{ medicine.medicine_name }}
                                        </td>
                                        <td>
                                            {{ medicine.medicine_category?.category_name }}
                                        </td>
                                        <td>
                                            {{ medicine.medicine_generic?.generic_name }}
                                        </td>
                                        <td>
                                            {{ medicine.medicine_type?.type_name }}
                                        </td>
                                        <td class="text-center">
                                            <span
                                                class="badge font-weight-bold"
                                                :class="[
                                                    medicine.status
                                                        ? 'badge-success'
                                                        : 'badge-danger',
                                                ]"
                                            >
                                                {{
                                                    medicine.status
                                                        ? "Active"
                                                        : "Inactive"
                                                }}
                                            </span>
                                        </td>
                                        <td class="text-center">
                                            <Link
                                                v-if="
                                                    hasPermission(
                                                        'view medicines'
                                                    )
                                                "
                                                :href="
                                                    route(
                                                        'medicines.show',
                                                        medicine.id
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
                                                        'update medicines'
                                                    )
                                                "
                                                :href="
                                                    route(
                                                        'medicines.edit',
                                                        medicine.id
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
                                                        'toggle status medicines'
                                                    )
                                                "
                                                @click.prevent="
                                                    toggleStatus(
                                                        'medicines.toggle-status',
                                                        medicine
                                                    )
                                                "
                                                class="btn btn-icon btn-circle btn-sm me-2"
                                                :class="[
                                                    medicine.status
                                                        ? 'btn-danger'
                                                        : 'btn-success',
                                                ]"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                :title="[
                                                    medicine.status
                                                        ? 'Deactivate'
                                                        : 'Activate',
                                                ]"
                                            >
                                                <i
                                                    class="icon-xl fas"
                                                    :class="[
                                                        medicine.status
                                                            ? 'fa-toggle-off'
                                                            : 'fa-toggle-on',
                                                    ]"
                                                ></i>
                                            </a>

                                            <a
                                                v-if="
                                                    hasPermission(
                                                        'delete medicines'
                                                    )
                                                "
                                                @click.prevent="
                                                    destroy(
                                                        'medicines.destroy',
                                                        medicine.id
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
                        :meta="medicines?.meta"
                        :links="medicines?.links"
                    />
                </div>
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
