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
                                <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 459.326 459.326" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <circle cx="78.275" cy="91.207" r="26.807"></circle> <path d="M410.724,346.052h-84.827v-10.835h-50.292c-4.656,0-9.244-1.144-13.353-3.243v14.077h-84.827 c-8.395,0-15.202,6.807-15.202,15.202c0,8.395,6.807,15.202,15.202,15.202h24.234c-0.374,1.283-0.584,2.635-0.584,4.039 c0,7.97,6.461,14.431,14.431,14.431c7.97,0,14.431-6.461,14.431-14.431c0-1.404-0.21-2.756-0.584-4.039h129.442 c-0.374,1.283-0.584,2.635-0.584,4.039c0,7.97,6.461,14.431,14.431,14.431c7.97,0,14.431-6.461,14.431-14.431 c0-1.404-0.21-2.756-0.584-4.039h24.234c8.395,0,15.202-6.807,15.202-15.202C425.926,352.859,419.119,346.052,410.724,346.052z"></path> <path d="M440.956,263.385c0-7.948-6.444-14.392-14.392-14.392h-3.004v28.784h3.004 C434.512,277.777,440.956,271.333,440.956,263.385z"></path> <path d="M195.188,229.805l51.54,34.041l0.345-32.58l-27.822-13.101l45.531,8.108c3.941,0.704,7.992-0.611,10.773-3.521 l33.106-34.64c4.577-4.789,4.404-12.38-0.384-16.956c-4.789-4.577-12.38-4.405-16.956,0.384l-28.663,29.992l-39.2-6.981 l30.625-2.691l-19.337-15.075c-7.789-6.072-19.025-4.68-25.097,3.108l-18.708,23.997 C184.536,212.105,186.486,224.058,195.188,229.805z"></path> <circle cx="168.386" cy="167.962" r="26.471"></circle> <path d="M246.592,276.746L132.7,201.839c-5.739-3.771-13.496-2.157-17.259,3.564c-0.556,0.846-0.982,1.738-1.31,2.65 l-35.453-19.706L67.682,155.6l15.239,22.33l7.192,3.998l2.43-29.558c0.888-10.798-7.146-20.271-17.945-21.159l-34.868-2.866 c-10.798-0.888-20.272,7.147-21.159,17.945l-6.448,100.464c0.015,0.114,0.017,0.227,0.035,0.341l8.435,54.993L0.56,375.156 c-2.283,8.326,2.617,16.927,10.944,19.21c8.319,2.282,16.925-2.613,19.21-10.944l20.913-76.279 c0.58-2.117,0.708-4.333,0.376-6.503l-7.861-51.254l5.695,0.468l19.306,52.636l-15.578,73.561 c-1.789,8.446,3.608,16.744,12.055,18.532c8.427,1.789,16.741-3.593,18.532-12.055l16.51-77.96 c0.609-2.875,0.396-5.863-0.617-8.621l-15.871-43.27l0.124,0.01l1.465-17.817l-29.58-16.442 c-4.161-2.313-10.742-4.98-11.182-13.446l-2.017-41.088l12.603,37.534c1.034,3.08,3.181,5.662,6.02,7.241l50.641,28.148 c6.288,3.494,14.22,1.231,17.716-5.058c0.262-0.472,0.481-0.955,0.679-1.443c7.3,4.801,110.396,72.607,115.655,76.065 C246.281,305.336,246.251,308.989,246.592,276.746z"></path> <path d="M446.866,300.489H423.56v5.41c0,7.487-2.825,14.325-7.46,19.512h30.765c6.882,0,12.461-5.579,12.461-12.461 C459.327,306.068,453.748,300.489,446.866,300.489z"></path> <path d="M261.466,238.044l-0.716,67.697c-0.042,3.967,1.504,7.786,4.294,10.605c2.79,2.82,6.592,4.406,10.559,4.406H394.24 c8.204,0,14.854-6.651,14.854-14.855V245.54c0-13.726-9.036-25.815-22.201-29.7l-68.258-20.147 c-0.771,0.908,1.977-2.006-37.647,39.458C276.481,239.867,269.51,241.832,261.466,238.044z"></path> </g> </g> </g> </g></svg>
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
                                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M471.199,231.069L271.6,33.725l0.044,0.093C249.149,11.271,219.501-0.05,189.995,0 c-29.463-0.05-59.112,11.271-81.609,33.818c-22.54,22.49-33.857,52.092-33.815,81.609c-0.042,29.502,11.274,59.147,33.815,81.645 l47.106,46.6c-1.42-0.043-2.842-0.043-4.259-0.043c-38.632,0-73.726,9.714-99.984,26.161 c-13.106,8.245-24.057,18.189-31.846,29.782c-7.832,11.55-12.417,24.835-12.417,38.858v78.719c0,14.016,4.585,27.308,12.417,38.858 c11.732,17.364,30.377,31.15,53.107,40.83c22.773,9.664,49.762,15.113,78.723,15.163c38.579-0.05,73.676-9.758,99.93-26.211 c13.149-8.202,24.054-18.188,31.89-29.781c7.793-11.55,12.374-24.842,12.374-38.858v-35.144l12.554,12.425l-0.043-0.1 c22.494,22.54,52.143,33.868,81.648,33.818c29.466,0.05,59.112-11.278,81.612-33.768c22.54-22.548,33.814-52.143,33.814-81.659 C505.013,283.212,493.739,253.609,471.199,231.069z M141.473,148.686c-19.106-19.149-19.106-50.63,0.272-70.009 c9.346-9.349,21.809-14.525,35.102-14.525L141.473,148.686z M29.896,338.43c0.043-9.026,2.839-17.637,8.482-26.075 c4.95-7.37,12.231-14.432,21.347-20.705l175.312,102.594c-3.986,2.194-8.201,4.259-12.65,6.137 c-20.113,8.567-44.672,13.608-71.152,13.608c-35.38,0.05-67.27-9.026-89.764-23.186c-11.27-7.097-20.16-15.4-26.118-24.283 c-2.205-3.305-4.033-6.645-5.456-10.08V338.43z M272.518,417.15c0,9.026-2.842,17.644-8.474,26.068 c-8.438,12.56-23.418,24.196-43.074,32.542c-19.612,8.338-43.715,13.335-69.736,13.335c-34.735,0-66.029-8.94-87.792-22.684 c-10.908-6.832-19.433-14.848-25.064-23.193c-5.642-8.424-8.439-17.042-8.482-26.068v-32.484 c11.087,12.274,26.211,22.498,44.034,30.054c22.268,9.449,48.798,14.854,77.304,14.854c37.983,0,72.44-9.586,98.005-25.623 c8.98-5.586,16.816-12.045,23.279-19.243V417.15z M272.518,356.44c-0.272,0.688-0.552,1.326-0.918,2.014 c-1.233,2.753-2.749,5.406-4.538,8.065c-3.847,5.772-9.026,11.228-15.164,16.311L78.329,281.29c1.054-0.459,2.065-1.011,3.116-1.42 c19.611-8.338,43.715-13.335,69.79-13.335c10.26,0,20.208,0.781,29.689,2.251c22.637,3.434,42.704,10.762,58.054,20.382 c1.878,1.147,3.667,2.388,5.359,3.628c8.294,5.908,14.847,12.46,19.475,19.293c0.093,0.086,0.183,0.179,0.233,0.265 c5.632,8.438,8.474,17.049,8.474,26.075V356.44z M451.77,374.9c-17.228,17.192-39.639,25.752-62.183,25.752 c-22.588,0-44.991-8.524-62.223-25.752l-0.046-0.043l-31.89-31.524v-4.903c0-14.024-4.581-27.309-12.374-38.858 c-9.801-14.432-24.326-26.39-42.016-35.553c2.201-5.728,4.994-11.966,8.432-18.368c9.714-18.246,24.286-38.041,43.578-53.247 c19.196-15.17,42.798-25.982,71.984-27.638l86.692,85.731h0.046c17.182,17.228,25.749,39.683,25.749,62.223 C477.519,335.268,468.952,357.723,451.77,374.9z"></path> </g> </g></svg>
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
                                <svg fill="#000000" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x35_86_x2C__Medicine_x2C__pills_x2C__tablets"> <g> <g> <g> <g> <path d="M128.014,260.957H24.681c-5.523,0-10-4.478-10-10v-88.333c0-34.003,27.664-61.667,61.667-61.667 c34.003,0,61.667,27.664,61.667,61.667v88.333C138.014,256.479,133.537,260.957,128.014,260.957z M34.681,240.957h83.333 v-78.333c0-22.975-18.691-41.667-41.667-41.667s-41.667,18.691-41.667,41.667V240.957z"></path> </g> <g> <path d="M76.348,400.956c-34.003,0-61.667-27.664-61.667-61.667v-88.333c0-5.523,4.477-10,10-10h103.333 c5.523,0,10,4.477,10,10v88.333C138.014,373.292,110.351,400.956,76.348,400.956z M34.681,260.957v78.332 c0,22.976,18.692,41.667,41.667,41.667s41.667-18.691,41.667-41.667v-78.332H34.681z"></path> </g> <g> <path d="M252.764,423.641c-2.652,0-5.196-1.054-7.071-2.929l-62.183-62.184c-11.647-11.647-18.062-27.133-18.062-43.604 c0-16.473,6.415-31.958,18.062-43.605c11.647-11.646,27.133-18.062,43.604-18.062s31.957,6.415,43.604,18.062l62.184,62.183 c1.875,1.876,2.929,4.419,2.929,7.071s-1.054,5.195-2.929,7.071l-73.067,73.068 C257.959,422.587,255.416,423.641,252.764,423.641z M227.114,273.257c-11.129,0-21.593,4.334-29.463,12.204 c-7.87,7.869-12.204,18.333-12.204,29.463c0,11.129,4.334,21.593,12.204,29.462l55.112,55.112l58.925-58.926l-55.112-55.111 C248.707,277.591,238.244,273.257,227.114,273.257z"></path> </g> <g> <path d="M351.479,500.956c-16.472,0-31.957-6.415-43.604-18.062l-62.183-62.183c-3.905-3.905-3.905-10.237,0-14.143 l73.067-73.068c1.876-1.875,4.419-2.929,7.071-2.929s5.195,1.054,7.071,2.929l62.183,62.184 c11.646,11.647,18.062,27.133,18.062,43.604c0,16.473-6.415,31.958-18.062,43.605 C383.438,494.541,367.952,500.956,351.479,500.956z M266.905,413.641l55.112,55.111c7.869,7.87,18.333,12.204,29.462,12.204 c11.13,0,21.594-4.334,29.463-12.204c7.87-7.869,12.204-18.333,12.204-29.463c0-11.129-4.334-21.593-12.204-29.462 l-55.111-55.112L266.905,413.641z"></path> </g> <g> <path d="M411.981,180.057c-2.56,0-5.118-0.976-7.071-2.929l-73.068-73.067c-1.875-1.875-2.929-4.419-2.929-7.071 s1.054-5.196,2.929-7.071l60.9-60.9c11.647-11.647,27.133-18.062,43.605-18.062c16.472,0,31.957,6.415,43.604,18.062 c24.043,24.043,24.043,63.166,0,87.209l-60.899,60.9C417.1,179.08,414.541,180.057,411.981,180.057z M353.056,96.989 l58.926,58.925l53.828-53.828c16.246-16.246,16.246-42.68,0-58.926c-7.869-7.87-18.333-12.204-29.462-12.204 c-11.13,0-21.594,4.334-29.463,12.204L353.056,96.989z"></path> </g> <g> <path d="M314.547,256.089c-16.472,0-31.957-6.415-43.604-18.062c-24.043-24.043-24.043-63.166,0-87.209l60.899-60.9 c3.906-3.904,10.236-3.905,14.143,0l73.068,73.067c1.875,1.875,2.929,4.419,2.929,7.071s-1.054,5.196-2.929,7.071l-60.9,60.9 C346.505,249.675,331.02,256.089,314.547,256.089z M338.913,111.131l-53.828,53.828c-16.246,16.246-16.246,42.68,0,58.926 c7.869,7.87,18.333,12.204,29.462,12.204c11.13,0,21.594-4.334,29.463-12.204l53.829-53.829L338.913,111.131z"></path> </g> </g> </g> </g> </g> <g id="Layer_1"></g> </g></svg>
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
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.4"> <path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7.5V16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 6V2H18" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 7L22 2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
