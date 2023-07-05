<script lang="ts" setup>
import {ref} from "vue";


const props = defineProps({
    patientVisit: { type: Object, required: true},
});

const patient = ref<any>(props.patientVisit?.patient);

const printReceipt = () => {
    const kt_wrapper = document.querySelector('#kt_wrapper') as HTMLElement;
    const kt_aside = document.querySelector('#kt_aside') as HTMLElement;
    const kt_header = document.querySelector('#kt_header') as HTMLElement;
    const kt_toolbar = document.querySelector('#kt_toolbar') as HTMLElement;
    const kt_footer = document.querySelector('#kt_footer') as HTMLElement;

    kt_aside?.style?.setProperty('display', 'none');
    kt_header?.style?.setProperty('display', 'none');
    kt_toolbar?.style?.setProperty('display', 'none');
    kt_footer?.style?.setProperty('display', 'none');
    kt_wrapper?.style?.setProperty('padding-top', '0');
    window.print();
    kt_aside?.style?.removeProperty('display');
    kt_header?.style?.removeProperty('display');
    kt_toolbar?.style?.removeProperty('display');
    kt_footer?.style?.removeProperty('display');
    kt_wrapper?.style?.removeProperty('padding-top');
}
</script>

<style scoped>
@media print {
    @page { margin: 0 15px; }
    body { margin: 1.6cm; }
}
</style>
<template>
    <Head title="Receipt Patient"/>
    <Toolbar
        title="Receipt Patient"
        :buttons="[
            {label: 'Print', link: null, type: 'button', click:printReceipt },
            {label: 'Back', link: route('registrations.index')}
        ]"
        :breadcrumbs="[
            {label: 'Registrations', link: route('registrations.index')},
            {label: 'Receipt', link: null}
        ]"
    />

    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom" id="print-receipt">

                <!--begin::Card header-->
                <div class="card-header">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <h1 class="text-uppercase">Patient Slip</h1>
                    </div>
                    <!--begin::Card title-->

                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                        <div class="flex flex-column">
                            <span class="text-dark text-hover-primary fw-bold d-block fs-7">Token No: <span class="text-dark fw-semibold">{{ patientVisit.token_no }}</span></span>
                            <span class="text-dark text-hover-primary fw-bold d-block fs-7">Date: <span class="text-dark fw-semibold">{{ patientVisit.date }}</span></span>
                            <span class="text-dark text-hover-primary fw-bold d-block fs-7">Time: <span class="text-dark fw-semibold">{{ patientVisit.time }}</span></span>
                        </div>
                    </div>
                    <!--end::Card toolbar-->
                </div>
                <!--end::Card header-->

                <!--begin::Card body-->
                <div class="card-body">

                    <div class="d-flex align-items-center justify-content-between flex-sm-column flex-md-row">
                        <div class="d-flex align-items-center bg-white p-4">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-125px me-5">
                                <img
                                    v-if="patient?.patient_image"
                                    alt="Pic"
                                    :src="patient?.patient_image"
                                />
                                <span
                                    v-else-if="patient?.patient_name"
                                    :class="`bg-light-primary text-primary`"
                                    class="symbol-label fw-bolder fa-10x"
                                >
                                                {{ patient?.patient_name.charAt(0) }}
                                </span>
                            </div>
                            <!--end::Avatar-->

                            <!--begin::Profile Detail-->
                            <div class="d-flex justify-content-start flex-column">
                                <span class="text-dark fw-bolder text-hover-primary mb-1 fs-5">{{ patient.patient_name }}</span>
                                <span class="text-dark text-hover-primary fw-bold d-block fs-7"><span class="text-dark fw-semibold">Gender</span>: {{ patient?.gender?.gender_name }}</span>
                                <span class="text-dark text-hover-primary fw-bold d-block fs-7"><span class="text-dark fw-semibold">Age</span>: {{ patient.patient_age }}</span>
                                <span class="text-dark text-hover-primary fw-bold d-block fs-7"><span class="text-dark fw-semibold">Designation</span>: {{ patient.designation }}</span>

                            </div>
                            <!--end::Profile Detail-->
                        </div>

                        <div class="flex-column p-4">
                            <h3 class="min-w-md-100px">Vitals</h3>
                            <span class="text-dark text-hover-primary fw-bold d-block fs-7"><span class="text-dark fw-semibold">Temp</span>: {{ patientVisit?.temperature }}</span>
                            <span class="text-dark text-hover-primary fw-bold d-block fs-7"><span class="text-dark fw-semibold">BP</span>: {{ patientVisit?.bp_systolic }}/{{ patientVisit?.bp_diastolic }}</span>
                            <span class="text-dark text-hover-primary fw-bold d-block fs-7"><span class="text-dark fw-semibold">Pulse</span>: {{ patientVisit?.pulse }}</span>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="col-md-12 col-xs-12 border-frame-vitals">
                                <h5>Presenting Complaints</h5>
                            </div>

                            <div class="col-md-12 col-xs-12 border-frame-vitals">
                                <h5>Diagnosis:</h5>
                            </div>
                            <div class="col-md-12 col-xs-12 border-frame-vitals" style="height:280px">
                                <img src="/media/logos/rx.png" width="20" height="20" style="margin:5px;"/>
                            </div>

                            <div class="col-md-12 col-xs-12 border-frame-vitals">
                                <h5>Disposal:</h5>
                            </div>

                            <div class="col-md-12 col-xs-12 border-frame-vitals">
                                <h5>Follow up:</h5>
                            </div>
                        </div>
                 </div>

                    <div class="row mt-5">
                            <div class="col-md-7">
                                <p>Total Visits: 0</p>
                                <p>Last Visit: 2023-07-05 8:00 PM</p>
                                <p>PITB TEST / Medical Officer / CW1831551 <br/> Jul 05, 2023</p>
                            </div>
                            <div class="col-md-5 text-end mt-15">
                                <span style="border-top:1px solid;"> Stamp / Signature </span>
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

