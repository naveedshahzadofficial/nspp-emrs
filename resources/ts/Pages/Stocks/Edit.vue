<script lang="ts" setup>
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import { useForm } from "@inertiajs/vue3";
import {ref, watch} from "vue";
const props = defineProps({
    medicineCategories: {type: Object ,required: true},
    medicines: { type: Array, required: true },
    stock: { type: Object, required: true },
});
const form = useForm({
    medicine_category_id: props.stock?.medicine_category_id,
    medicine_id: props.stock?.medicine_id,
    qty: props.stock?.qty,
    unit_rate: props.stock?.unit_rate,
    amount: props.stock?.amount,
    manufacturing_date: props.stock?.manufacturing_date,
    expiry_date: props.stock?.expiry_date,
    pack_size: props.stock?.pack_size,
    manufacturer: props.stock?.manufacturer,
    supplier: props.stock?.supplier,
    status: props.stock?.status,
});

const getCategoryMedicines = (medicine_category_id: number) => props.medicines?.filter((medicine: any) => medicine.medicine_category_id === medicine_category_id);
const filterMedicines = ref(getCategoryMedicines(props.stock?.medicine_category_id));
const format = (date) =>{
    const day = date.getDate()<10?'0'+date.getDate():date.getDate();
    const month = (date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
const numberMask = '';
watch(
    () => form.medicine_category_id,
    (value) => {
        form.medicine_id = "";
        filterMedicines.value = getCategoryMedicines(value)
    }
);

watch(
    () => [
        form.qty,
        form.unit_rate,
    ],
    ([qty, unit_rate]) => {
        form.amount = "0.00";
        if(qty && unit_rate){
            form.amount = (parseInt(qty) * parseFloat(unit_rate)).toFixed(2);
        }
    }
);
</script>

<template>
    <Head title="Update Stock" />
    <Toolbar
        title="Update Stock"
        :buttons="[{ label: 'Back', link: route('stocks.index') }]"
        :breadcrumbs="[
            {
                label: 'Stocks',
                link: route('stocks.index'),
            },
            { label: 'Update', link: null },
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form
                    @submit.prevent="
                        form.put(
                            route(
                                'stocks.update',
                                stock?.id
                            )
                        )
                    "
                >

                    <!--begin::Card body-->
                    <div class="card-body">
                        <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="form-label required"
                                >Item Type</label
                                >
                                <v-select
                                    v-model="form.medicine_category_id"
                                    :options="medicineCategories"
                                    label="category_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom"
                                    placeholder="Please Select"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.medicine_category_id"
                                />
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label required"
                                >Medicine</label
                                >
                                <v-select
                                    v-model="form.medicine_id"
                                    :options="filterMedicines"
                                    :reduce="(option) => option.id"
                                    label="medicine_name"
                                    class="v-select-custom"
                                    placeholder="Please Select"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.medicine_id"
                                />
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-4">
                                <label class="required form-label"
                                >Quantity</label
                                >
                                <input
                                    v-model="form.qty"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Quantity"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.qty"
                                />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label"
                                >Unit Rate</label
                                >
                                <input
                                    v-model="form.unit_rate"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Unit Rate"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.unit_rate"
                                />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label"
                                >Amount</label
                                >
                                <input
                                    style="background-color: #eef1f5; !important;"
                                    v-model="form.amount"
                                    readonly
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Amount"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.amount"
                                />
                            </div>
                        </div>
                        <div class="row mb-10">
                            <div class="col-lg-4">
                                <label class="form-label"
                                >Manufacturing Date</label
                                >
                                <v-date-picker
                                    v-model="form.manufacturing_date"
                                    :enable-time-picker="false"
                                    :clearable="true"
                                    auto-apply
                                    :format="format"
                                    :preview-format="format"
                                    placeholder="Manufacturing Date"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.manufacturing_date"
                                />
                            </div>

                            <div class="col-lg-4">
                                <label class="required form-label"
                                >Expiry Date</label
                                >
                                <v-date-picker
                                    v-model="form.expiry_date"
                                    :enable-time-picker="false"
                                    :clearable="true"
                                    auto-apply
                                    :format="format"
                                    :preview-format="format"
                                    placeholder="Expiry Date"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.expiry_date"
                                />
                            </div>

                            <div class="col-lg-4">
                                <label class="required form-label"
                                >Pack Size</label
                                >
                                <input
                                    v-model="form.pack_size"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Pack Size"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.pack_size"
                                />
                            </div>

                        </div>

                        <div class="row mb-10">
                            <div class="col-lg-4">
                                <label class="form-label"
                                >Manufacturer</label
                                >
                                <input
                                    v-model="form.manufacturer"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Manufacturer"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.manufacturer"
                                />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label"
                                >Supplier</label
                                >
                                <input
                                    v-model="form.supplier"
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Supplier"
                                />
                                <ServerErrorMessage
                                    :error="form.errors.supplier"
                                />
                            </div>
                            <div class="col-lg-4">
                                <label class="required form-label"
                                >Status</label
                                >
                                <div class="d-flex">
                                    <div
                                        v-for="status in [
                                            { id: 1, name: 'Active' },
                                            { id: 0, name: 'Inactive' },
                                        ]"
                                        :key="status.id"
                                        class="form-check form-check-custom form-check-sm me-10"
                                    >
                                        <input
                                            v-model="form.status"
                                            :value="status.id"
                                            class="form-check-input"
                                            name="status"
                                            type="radio"
                                            :id="`status_${status.id}`"
                                        />
                                        <label
                                            class="form-check-label"
                                            :for="`status_${status.id}`"
                                        >{{ status.name }}</label
                                        >
                                    </div>
                                </div>
                                <ServerErrorMessage
                                    :error="form.errors.status"
                                />
                            </div>
                        </div>
                    </div>
                    <!--end::Card body-->


                    <div class="card-footer">
                        <button
                            type="submit"
                            ref="submitButton"
                            class="btn btn-success me-2"
                            :disabled="form.processing"
                            :data-kt-indicator="form.processing ? 'on' : 'off'"
                        >
                            <span class="indicator-label"> Update </span>

                            <span class="indicator-progress">
                                Please wait...
                                <span
                                    class="spinner-border spinner-border-sm align-middle ms-2"
                                ></span>
                            </span>
                        </button>
                        <Link
                            :href="route('stocks.index')"
                            class="btn btn-secondary"
                            >Cancel</Link
                        >
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>


