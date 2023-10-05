<script lang="ts" setup>
defineProps({
    stock: { type: Object, required: true },
});
</script>

<template>
    <Head title="View Stock" />
    <Toolbar
        title="View Stock"
        :buttons="[{ label: 'Back', link: route('stocks.index') }]"
        :breadcrumbs="[
            {
                label: 'Stocks',
                link: route('stocks.index'),
            },
            { label: 'View', link: null },
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Card body-->
                <div class="card-body">
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Category</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock?.medicine_category?.category_name
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Medicine Name</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock?.medicine?.medicine_name
                                }}</span>
                        </div>
                    </div>
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Manufacturing Date</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock.manufacturing_date || '-'
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Expiry Date</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock.expiry_date
                                }}</span>
                        </div>
                    </div>

                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Qty</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock.qty
                                }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                            >Unit Rate</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock.unit_rate || '-'
                                }}</span>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold"
                                >Amount</label
                            >
                            <span class="form-control form-control-solid">{{
                                    stock.amount || '-'
                            }}</span>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-semibold">Status</label>
                            <span class="form-control form-control-solid">{{
                                stock.status ? "Active" : "Inactive"
                            }}</span>
                        </div>
                    </div>
                </div>
                <!--end::Card body-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
