<template>
<Head title="Add Prescription"/>
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
                        Prescription
                    </h1>
                    <!--end::Title-->

                </div>
                <!--end::Page title-->
            </div>
            <!--begin::Card title-->

        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-0 position-relative">

            <ul class="nav nav-tabs nav-line-tabs mb-5 fs-5">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#kt_tab_pane_1"
                    >Vitals</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2"
                    >Risk Factors</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3"
                    >Presenting Complaints</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_4"
                    >Diagnosis</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5"
                    >Medicine Prescription</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6"
                    >Referrals</a
                    >
                </li>
            </ul>

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

            <div class="tab-content">
                <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Vitals</span></h4>
                    <div class="section_box">

                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Temperature (°F)</label>
                                <v-select v-model="preForm.vital.temperature" :options="range(97.0, 106.0, .1).reverse()" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.temperature"/>

                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">B.P. Systolic (mmHg)</label>
                                <v-select v-model="preForm.vital.bp_systolic" :options="range(40, 300, 5, 0)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.bp_systolic"/>

                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">B.P. Diastolic (mmHg)</label>
                                <v-select v-model="preForm.vital.bp_diastolic" :options="range(40, 300, 5, 0)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.bp_diastolic"/>

                            </div>


                        </div>
                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Pulse (bpm)</label>
                                <v-select v-model="preForm.vital.pulse" :options="range(50, 120, 1, 0)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.pulse"/>

                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">Sugar (mg/dL)</label>
                                <input v-model="preForm.vital.sugar"  type="text" class="form-control form-control-sm" placeholder="Sugar (mg/dL)"/>
                                <ServerErrorMessage :error="preForm.errors.vital?.sugar"/>

                            </div>
                            <div class="col-lg-4">
                                <label class="form-label">Weight (kg)</label>
                                <v-select v-model="preForm.vital.weight" :options="range(1.0, 200.0, .1)" class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.vital?.weight"/>

                            </div>
                        </div>

                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Height (cm)</label>
                                <input v-model="preForm.vital.height"  type="text" class="form-control form-control-sm" placeholder="Height (cm)"/>
                                <ServerErrorMessage :error="preForm.errors.vital?.height"/>

                            </div>
                        </div>

                        <div class="mb-10 row">
                            <div class="col-lg-12">
                                <label class="form-label">Notes</label>
                                <textarea v-model="preForm.vital.notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.vital?.notes"/>
                            </div>
                        </div>

                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Vital Date</th>
                                    <th class="text-center">Pulse</th>
                                    <th class="text-center">Temperature</th>
                                    <th class="text-center">BP</th>
                                    <th class="text-center">Height</th>
                                    <th class="text-center">Weight</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_visits" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.pulse }}</td>
                                        <td class="text-center">{{ history.temperature }}</td>
                                        <td class="text-center">{{ history.bp_systolic }}/{{ history.bp_diastolic }}</td>
                                        <td class="text-center">{{ history.height }}</td>
                                        <td class="text-center">{{ history.weight }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Risk Factors</span></h4>
                    <div class="section_box">

                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Risk Factors</label>
                                <v-select v-model="preForm.risk_factor_ids"
                                          :options="riskFactors"
                                          label="factor_name"
                                          :reduce="(option) => option.id"
                                          multiple
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.risk_factor_ids"/>

                            </div>

                            <div class="col-lg-8">
                                <label class="form-label">Notes</label>
                                <textarea v-model="preForm.risk_factor_notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.risk_factor_notes"/>
                            </div>


                        </div>

                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Risk Factor</th>
                                    <th class="text-center">Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_risk_factors" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.factor_name }}</td>
                                        <td class="text-left">{{ history.factor_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Presenting Complaints</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Complaints</label>
                                <v-select v-model="preForm.complaint_ids"
                                          :options="complaints"
                                          label="complaint_name"
                                          :reduce="(option) => option.id"
                                           multiple
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.complaint_ids"/>

                            </div>

                            <div class="col-lg-8">
                                <label class="form-label">Complaint Notes</label>
                                <textarea v-model="preForm.complaint_notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.complaint_notes"/>
                            </div>


                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Disease</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">
                            <div class="col-lg-4">
                                <label class="form-label">Diseases</label>
                                <v-select v-model="preForm.disease_ids"
                                          :options="diseases"
                                          label="disease_name"
                                          :reduce="(option) => option.id"
                                          multiple
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="preForm.errors.disease_ids"/>

                            </div>

                            <div class="col-lg-8">
                                <label class="form-label">Disease Notes</label>
                                <textarea v-model="preForm.disease_notes"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.disease_notes"/>
                            </div>


                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Complaint History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Complaint</th>
                                    <th class="text-center">Complaint Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_complaints" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.complaint_name }}</td>
                                        <td class="text-left">{{ history.complaint_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">Disease History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Disease</th>
                                    <th class="text-center">Disease Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_diseases" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.disease_name }}</td>
                                        <td class="text-left">{{ history.disease_notes }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
                <div class="tab-pane fade" id="kt_tab_pane_4" role="tabpanel">

                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Preliminary Diagnosis</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">
                            <div class="col-lg-3">
                                <label class="form-label required">Category</label>
                                <v-select
                                          v-model="diagForm.disease_type_id"
                                          :options="diseaseTypes"
                                          label="type_name"
                                          :reduce="(option) => option.id"
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="diagForm.errors.disease_type_id"/>


                            </div>

                            <div class="col-lg-3">
                                <label class="form-label required">Diagnosis</label>
                                <v-select
                                          v-model="diagForm.disease_id"
                                          :options="filterDiseases"
                                          label="disease_name"
                                          :reduce="(option) => option.id"
                                          class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="diagForm.errors.disease_id"/>


                            </div>

                            <div class="col-lg-3" v-if="diagForm.disease_type_id===1">
                                <label class="form-label">Procedure</label>
                                <v-select
                                    v-model="diagForm.procedure_id"
                                    :options="filterProcedures"
                                    label="procedure_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom" placeholder="Please Select" />
                                 <ServerErrorMessage :error="diagForm.errors.procedure_id"/>

                            </div>
                            <div class="col-lg-3">
                                <button class="btn btn-success btn-sm mt-7" @click.prevent="addDiagnosis">Save</button>
                            </div>


                        </div>

                        <div class="mb-10 row">

                            <div class="table-responsive">
                                <table
                                    class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                                >
                                    <!--begin::Table head-->
                                    <thead>
                                    <tr class="fw-semibold fs-6 text-gray-800">
                                        <th class="text-center">Category</th>
                                        <th class="text-center">Diagnosis</th>
                                        <th class="text-center">Procedure</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="dig in preForm.diagnoses">
                                        <tr>
                                            <td class="text-center">{{ getDiseaseTypeName(dig.disease_type_id) }}</td>
                                            <td class="text-center">{{ getDiseaseName(dig.disease_id) }}</td>
                                            <td class="text-center">{{ getProcedureName(dig.procedure_id) }}</td>
                                            <td class="text-center">
                                                <button class="btn btn-icon btn-sm btn-danger" @click.prevent="deleteDiagnosis(dig)"><i class="las la-trash fs-1"></i></button>
                                            </td>
                                        </tr>
                                    </template>

                                    </tbody>
                                </table>
                            </div>

                        </div>



                        <div class="mb-10 row">
                            <div class="col-lg-12">
                                <label class="form-label">Advise</label>
                                <textarea v-model="preForm.diagnosis_advise"  class="form-control form-control-sm" rows="4"></textarea>
                                <ServerErrorMessage :error="preForm.errors.diagnosis_advise"/>
                            </div>
                        </div>
                    </div>

                    <h4 class="font-weight-bold main_section_heading"><span class="text-uppercase">History</span></h4>
                    <div class="section_box">
                        <div class="table-responsive">
                            <table
                                class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                            >
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-semibold fs-6 text-gray-800">
                                    <th class="text-center">Date</th>
                                    <th class="text-center">Diagnosis</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="history in patient?.patient_diagnosis" :key="history.id">
                                    <tr>
                                        <td class="text-center">{{ history.created_at }}</td>
                                        <td class="text-center">{{ history.diagnosis_name }}</td>
                                    </tr>
                                </template>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Medicine Prescription</span></h4>
                    <div class="section_box">
                        <div class="mb-10 row">

                            <div class="col-lg-6">
                                <label class="form-label required">Medicine</label>
                                <v-select
                                    v-model="medicineOption"
                                    :options="medicines"
                                    :reduce="(option) => option"
                                    label="medicine_name"
                                    class="v-select-custom" placeholder="Please Select" >
                                    <template v-slot:option="option">
                                        {{ option.medicine_name }}<template v-if="option.medicine_generic?.generic_name"> --- [ {{ option.medicine_generic.generic_name }} ]<span>--- (0)</span></template>
                                    </template>
                                    <template #selected-option="{ medicine_name, medicine_generic }">
                                        {{ medicine_name }}<template v-if="medicine_generic?.generic_name"> --- [ {{ medicine_generic.generic_name }} ]<span>--- (0)</span></template>
                                    </template>
                                </v-select>
                                <ServerErrorMessage :error="medicineForm.errors.medicine_id"/>

                            </div>
                            <div class="col-lg-2">
                                <label class="form-label">Dosage Form</label>
                                <input v-model="medicineForm.medicine_type" type="text" class="form-control form-control-sm form-control-solid" readonly />
                            </div>

                            <div class="col-lg-2">
                                <label class="form-label">Route</label>
                                <v-select
                                    v-model="medicineForm.route_id"
                                    :options="routes"
                                    label="route_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="medicineForm.errors.route_id"/>

                            </div>

                            <div class="col-lg-2">
                                <label class="form-label">Dosage</label>
                                <v-select
                                    v-model="medicineForm.dosage"
                                    :options="['1/4', '1/3', '1/2', '3/4'].concat(range(1, 180, 1, 0))"
                                    class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="medicineForm.errors.dosage"/>

                            </div>

                       </div>

                        <div class="mb-10 row">

                            <div class="col-lg-4">
                                <label class="form-label">Frequency</label>
                                <v-select
                                    v-model="medicineForm.frequency_id"
                                    :options="frequencies"
                                    label="frequency_name"
                                    :reduce="(option) => option.id"
                                    class="v-select-custom" placeholder="Please Select" />
                                <ServerErrorMessage :error="medicineForm.errors.frequency_id"/>

                            </div>

                            <div class="col-lg-2">
                                <label class="form-label">Duration ({{ medicineForm.duration_unit }})</label>
                                <input v-model="medicineForm.duration_value" type="text" class="form-control form-control-sm" />
                            </div>

                            <div class="col-lg-2">
                                <label class="form-label">Qty</label>
                                <input v-model="medicineForm.qty" type="text" class="form-control form-control-sm" />
                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">To be Taken</label>
                                <div class="d-flex">
                                    <div v-for="taken_meal in optionsTakenMeals" :key="taken_meal" class="form-check form-check-custom form-check-sm me-10">
                                        <input v-model="medicineForm.taken_meal" :value="taken_meal" class="form-check-input" name="taken_meal" type="radio" :id="`taken_meal_${taken_meal}`">
                                        <label class="form-check-label" :for="`taken_meal_${taken_meal}`">{{ taken_meal }}</label>
                                    </div>
                                </div>
                                <ServerErrorMessage :error="medicineForm.errors.taken_meal"/>
                            </div>

                        </div>

                        <div class="mb-10 row">
                            <div class="col-lg-8">
                                <label class="form-label">Instructions</label>
                                <textarea v-model="medicineForm.medicine_instructions"  class="form-control form-control-sm" rows="2"></textarea>
                                <ServerErrorMessage :error="medicineForm.errors.medicine_instructions"/>
                            </div>

                            <div class="col-lg-4">
                                <label class="form-label">Acquire From</label>
                                <div class="d-flex">
                                    <div v-for="acquire_from in optionsAcquireFrom" :key="acquire_from" class="form-check form-check-custom form-check-sm me-10">
                                        <input v-model="medicineForm.acquire_from" :value="acquire_from" class="form-check-input" name="acquire_from" type="radio" :id="`acquire_from_${acquire_from}`">
                                        <label class="form-check-label" :for="`acquire_from_${acquire_from}`">{{ acquire_from }}</label>
                                    </div>
                                </div>
                                <ServerErrorMessage :error="medicineForm.errors.acquire_from"/>
                            </div>

                        </div>

                        <div class="mb-10 row">
                            <div class="col-lg-12 text-end"><button class="btn btn-success btn-sm" @click.prevent="addMedicine">Save</button></div>
                        </div>

                        <div class="row">
                            <div class="table-responsive">
                                <table
                                    class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                                >
                                    <!--begin::Table head-->
                                    <thead>
                                    <tr class="fw-semibold fs-6 text-gray-800">
                                        <th class="text-start"> Medicine</th>
                                        <th class="text-start"> Route</th>
                                        <th class="text-center"> Dosage</th>
                                        <th class="text-start"> Frequency</th>
                                        <th class="text-center"> Duration</th>
                                        <th class="text-center"> Qty</th>
                                        <th class="text-center"> Action </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="pmed in preForm.patient_medicines">
                                        <tr>
                                            <td class="text-start">{{ getMedicineName(pmed.medicine_id) }}</td>
                                            <td class="text-start">{{ getRouteName(pmed.route_id) }}</td>
                                            <td class="text-center">{{ pmed.dosage }}</td>
                                            <td class="text-start">{{ getFrequencyName(pmed.frequency_id) }}</td>
                                            <td class="text-center">{{ pmed.duration_value }}</td>
                                            <td class="text-center">{{ pmed.qty }}</td>
                                            <td class="text-center">
                                                <button class="btn btn-icon btn-sm btn-danger" @click.prevent="deleteMedicine(pmed)"><i class="las la-trash fs-1"></i></button>
                                            </td>
                                        </tr>
                                    </template>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Other Items</span></h4>

                </div>
                <div class="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                    <h4 class="font-weight-bold main_section_heading mt-6"><span class="text-uppercase">Referrals</span></h4>
                    <div class="section_box">

                    </div>
                </div>
            </div>

        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</template>

<script setup lang="ts">
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import {useForm} from "@inertiajs/vue3";
import {ref, watch, onMounted} from "vue";
import {IDisease} from "@/interfaces/disease.interface";
import {IDiagnosis} from "@/interfaces/diagnosis.interface";
import {IDiseaseType} from "@/interfaces/diseaseType.interface";

const props = defineProps({
    patient: { type: Object, required: true},
    patientVisit: { type: Object, required: true},
    complaints: { type: Array, required: true},
    diseases: { type: Array, required: true},
    diseaseTypes: { type: Array, required: true},
    procedures: { type: Array, required: true},
    riskFactors: { type: Array, required: true},
    medicines: { type: Array, required: true},
    routes: { type: Array, required: true},
    frequencies: { type: Array, required: true}
});

const filterDiseases = ref();
const filterProcedures = ref();
const filterMedicines = ref();
const filterOtherMedicines = ref();
const medicineOption = ref();
const optionsTakenMeals = ref(["Before Meal", "After Meal", "During Meal"]);
const optionsAcquireFrom = ref(["In-House", "External"]);

let diagForm = useForm({
    disease_type_id: null,
    disease_id: null,
    procedure_id: null,
});

let medicineForm = useForm({
    medicine_id: null,
    medicine_type_id: null,
    medicine_type: null,
    route_id: 1,
    dosage: null,
    frequency_id: null,
    duration_unit: "Days",
    duration_value: 1,
    qty: 1,
    taken_meal: null,
    medicine_instructions: null,
    acquire_from: null,
});

let preForm = useForm({
    vital: {
            temperature: props.patientVisit?.temperature,
            bp_systolic: props.patientVisit?.bp_systolic,
            bp_diastolic: props.patientVisit?.bp_diastolic,
            pulse: props.patientVisit?.pulse,
            sugar: props.patientVisit?.sugar,
            weight: props.patientVisit?.weight,
            height: props.patientVisit?.height,
            notes: props.patientVisit?.notes
        },
    risk_factor_ids: [],
    risk_factor_notes: '',
    complaint_ids: [],
    complaint_notes: '',
    disease_ids: [],
    disease_notes: '',
    diagnoses: <IDiagnosis[]>[],
    diagnosis_advise: '',
    patient_medicines: <any>[],

   }
);

watch(() => diagForm.disease_type_id, value => {
    diagForm.reset( "disease_id", "procedure_id");
    filterDiseases.value = props.diseases?.filter((disease: any) => disease.disease_type_id === value);
    filterProcedures.value = props.procedures?.filter((procedure: any) => procedure.disease_type_id === value);
});

watch(() => medicineOption.value, option => {
    medicineForm.reset( );
    if(option?.id){
        medicineForm.medicine_id = option.id;
        medicineForm.medicine_type_id = option.medicine_type_id;
        medicineForm.medicine_type = option.medicine_type?.type_name;
    }else{
        medicineForm.medicine_id = null;
        medicineForm.medicine_type_id = null;
        medicineForm.medicine_type = null;
    }
});

watch(() => [medicineForm.dosage, medicineForm.frequency_id, medicineForm.duration_value], ([dosage, frequency_id, duration_value]) => {
    let total = 1;
    let isMultiply = medicineOption.value?.medicine_type?.is_multiply;
    if(isMultiply){
        let dosage = medicineForm.dosage || 1;
        let multiplyFactor = 1;
        if(frequency_id !== null) {
            let frequency = props.frequencies?.find((freq: any) => freq.id === frequency_id) as any;
            multiplyFactor = frequency?.multiply_factor || 1;
        }
        total = Math.ceil(eval(String(dosage)) * multiplyFactor * (duration_value || 1));
    }

    medicineForm.qty = total;
});



const addDiagnosis = () => {
    diagForm.clearErrors();
    const row = diagForm.data();
    if(row.disease_type_id === null){
        diagForm.setError("disease_type_id", "Category is required.");
    }
    if(row.disease_id === null){
        diagForm.setError("disease_id", "Diagnosis is required.");
    }
    if(row.disease_type_id === null || row.disease_id === null)
        return;

    preForm.diagnoses.push(diagForm.data())
    diagForm.reset()
}
const deleteDiagnosis = (dig: Object) => {
    preForm.diagnoses = preForm.diagnoses.filter(obj => obj !== dig);
}

const getDiseaseTypeName = (id: number) => (props.diseaseTypes?.find((diseaseType: any) => diseaseType.id === id) as any)?.type_name;
const getDiseaseName = (id: number) => (props.diseases.find((disease: any) => disease.id === id) as any)?.disease_name;
const getProcedureName = (id: number) => (props.procedures.find((procedure: any) => procedure.id === id) as any)?.procedure_name || 'Not Available';

const addMedicine = () => {
    medicineForm.clearErrors();
    const row = medicineForm.data();
    if(row.medicine_id === null)
        medicineForm.setError("medicine_id", "Medicine is required.");
    if(row.route_id === null)
        medicineForm.setError("route_id", "Route is required.");
    if(row.acquire_from === null)
        medicineForm.setError("acquire_from", "Acquire From is required.");

    if(row.medicine_id === null || row.route_id === null || row.acquire_from === null)
        return;

    preForm.patient_medicines.push(medicineForm.data())

    medicineForm.reset();
}
const deleteMedicine = (pmed: Object) =>{
    preForm.patient_medicines = preForm.patient_medicines.filter(obj => obj !== pmed);
}

const getMedicineName = (id: number) => (props.medicines?.find((medicine: any) => medicine.id === id) as any).medicine_name;
const getRouteName = (id: number) => (props.routes?.find((route: any) => route.id === id) as any).route_name;
const getFrequencyName = (id: number) => (props.frequencies?.find((frequency: any) => frequency.id === id) as any).frequency_name;
</script>
