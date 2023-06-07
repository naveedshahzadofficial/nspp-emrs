<template>
    <Head title="View Patient"/>
    <Toolbar
        title="View Patient"
        :buttons="[{label: 'Back', link: route('registrations.index')}]"
        :breadcrumbs="[
            {label: 'Registrations', link: route('registrations.index')},
            {label: 'View', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Card body-->
                <div class="card-body">

                    <!--begin::Header vitals-->
                    <div class="card bg-secondary">
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="d-flex align-items-center bg-white p-4">
                                    <!--begin::Avatar-->
                                    <div class="symbol symbol-125px me-5">
                                        <img
                                            v-if="patient.patient_image"
                                            alt="Pic"
                                            :src="patient.patient_image"
                                        />
                                        <span
                                            v-else-if="patient.patient_name"
                                            :class="`bg-light-primary text-primary`"
                                            class="symbol-label fw-bolder fa-10x"
                                        >
                                        {{ patient.patient_name.charAt(0) }}
                                        </span>
                                    </div>
                                    <!--end::Avatar-->

                                    <!--begin::Name-->
                                    <div class="d-flex justify-content-start flex-column">
                                        <a
                                            href="#"
                                            class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                        >{{ patient.patient_name }}</a
                                        >
                                        <a
                                            href="#"
                                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                        >
                                            <span class="text-dark">Designation</span>:
                                            {{ patient.designation }}
                                        </a>
                                        <a
                                            href="#"
                                            class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                        >
                                            <span class="text-dark">Age</span>:
                                            {{ patient.patient_age }}
                                        </a>

                                    </div>
                                    <!--end::Name-->
                                </div>
                                <div class="flex-grow-1 align-items-center flex-column p-4">
                                    <h3> Vitals &nbsp;</h3>
                                    <div class="separator border-primary my-2"></div>
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item m-1"><b>Pulse: </b>{{ patientVisit?.pulse }}</li>
                                        <li class="list-group-item m-1"><b>Temp: </b>{{ patientVisit?.temperature }}</li>
                                        <li class="list-group-item m-1"><b>BP: </b>{{ patientVisit?.bp_systolic }}/{{ patientVisit?.bp_diastolic }}</li>
                                        <li class="list-group-item m-1"><b>Height (cm): </b>{{ patientVisit?.height }}</li>
                                        <li class="list-group-item m-1"><b>Weight (kg): </b>{{ patientVisit?.weight }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Header vitals-->

                </div>
                <!--end::Card body-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->
</template>
<script lang="ts" setup>
defineProps({
    patient: { type: Object, required: true},
    patientVisit: { type: Object, required: true},
});
</script>
