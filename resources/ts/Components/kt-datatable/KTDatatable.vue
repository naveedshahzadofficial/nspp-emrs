<template>
  <div class="dataTables_wrapper dt-bootstrap4 no-footer">
    <div class="table-responsive">
      <table
        :class="[loading && 'overlay overlay-block']"
        class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
        id="kt_customers_table"
        role="grid"
      >
        <!--begin::Table head-->
        <thead>
          <!--begin::Table row-->
          <tr
            class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0"
            role="row"
          >
            <template v-for="(cell, i) in tableHeader" :key="i">
              <th
                @click="
                  sort(
                    cell.sortingField ? cell.sortingField : cell.key,
                    cell.sortable
                  )
                "
                :class="[
                  cell.name && 'min-w-125px',
                  cell.sortable !== false && 'sorting',
                  tableHeader.length - 1 === i && 'text-end',
                  currentSort ===
                    `${cell.sortingField ? cell.sortingField : cell.key}desc` &&
                    'sorting_desc',
                  currentSort ===
                    `${cell.sortingField ? cell.sortingField : cell.key}asc` &&
                    'sorting_asc',
                ]"
                tabindex="0"
                rowspan="1"
                colspan="1"
                style="cursor: pointer"
              >
                {{ cell.name }}
              </th>
            </template>
          </tr>
          <!--end::Table row-->
        </thead>
        <!--end::Table head-->
        <!--begin::Table body-->
        <tbody class="fw-bold text-gray-600">
          <template v-if="getItems.length">
            <template v-for="(item, i) in getItems" :key="i">
              <tr class="odd">
                <template v-for="(cell, i) in tableHeader" :key="i">
                  <td :class="{ 'text-end': tableHeader.length - 1 === i }">
                    <slot :name="`cell-${cell.key}`" :row="item">
                      {{ item[prop] }}
                    </slot>
                  </td>
                </template>
                <!--end::Item=-->
              </tr>
            </template>
          </template>
          <template v-else>
            <tr class="odd">
              <td colspan="7" class="dataTables_empty">
                {{ emptyTableText }}
              </td>
            </tr>
          </template>
        </tbody>
        <div
          v-if="loading"
          class="overlay-layer card-rounded bg-dark bg-opacity-5"
        >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <!--end::Table body-->
      </table>
    </div>

    <div class="row">
      <div
        class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
      >
        <div
          v-if="enableItemsPerPageDropdown"
          class="dataTables_length"
          id="kt_customers_table_length"
        >
          <label
            ><select
              name="kt_customers_table_length"
              class="form-select form-select-sm form-select-solid"
              @change="setItemsPerPage"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select></label
          >
        </div>
      </div>
      <div
        class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"
      >
        <el-pagination
          v-model:current-page="pagination.page"
          @current-change="currentPageChange"
          :page-size="pagination.rowsPerPage"
          layout="prev, pager, next"
          :total="pagination.total"
          :hide-on-single-page="true"
          background
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
  watch,
  getCurrentInstance,
} from "vue";
import arraySort from "array-sort";

interface IPagination {
  page: number;
  total: number;
  rowsPerPage: number;
}

interface IHeaderConfiguration {
  name?: string;
  key: string;
  sortingField?: string;
  sortable?: boolean;
}

export default defineComponent({
  name: "kt-datatable",
  emit: ["current-change", "sort", "items-per-page-change"],
  props: {
    tableHeader: {
      type: Array as () => Array<IHeaderConfiguration>,
      required: true,
    },
    tableData: { type: Array, required: true },
    emptyTableText: { type: String, default: "No data found" },
    loading: { type: Boolean, default: false },
    currentPage: { type: Number, default: 1 },
    enableItemsPerPageDropdown: { type: Boolean, default: true },
    total: { type: Number, default: 0 },
    rowsPerPage: { type: Number, default: 10 },
    order: { type: String, default: "asc" },
    sortLabel: { type: String, default: "" },
  },
  components: {},
  setup(props, { emit }) {
    const data = ref(props.tableData);
    const currentSort = ref<string>("");
    const order = ref(props.order);
    const label = ref(props.sortLabel);
    const pagination = ref<IPagination>({
      page: 1,
      total: props.total,
      rowsPerPage: props.rowsPerPage,
    });

    const vnodeProps = getCurrentInstance()?.vnode.props || {};

    watch(data.value, () => {
      if ("onCurrentChange" in vnodeProps) {
        currentSort.value = label.value + order.value;
      } else {
        pagination.value.total = data.value.length;
      }
    });

    onMounted(() => {
      currentSort.value = label.value + order.value;
      pagination.value.total = props.total ? props.total : data.value.length;
      pagination.value.rowsPerPage = props.rowsPerPage;
    });

    const getItems = computed(() => {
      if ("onCurrentChange" in vnodeProps) {
        return data.value;
      } else {
        const clone = JSON.parse(JSON.stringify(data.value));
        const startFrom =
          pagination.value.page * pagination.value.rowsPerPage -
          pagination.value.rowsPerPage;
        return clone.splice(startFrom, pagination.value.rowsPerPage);
      }
    });

    const currentPageChange = (val) => {
      if ("onCurrentChange" in vnodeProps) {
        emit("current-change", val);
      } else {
        pagination.value.page = val;
      }
    };

    const sort = (columnName, sortable) => {
      if (sortable === false) {
        return;
      }

      if ("onSort" in vnodeProps) {
        if (order.value === "asc") {
          order.value = "desc";
          emit("sort", { columnName: columnName, order: "desc" });
        } else {
          order.value = "asc";
          emit("sort", { columnName: columnName, order: "asc" });
        }
      } else {
        if (order.value === "asc") {
          order.value = "desc";
          arraySort(data.value, columnName, { reverse: false });
        } else {
          order.value = "asc";
          arraySort(data.value, columnName, { reverse: true });
        }
      }
      currentSort.value = columnName + order.value;
    };

    const setItemsPerPage = (event) => {
      if ("onItemsPerPageChange" in vnodeProps) {
        emit("items-per-page-change", parseInt(event.target.value));
      } else {
        pagination.value.rowsPerPage = parseInt(event.target.value);
      }
    };

    return {
      pagination,
      currentPageChange,
      getItems,
      sort,
      currentSort,
      setItemsPerPage,
    };
  },
});
</script>

<style lang="scss">
table.dataTable {
  clear: both;
  margin-top: 6px !important;
  margin-bottom: 6px !important;
  max-width: none !important;
  border-collapse: separate !important;
  border-spacing: 0;
}

table.dataTable > thead {
  th.sorting {
    position: relative;
  }
  .sorting:after {
    position: absolute;
  }
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: none;
  border-radius: 0.475rem;
  font-weight: 500;
  font-size: 1.075rem;
  font-family: Poppins, Helvetica, sans-serif;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #009ef7;
}

table.dataTable td.dataTables_empty,
table.dataTable th.dataTables_empty {
  text-align: center;
}

div.dataTables_wrapper div.dataTables_processing {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
