<script lang="ts" setup>
import { defineComponent, onMounted, ref, watch, defineProps, onUpdated } from 'vue';
import HighChart from '@/Components/widgets/charts/HighChart.vue';
import { router, useForm } from "@inertiajs/vue3";
import axios from 'axios';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const childData = ref('');
// Reactive variable to store the server response
const responseMessage = ref<string>('');
const page = usePage();
const originalData = page.props.data;
let purchasedItemsByCategory = ref(originalData);
let consumedItemsByCategory = ref(originalData);
let patientVisits = ref(originalData);
let employeeReimbursements = ref(originalData);
let chartOneTitle = ref('Purchased Items By Category');
let chartTwoTitle = ref('Consumed Items By Category');
let chartThreeTitle = ref('Patient Visits');
let chartFourTitle = ref('Total Employee Reimbursements');
const newDate = '';

// const getTitle = computed(() => { return chartOneTitle.value });


const handleUpdate = (dataFromChild: any) => {
    if (dataFromChild.chartId === 'chart-container-2') {
        chartOneTitle.value = 'Purchased Items By Category';
        getData(dataFromChild.chartId, dataFromChild.date);
    }
    if (dataFromChild.chartId === 'chart-container-3') {
        chartTwoTitle.value = 'Consumed Items By Category';
        getData(dataFromChild.chartId,dataFromChild.date);
    }
    if (dataFromChild.chartId === 'chart-container-4') {
        chartThreeTitle.value = 'Patient Visits';
        getData(dataFromChild.chartId,dataFromChild.date);
    }
    if (dataFromChild.chartId === 'chart-container-5') {
        chartThreeTitle.value = 'Total Employee Reimbursements';
        getData(dataFromChild.chartId,dataFromChild.date);
    }
    //childData.value = data;
};

async function getData(container,date) {
    try {
        let url = "";
        switch(container) {
            case "chart-container-2":
                url = '/get-purchased-items-by-category';
                break;
            case "chart-container-3":
                url = '/get-consumed-items-by-category';
                break;
            case "chart-container-4":
                url = '/get-patient-visits';
                break;
            case "chart-container-5":
                url = '/get-employee-reimbursements';
                break;
            default:
                url = "";
        }
        const response = await axios.get(url, {
            params: {date: date},
        });

        let temp = {};
        if (container === 'chart-container-2' && response.data) {
            temp['purchased_items_by_category'] = response.data;
            purchasedItemsByCategory.value = temp;
        } else if (container === 'chart-container-3' && response.data) {
            temp['consumed_items_by_category'] = response.data;
            consumedItemsByCategory.value = temp;
        }else if (container === 'chart-container-4' && response.data) {
            temp['patient_visits'] = response.data;
            patientVisits.value = temp;
        }else if (container === 'chart-container-5' && response.data) {
            temp['total_reimbursements'] = response.data;
            employeeReimbursements.value = temp;
        }




    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

</script>

<template>
    <Head title="Dashboard" />
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div class="container">
            <!-- Begin: Stats Row -->
            <div class="row light-grey-background">
                <div class="col-xl-3">
                    <!--begin::Stats Widget 14-->
                    <a href="#" class="card card-custom bg-primary bg-hover-state-primary card-stretch gutter-b">
                        <!--begin::Body-->
                        <div class="card-body">
                            <span class="svg-icon svg-icon-white svg-icon-3x ml-n1">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                        <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                        <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                        <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                            </span>
                            <div class="text-inverse-success font-weight-bolder font-size-h5 mb-2 mt-5">Patient Register</div>
                            <div class="font-weight-bold text-inverse-success font-size-sm">{{ new Intl.NumberFormat().format($page.props.data.stats.total_patients) }}</div>
                        </div>
                        <!--end::Body-->
                    </a>
                    <!--end::Stats Widget 14-->
                </div>
                <div class="col-xl-3">
                    <!--begin::Stats Widget 13-->
                    <a href="#" class="card card-custom bg-success bg-hover-state-success card-stretch gutter-b">
                        <!--begin::Body-->
                        <div class="card-body">
                            <span class="svg-icon svg-icon-white svg-icon-3x ml-n1">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                        <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                        <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                        <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                            </span>
                            <div class="text-inverse-success font-weight-bolder font-size-h5 mb-2 mt-5">Total Medicines</div>
                            <div class="font-weight-bold text-inverse-success font-size-sm">{{ new Intl.NumberFormat().format($page.props.data.stats.total_medicines) }}</div>
                        </div>
                        <!--end::Body-->
                    </a>
                    <!--end::Stats Widget 13-->
                </div>
                <div class="col-xl-3">
                    <!--begin::Stats Widget 15-->
                    <a href="#" class="card card-custom bg-info bg-hover-state-info card-stretch card-stretch gutter-b">
                        <!--begin::Body-->
                        <div class="card-body">
                            <span class="svg-icon svg-icon-white svg-icon-3x ml-n1">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                        <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3"></path>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                            </span>
                            <div class="text-inverse-info font-weight-bolder font-size-h5 mb-2 mt-5">Medicine Dispensed</div>
                            <div class="font-weight-bold text-inverse-info font-size-sm">{{ new Intl.NumberFormat().format($page.props.data.stats.total_medicines_dispensed) }}</div>
                        </div>
                        <!--end::Body-->
                    </a>
                    <!--end::Stats Widget 15-->
                </div>
                <div class="col-xl-3">
                    <!--begin::Stats Widget 15-->
                    <a href="#" class="card card-custom bg-danger bg-hover-state-danger card-stretch gutter-b">
                        <!--begin::Body-->
                        <div class="card-body">
                            <span class="svg-icon svg-icon-white svg-icon-3x ml-n1">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                        <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                        <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                        <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                            </span>
                            <div class="text-inverse-success font-weight-bolder font-size-h5 mb-2 mt-5">Total Reimbursement</div>
                            <div class="font-weight-bold text-inverse-success font-size-sm">{{ 'Rs. ' + new Intl.NumberFormat().format($page.props.data.stats.total_reimbursements) +'/-'}}</div>
                        </div>
                        <!--end::Body-->
                    </a>
                    <!--end::Stats Widget 15-->
                </div>
            </div>
             <!-- End: Stats Row -->
            <br/><br/>
            <!-- Begin: Stock Row -->
            <div class="row light-grey-background">
                <div class="col-xl-4">
                    <!-- {{ new Intl.NumberFormat().format($page.props.stats.total_items_instock) }} -->
                    <!--begin: Stats Widget 19-->
                    <div class="card card-custom gutter-b" style="height: 160px">
                        <div class="card-body">
                            <span class="svg-icon svg-icon-3x svg-icon-success">

                                <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg-->
                                <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 612" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M545.325,500.685H66.675c-30.737,0-55.657,24.92-55.657,55.657c0,30.737,24.92,55.657,55.657,55.657h478.65 c30.737,0,55.657-24.92,55.657-55.657C600.982,525.604,576.062,500.685,545.325,500.685z"></path> <path d="M129.753,464.922c30.737,0,55.657-24.92,55.657-55.657v-212.61c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v212.61C74.095,440.002,99.016,464.922,129.753,464.922z"></path> <path d="M306.002,464.922c30.737,0,55.657-24.92,55.657-55.657V126.157c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v283.108C250.345,440.002,275.263,464.922,306.002,464.922z"></path> <path d="M482.245,464.922c30.737,0,55.655-24.92,55.655-55.657V55.657C537.903,24.92,512.984,0,482.245,0 c-30.737,0-55.657,24.92-55.657,55.657v353.607C426.588,440.002,451.508,464.922,482.245,464.922z"></path> </g> </g> </g></svg>
                                <!--end::Svg Icon-->
                            </span>
                            <div class="text-dark font-weight-bolder font-size-h2 mt-3"><strong class="number_stat_font">{{ new Intl.NumberFormat().format($page.props.data.stats.total_items_instock) }}</strong></div>
                            <a href="#" class="text-muted text-hover-primary font-weight-bold font-size-lg mt-1">Items Available on Stock</a>
                        </div>
                    </div>
                    <!--end: Stats:Widget 19-->
                </div>
                <div class="col-xl-4">
                    <!--begin: Stats Widget 19-->
                    <div class="card card-custom gutter-b" style="height: 160px">
                        <div class="card-body">
                            <span class="svg-icon svg-icon-3x svg-icon-success">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg-->
                                <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386.651 386.651" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M342.367,135.781c-2.674-1.367-5.889-1.122-8.324,0.635l-138.556,99.968l-89.233-83.725 c-3.032-2.844-7.736-2.892-10.826-0.112l-74.395,66.959c-1.685,1.518-2.648,3.679-2.648,5.946v91.451c0,4.418,3.582,8,8,8h312.339 c4.418,0,8-3.582,8-8v-174C346.724,139.899,345.041,137.149,342.367,135.781z M53.507,308.903H34.385v-79.889l19.122-17.211 V308.903z M88.045,308.903H69.507v-111.5l18.538-16.685V308.903z M122.582,308.903h-18.538V172.526l18.538,17.393V308.903z M157.12,308.903h-18.538V204.931l18.538,17.394V308.903z M192.015,308.903H173.12v-71.565l16.227,15.226 c0.791,0.741,1.702,1.288,2.667,1.65V308.903z M226.91,308.903h-18.896v-61.828l18.896-13.634V308.903z M261.806,308.903H242.91 v-87.006l18.895-13.633V308.903z M296.701,308.903h-18.896V196.72l18.896-13.634V308.903z M330.724,308.903h-18.022v-137.36 l18.022-13.003V308.903z"></path> <path d="M385.375,65.087c-1.439-2.148-3.904-3.404-6.461-3.337l-50.696,1.368c-3.471,0.094-6.429,2.547-7.161,5.941 c-0.732,3.395,0.95,6.85,4.074,8.366l11.846,5.75L196.96,183.012l-95.409-86.504c-4.738-4.296-11.955-4.322-16.723-0.062 L4.173,168.491c-5.149,4.599-5.594,12.501-0.995,17.649c4.598,5.148,12.499,5.594,17.649,0.995l72.265-64.55l94.533,85.709 c2.369,2.147,5.376,3.239,8.398,3.239c2.532,0,5.074-0.767,7.255-2.322L350.82,104.01l0.701,11.074 c0.22,3.464,2.777,6.329,6.193,6.939c0.444,0.079,0.889,0.118,1.328,0.118c2.938,0,5.662-1.724,6.885-4.483l20.077-45.327 C387.052,69.968,386.815,67.234,385.375,65.087z"></path> </g> </g></svg>
                                <!--end::Svg Icon-->
                            </span>
                            <div class="text-dark font-weight-bolder font-size-h2 mt-3"><strong class="number_stat_font">{{ 'Rs.' +new Intl.NumberFormat().format(Math.ceil($page.props.data.stats.total_stock_value)) +'/-' }}</strong></div>
                            <a href="#" class="text-muted text-hover-primary font-weight-bold font-size-lg mt-1">Total Stock Value</a>
                        </div>
                    </div>
                    <!--end: Stats:Widget 19-->
                </div>
                <div class="col-xl-4">
                    <!--begin: Chart Component-->
                    <HighChart chartId="chart-container-1" chartTitle="Stock Values By Category" chartHeight="160px" chartType="bar" :is-show-drop-down="false" :series="$page.props.data.stats.stock_value_by_category.data" :xAxisxategories="$page.props.data.stats.stock_value_by_category.names" :yAxis="$page.props.data.stats.stock_value_by_category.names"/>
                    <!--end: Chart:Component-->
                </div>
            </div>
            <!-- End: Stock Row -->
             <div class="row light-grey-background">
                 <div class="col-xl-6">
                    <!-- <p>Data from Child: {{ childData }}</p> -->
                    <HighChart chartId="chart-container-2" :chartTitle="chartOneTitle" chartHeight="400px"  chartType="column" :is-show-drop-down="true" @updateData="handleUpdate" :series="purchasedItemsByCategory.purchased_items_by_category.data" :xAxisxategories="purchasedItemsByCategory.purchased_items_by_category.names" :yAxis="purchasedItemsByCategory.purchased_items_by_category.names"/>
                 </div>
                 <div class="col-xl-6">
                    <HighChart chartId="chart-container-3" :chartTitle="chartTwoTitle"  chartHeight="400px" chartType="column" :is-show-drop-down="true"  @updateData="handleUpdate" :series="consumedItemsByCategory.consumed_items_by_category.data" :xAxisxategories="consumedItemsByCategory.consumed_items_by_category.names" :yAxis="consumedItemsByCategory.consumed_items_by_category.names"/>
                 </div>
             </div>
             <br/>
             <div class="row">
                <div class="col-xl-12 light-grey-background">
                    <HighChart chartId="chart-container-5" :chartTitle="chartFourTitle" chartHeight="400px" chartType="bar" :is-show-drop-down="false" @updateData="handleUpdate" :series="employeeReimbursements.total_reimbursements.data" :xAxisxategories="employeeReimbursements.total_reimbursements.names" :yAxis="employeeReimbursements.total_reimbursements.names"/>
                 </div>
             </div>
             <br/>
             <div class="row">
                <div class="col-xl-12 light-grey-background">
                    <HighChart chartId="chart-container-4" :chartTitle="chartThreeTitle" chartHeight="400px" chartType="column" :is-show-drop-down="true" @updateData="handleUpdate" :series="patientVisits.patient_visits.data" :xAxisxategories="patientVisits.patient_visits.names" :yAxis="patientVisits.patient_visits.names"/>
                 </div>
             </div>
    </div>
    </div>
</template>

<style lang="scss">
    .light-grey-background {
        background: #D3D3D3;
        padding: 10px;
    }
    .number_stat_font{
        font-size: 30px;
    }
</style>
