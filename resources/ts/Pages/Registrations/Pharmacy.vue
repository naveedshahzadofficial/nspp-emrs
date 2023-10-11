<script setup lang="ts">
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watch, onMounted } from "vue";
import AlertMessage from "@/Components/alerts/AlertMessage.vue";

const props = defineProps({
    patientVisit: { type: Object, required: true },
    medicines: { type: Array, required: true },
    routes: { type: Array, required: true },
    frequencies: { type: Array, required: true },
});

const patient = ref<any>(props.patientVisit?.patient);
const filterMedicines = ref();
const filterOtherMedicines = ref();
const medicineOption = ref();
const optionsTakenMeals = ref(["Before Meal", "After Meal", "During Meal"]);
const optionsAcquireFrom = ref(["In-House", "External"]);

const medicineForm = useForm({
    id: null,
    medicine_id: null,
    medicine_type_id: null,
    medicine_type: null,
    route_id: 1,
    dosage: null,
    frequency_id: null,
    duration_unit: "Days",
    duration_value: 1,
    qty: 1,
    acquire_qty: 0,
    taken_meal: null,
    medicine_instructions: "",
    acquire_from: null,
});

const otherMedicineForm = useForm({
    id: null,
    medicine_id: null,
    qty: null,
    acquire_qty: 0,
    medicine_instructions: "",
    acquire_from: null,
});

const preForm = useForm({
    patient_medicines: props.patientVisit?.patient_medicines || <any>[],
    patient_other_medicines:
        props.patientVisit?.patient_other_medicines || <any>[],
});
onMounted(() => {
    filterMedicines.value = props.medicines?.filter(
        (medicine: any) => medicine.medicine_category_id === 1
    );
    filterOtherMedicines.value = props.medicines?.filter(
        (medicine: any) => medicine.medicine_category_id !== 1
    );
});
watch(
    () => medicineOption.value,
    (option) => {
        medicineForm.reset();
        if (option?.id) {
            medicineForm.medicine_id = option.id;
            medicineForm.medicine_type_id = option.medicine_type_id;
            medicineForm.medicine_type = option.medicine_type?.type_name;
        } else {
            medicineForm.medicine_id = null;
            medicineForm.medicine_type_id = null;
            medicineForm.medicine_type = null;
        }
    }
);

watch(
    () => [
        medicineForm.dosage,
        medicineForm.frequency_id,
        medicineForm.duration_value,
    ],
    ([dosage, frequency_id, duration_value]) => {
        let total = 1;
        let isMultiply = medicineOption.value?.medicine_type?.is_multiply;
        if (isMultiply) {
            let dosage = medicineForm.dosage || 1;
            let multiplyFactor = 1;
            if (frequency_id !== null) {
                let frequency = props.frequencies?.find(
                    (freq: any) => freq.id === frequency_id
                ) as any;
                multiplyFactor = frequency?.multiply_factor || 1;
            }
            total = Math.ceil(
                eval(String(dosage)) * multiplyFactor * (duration_value || 1)
            );
        }

        medicineForm.qty = total;
    }
);
const getMedicineName = (id: number) =>
    (props.medicines?.find((medicine: any) => medicine.id === id) as any)
        ?.medicine_name;
const getRouteName = (id: number) =>
    (props.routes?.find((route: any) => route.id === id) as any)?.route_name;
const getFrequencyName = (id: number) =>
    (props.frequencies?.find((frequency: any) => frequency.id === id) as any)
        ?.frequency_name;

const addMedicine = () => {
    medicineForm.clearErrors();
    const row = medicineForm.data();
    if (row.medicine_id === null)
        medicineForm.setError("medicine_id", "Medicine is required.");
    if (row.route_id === null)
        medicineForm.setError("route_id", "Route is required.");
    if (row.acquire_from === null)
        medicineForm.setError("acquire_from", "Acquire From is required.");

    if (
        row.medicine_id === null ||
        row.route_id === null ||
        row.acquire_from === null
    )
        return;

    const medicine = props.medicines?.find(
        (medicine: any) => medicine.id == row.medicine_id
    ) as any;
    if (
        parseInt(medicine?.total_stocks_qty || "0") === 0 &&
        row.acquire_from === "In-House"
    ) {
        medicineForm.setError(
            "acquire_from",
            `please Acquire From External, ${medicine.medicine_name} is out of stock.`
        );
        return;
    }

    preForm.patient_medicines.push(medicineForm.data());
    medicineOption.value = null;
    medicineForm.reset();
};
const deleteMedicine = (pmed: Object) =>
    (preForm.patient_medicines = preForm.patient_medicines.filter(
        (obj) => obj !== pmed
    ));

const addOtherMedicine = () => {
    otherMedicineForm.clearErrors();
    const row = otherMedicineForm.data();
    if (row.medicine_id === null)
        otherMedicineForm.setError("medicine_id", "Medicine is required.");
    if (row.qty === null) otherMedicineForm.setError("qty", "Qty is required.");
    if (row.acquire_from === null)
        otherMedicineForm.setError("acquire_from", "Acquire Form is required.");

    if (
        row.medicine_id === null ||
        row.qty === null ||
        row.acquire_from === null
    )
        return;

    const medicine = props.medicines?.find(
        (medicine: any) => medicine.id == row.medicine_id
    ) as any;
    if (
        parseInt(medicine?.total_stocks_qty || "0") === 0 &&
        row.acquire_from === "In-House"
    ) {
        otherMedicineForm.setError(
            "acquire_from",
            `please Acquire From External, ${medicine.medicine_name} is out of stock.`
        );
        return;
    }

    preForm.patient_other_medicines.push(otherMedicineForm.data());

    otherMedicineForm.reset();
};
const deleteOtherMedicine = (pmed: Object) =>
    (preForm.patient_other_medicines = preForm.patient_other_medicines.filter(
        (obj) => obj !== pmed
    ));

const validateAcquireQty = (
    pmed: any,
    index: any,
    field = "patient_medicines"
) => {
    const acquireQty = parseInt(pmed?.acquire_qty);
    const medicine = props.medicines?.find(
        (medicine: any) => medicine.id == pmed.medicine_id
    ) as any;
    if (pmed.acquire_from === "In-House" && acquireQty === 0) {
        preForm.errors[
            `${field}.${String(index)}.acquire_qty`
        ] = `At least 1 quantity is required for acquisition.`;
    } else if (
        pmed.acquire_from === "In-House" &&
        acquireQty > parseInt(medicine?.total_stocks_qty || "0")
    ) {
        preForm.errors[`${field}.${String(index)}.acquire_qty`] =
            medicine?.total_stocks_qty
                ? `${medicine.medicine_name} has only ${medicine?.total_stocks_qty} in stock.`
                : `${medicine.medicine_name} is out of stock.`;
    } else {
        delete preForm.errors[`${field}.${String(index)}.acquire_qty`];
    }
};
</script>

<template>
    <Head title="Dispense Medicine" />
    <!--begin::Form-->
    <form
        @submit.prevent="
            preForm.post(
                route('registrations.pharmacy.submit', patientVisit?.id)
            )
        "
    >
        <Toolbar
            title="Dispense Medicine"
            :buttons="[
                {
                    label: 'Cancel',
                    link: route('registrations.index'),
                    class: 'btn-secondary',
                },
                {
                    label: 'Submit',
                    link: null,
                    type: 'submit',
                    class: 'btn-success',
                    processing: preForm.processing,
                },
            ]"
            :breadcrumbs="[
                { label: 'Registrations', link: route('registrations.index') },
                { label: 'Add Medicine', link: null },
            ]"
        />
        <!-- begin:: Content Body -->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">
                <AlertMessage
                    v-if="preForm.errors.patient_medicines"
                    title="Error"
                    :message="preForm.errors.patient_medicines"
                />
                <AlertMessage
                    v-if="$page.props?.flash?.title"
                    :title="$page.props?.flash?.title"
                    :message="$page.props?.flash?.message"
                />

                <div class="card">
                    <!--begin::Card body-->
                    <div class="card-body card-custom">
                        <!--begin::Header vitals-->
                        <div class="card bg-secondary">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div
                                        class="d-flex align-items-center bg-white p-4"
                                    >
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
                                                {{
                                                    patient.patient_name.charAt(
                                                        0
                                                    )
                                                }}
                                            </span>
                                        </div>
                                        <!--end::Avatar-->

                                        <!--begin::Name-->
                                        <div
                                            class="d-flex justify-content-start flex-column"
                                        >
                                            <a
                                                href="#"
                                                class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                                >{{ patient.patient_name }}</a
                                            >
                                            <a
                                                href="#"
                                                class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                            >
                                                <span class="text-dark"
                                                    >Designation</span
                                                >:
                                                {{ patient.designation }}
                                            </a>
                                            <a
                                                href="#"
                                                class="text-muted text-hover-primary fw-bold text-muted d-block fs-7"
                                            >
                                                <span class="text-dark"
                                                    >Age</span
                                                >:
                                                {{ patient.patient_age }}
                                            </a>
                                        </div>
                                        <!--end::Name-->
                                    </div>
                                    <div
                                        class="flex-grow-1 align-items-center flex-column p-4"
                                    >
                                        <h3>Vitals &nbsp;</h3>
                                        <div
                                            class="separator border-primary my-2"
                                        ></div>
                                        <ul
                                            class="list-group list-group-horizontal"
                                        >
                                            <li class="list-group-item m-1">
                                                <b>Pulse: </b
                                                >{{ patientVisit?.pulse }}
                                            </li>
                                            <li class="list-group-item m-1">
                                                <b>Temp: </b
                                                >{{ patientVisit?.temperature }}
                                            </li>
                                            <li class="list-group-item m-1">
                                                <b>BP: </b
                                                >{{
                                                    patientVisit?.bp_systolic
                                                }}/{{
                                                    patientVisit?.bp_diastolic
                                                }}
                                            </li>
                                            <li class="list-group-item m-1">
                                                <b
                                                    >Height ({{
                                                        patientVisit?.height_unit ===
                                                        "Feet"
                                                            ? "ft"
                                                            : patientVisit?.height_unit ===
                                                              "Inches"
                                                            ? "in"
                                                            : ""
                                                    }}): </b
                                                >{{ patientVisit?.height }}
                                            </li>
                                            <li class="list-group-item m-1">
                                                <b>Weight (kg): </b
                                                >{{ patientVisit?.weight }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end::Header vitals-->

                        <h4 class="font-weight-bold main_section_heading mt-6">
                            <span class="text-uppercase"
                                >Medicine Prescription</span
                            >
                        </h4>
                        <div class="section_box">
                            <div class="mb-10 row">
                                <div class="col-lg-6">
                                    <label class="form-label required"
                                        >Medicine</label
                                    >
                                    <v-select
                                        v-model="medicineOption"
                                        :options="filterMedicines"
                                        :reduce="(option) => option"
                                        label="medicine_name"
                                        class="v-select-custom"
                                        placeholder="Please Select"
                                    >
                                        <template v-slot:option="option">
                                            {{ option.medicine_name
                                            }}<template
                                                v-if="
                                                    option.medicine_generic
                                                        ?.generic_name
                                                "
                                            >
                                                --- [
                                                {{
                                                    option.medicine_generic
                                                        .generic_name
                                                }}
                                                ]<span
                                                    >--- ({{
                                                        option.total_stocks_qty ||
                                                        0
                                                    }})</span
                                                ></template
                                            >
                                        </template>
                                        <template
                                            #selected-option="{
                                                medicine_name,
                                                total_stocks_qty,
                                                medicine_generic,
                                            }"
                                        >
                                            {{ medicine_name
                                            }}<template
                                                v-if="
                                                    medicine_generic?.generic_name
                                                "
                                            >
                                                --- [
                                                {{
                                                    medicine_generic.generic_name
                                                }}
                                                ]<span
                                                    >--- ({{
                                                        total_stocks_qty || 0
                                                    }})</span
                                                ></template
                                            >
                                        </template>
                                    </v-select>
                                    <ServerErrorMessage
                                        :error="medicineForm.errors.medicine_id"
                                    />
                                </div>
                                <div class="col-lg-2">
                                    <label class="form-label"
                                        >Dosage Form</label
                                    >
                                    <input
                                        v-model="medicineForm.medicine_type"
                                        type="text"
                                        class="form-control form-control-sm form-control-solid"
                                        readonly
                                    />
                                </div>

                                <div class="col-lg-2">
                                    <label class="form-label">Route</label>
                                    <v-select
                                        v-model="medicineForm.route_id"
                                        :options="routes"
                                        label="route_name"
                                        :reduce="(option) => option.id"
                                        class="v-select-custom"
                                        placeholder="Please Select"
                                    />
                                    <ServerErrorMessage
                                        :error="medicineForm.errors.route_id"
                                    />
                                </div>

                                <div class="col-lg-2">
                                    <label class="form-label">Dosage</label>
                                    <v-select
                                        v-model="medicineForm.dosage"
                                        :options="
                                            ['1/4', '1/3', '1/2', '3/4'].concat(
                                                range(1, 180, 1, 0)
                                            )
                                        "
                                        class="v-select-custom"
                                        placeholder="Please Select"
                                    />
                                    <ServerErrorMessage
                                        :error="medicineForm.errors.dosage"
                                    />
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
                                        class="v-select-custom"
                                        placeholder="Please Select"
                                    />
                                    <ServerErrorMessage
                                        :error="
                                            medicineForm.errors.frequency_id
                                        "
                                    />
                                </div>

                                <div class="col-lg-2">
                                    <label class="form-label"
                                        >Duration ({{
                                            medicineForm.duration_unit
                                        }})</label
                                    >
                                    <input
                                        v-model="medicineForm.duration_value"
                                        type="text"
                                        class="form-control form-control-sm"
                                    />
                                </div>

                                <div class="col-lg-2">
                                    <label class="form-label">Qty</label>
                                    <input
                                        v-model="medicineForm.qty"
                                        type="text"
                                        class="form-control form-control-sm"
                                    />
                                </div>

                                <div class="col-lg-4">
                                    <label class="form-label"
                                        >To be Taken</label
                                    >
                                    <div class="d-flex">
                                        <div
                                            v-for="taken_meal in optionsTakenMeals"
                                            :key="taken_meal"
                                            class="form-check form-check-custom form-check-sm me-10"
                                        >
                                            <input
                                                v-model="
                                                    medicineForm.taken_meal
                                                "
                                                :value="taken_meal"
                                                class="form-check-input"
                                                name="taken_meal"
                                                type="radio"
                                                :id="`taken_meal_${taken_meal}`"
                                            />
                                            <label
                                                class="form-check-label"
                                                :for="`taken_meal_${taken_meal}`"
                                                >{{ taken_meal }}</label
                                            >
                                        </div>
                                    </div>
                                    <ServerErrorMessage
                                        :error="medicineForm.errors.taken_meal"
                                    />
                                </div>
                            </div>

                            <div class="mb-10 row">
                                <div class="col-lg-8">
                                    <label class="form-label"
                                        >Instructions</label
                                    >
                                    <textarea
                                        v-model="
                                            medicineForm.medicine_instructions
                                        "
                                        class="form-control form-control-sm"
                                        rows="2"
                                    ></textarea>
                                    <ServerErrorMessage
                                        :error="
                                            medicineForm.errors
                                                .medicine_instructions
                                        "
                                    />
                                </div>

                                <div class="col-lg-4">
                                    <label class="form-label"
                                        >Acquire From</label
                                    >
                                    <div class="d-flex">
                                        <div
                                            v-for="acquire_from in optionsAcquireFrom"
                                            :key="acquire_from"
                                            class="form-check form-check-custom form-check-sm me-10"
                                        >
                                            <input
                                                v-model="
                                                    medicineForm.acquire_from
                                                "
                                                :value="acquire_from"
                                                class="form-check-input"
                                                name="acquire_from"
                                                type="radio"
                                                :id="`acquire_from_${acquire_from}`"
                                            />
                                            <label
                                                class="form-check-label"
                                                :for="`acquire_from_${acquire_from}`"
                                                >{{ acquire_from }}</label
                                            >
                                        </div>
                                    </div>
                                    <ServerErrorMessage
                                        :error="
                                            medicineForm.errors.acquire_from
                                        "
                                    />
                                </div>
                            </div>

                            <div class="mb-10 row">
                                <div class="col-lg-12 text-end">
                                    <button
                                        class="btn btn-success btn-sm"
                                        @click.prevent="addMedicine"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="table-responsive">
                                    <table
                                        class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                                    >
                                        <!--begin::Table head-->
                                        <thead>
                                            <tr
                                                class="fw-semibold fs-6 text-gray-800"
                                            >
                                                <th class="text-start">
                                                    Medicine
                                                </th>
                                                <th class="text-start">
                                                    Route
                                                </th>
                                                <th class="text-center">
                                                    Dosage
                                                </th>
                                                <th class="text-start">
                                                    Frequency
                                                </th>
                                                <th class="text-center">
                                                    Duration (Days)
                                                </th>
                                                <th class="text-center">Qty</th>
                                                <th class="text-center">
                                                    Acquire Qty
                                                </th>
                                                <th class="text-center">
                                                    Acquire From
                                                </th>
                                                <th class="text-center">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template
                                                v-for="(
                                                    pmed, index
                                                ) in preForm.patient_medicines"
                                            >
                                                <tr>
                                                    <td class="text-start">
                                                        {{
                                                            getMedicineName(
                                                                pmed.medicine_id
                                                            )
                                                        }}
                                                    </td>
                                                    <td class="text-start">
                                                        {{
                                                            getRouteName(
                                                                pmed.route_id
                                                            )
                                                        }}
                                                    </td>
                                                    <td class="text-center">
                                                        {{ pmed.dosage }}
                                                    </td>
                                                    <td class="text-start">
                                                        {{
                                                            getFrequencyName(
                                                                pmed.frequency_id
                                                            )
                                                        }}
                                                    </td>
                                                    <td class="text-center">
                                                        {{
                                                            pmed.duration_value
                                                        }}
                                                    </td>
                                                    <td class="text-center">
                                                        {{ pmed.qty }}
                                                    </td>
                                                    <td class="text-center">
                                                        <input
                                                            v-if="
                                                                pmed.acquire_from ===
                                                                'In-House'
                                                            "
                                                            type="number"
                                                            min="0"
                                                            maxlength="11"
                                                            v-model="
                                                                pmed.acquire_qty
                                                            "
                                                            class="form-control form-control-sm text-center"
                                                            placeholder="Acquire Qty"
                                                            @input="
                                                                validateAcquireQty(
                                                                    pmed,
                                                                    index
                                                                )
                                                            "
                                                        />
                                                        <span v-else>-</span>
                                                        <ServerErrorMessage
                                                            :error="
                                                                preForm.errors[
                                                                    'patient_medicines.' +
                                                                        String(
                                                                            index
                                                                        ) +
                                                                        '.acquire_qty'
                                                                ]
                                                            "
                                                        />
                                                    </td>
                                                    <td class="text-center">
                                                        {{ pmed.acquire_from }}
                                                    </td>
                                                    <td class="text-center">
                                                        <button
                                                            v-if="
                                                                !pmed?.user_id ||
                                                                $page.props.auth
                                                                    ?.user
                                                                    ?.id ===
                                                                    pmed.user_id
                                                            "
                                                            class="btn btn-icon btn-sm btn-danger"
                                                            @click.prevent="
                                                                deleteMedicine(
                                                                    pmed
                                                                )
                                                            "
                                                        >
                                                            <i
                                                                class="las la-trash fs-1"
                                                            ></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <h4 class="font-weight-bold main_section_heading mt-6">
                            <span class="text-uppercase">Other Items</span>
                        </h4>
                        <div class="section_box">
                            <div class="mb-10 row">
                                <div class="col-lg-6">
                                    <label class="form-label required"
                                        >Name</label
                                    >
                                    <v-select
                                        v-model="otherMedicineForm.medicine_id"
                                        :options="filterOtherMedicines"
                                        :reduce="(option) => option.id"
                                        label="medicine_name"
                                        class="v-select-custom"
                                        placeholder="Please Select"
                                    >
                                        <template v-slot:option="option">
                                            {{ option.medicine_name
                                            }}<template
                                                v-if="
                                                    option.medicine_generic
                                                        ?.generic_name
                                                "
                                            >
                                                --- [
                                                {{
                                                    option.medicine_generic
                                                        .generic_name
                                                }}
                                                ]<span
                                                    >--- ({{
                                                        option.total_stocks_qty ||
                                                        0
                                                    }})</span
                                                ></template
                                            >
                                        </template>
                                        <template
                                            #selected-option="{
                                                medicine_name,
                                                total_stocks_qty,
                                                medicine_generic,
                                            }"
                                        >
                                            {{ medicine_name
                                            }}<template
                                                v-if="
                                                    medicine_generic?.generic_name
                                                "
                                            >
                                                --- [
                                                {{
                                                    medicine_generic.generic_name
                                                }}
                                                ]<span
                                                    >--- ({{
                                                        total_stocks_qty || 0
                                                    }})</span
                                                ></template
                                            >
                                        </template>
                                    </v-select>
                                    <ServerErrorMessage
                                        :error="
                                            otherMedicineForm.errors.medicine_id
                                        "
                                    />
                                </div>
                                <div class="col-lg-1">
                                    <label class="form-label">Qty</label>
                                    <input
                                        v-model="otherMedicineForm.qty"
                                        type="text"
                                        class="form-control form-control-sm"
                                    />
                                    <ServerErrorMessage
                                        :error="otherMedicineForm.errors.qty"
                                    />
                                </div>
                                <div class="col-lg-5">
                                    <label class="form-label"
                                        >Instructions</label
                                    >
                                    <textarea
                                        v-model="
                                            otherMedicineForm.medicine_instructions
                                        "
                                        class="form-control form-control-sm"
                                        rows="1"
                                    ></textarea>
                                    <ServerErrorMessage
                                        :error="
                                            otherMedicineForm.errors
                                                .medicine_instructions
                                        "
                                    />
                                </div>
                            </div>
                            <div class="mb-10 row">
                                <div class="col-lg-6 text-start">
                                    <label class="form-label"
                                        >Acquire From</label
                                    >
                                    <div class="d-flex">
                                        <div
                                            v-for="acquire_from in optionsAcquireFrom"
                                            :key="acquire_from"
                                            class="form-check form-check-custom form-check-sm me-10"
                                        >
                                            <input
                                                v-model="
                                                    otherMedicineForm.acquire_from
                                                "
                                                :value="acquire_from"
                                                class="form-check-input"
                                                name="acquire_from_other"
                                                type="radio"
                                                :id="`acquire_from_other_${acquire_from}`"
                                            />
                                            <label
                                                class="form-check-label"
                                                :for="`acquire_from_other_${acquire_from}`"
                                                >{{ acquire_from }}</label
                                            >
                                        </div>
                                    </div>
                                    <ServerErrorMessage
                                        :error="
                                            otherMedicineForm.errors
                                                .acquire_from
                                        "
                                    />
                                </div>
                                <div class="col-lg-6 text-end">
                                    <button
                                        class="btn btn-success btn-sm"
                                        @click.prevent="addOtherMedicine"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="table-responsive">
                                    <table
                                        class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
                                    >
                                        <!--begin::Table head-->
                                        <thead>
                                            <tr
                                                class="fw-semibold fs-6 text-gray-800"
                                            >
                                                <th class="text-start">
                                                    Medicine
                                                </th>
                                                <th class="text-center">Qty</th>
                                                <th class="text-center">
                                                    Acquire Qty
                                                </th>
                                                <th class="text-center">
                                                    Acquire From
                                                </th>
                                                <th class="text-start">
                                                    Instructions
                                                </th>
                                                <th class="text-center">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template
                                                v-for="(
                                                    pmed, index
                                                ) in preForm.patient_other_medicines"
                                            >
                                                <tr>
                                                    <td class="text-start">
                                                        {{
                                                            getMedicineName(
                                                                pmed.medicine_id
                                                            )
                                                        }}
                                                    </td>
                                                    <td class="text-center">
                                                        {{ pmed.qty }}
                                                    </td>
                                                    <td class="text-center">
                                                        <input
                                                            v-if="
                                                                pmed.acquire_from ===
                                                                'In-House'
                                                            "
                                                            type="number"
                                                            min="0"
                                                            maxlength="11"
                                                            v-model="
                                                                pmed.acquire_qty
                                                            "
                                                            class="form-control form-control-sm text-center"
                                                            placeholder="Acquire Qty"
                                                            @input="
                                                                validateAcquireQty(
                                                                    pmed,
                                                                    index,
                                                                    'patient_other_medicines'
                                                                )
                                                            "
                                                        />
                                                        <span v-else>-</span>
                                                        <ServerErrorMessage
                                                            :error="
                                                                preForm.errors[
                                                                    'patient_other_medicines.' +
                                                                        String(
                                                                            index
                                                                        ) +
                                                                        '.acquire_qty'
                                                                ]
                                                            "
                                                        />
                                                    </td>
                                                    <td class="text-center">
                                                        {{ pmed.acquire_from }}
                                                    </td>
                                                    <td class="text-start">
                                                        {{
                                                            pmed.medicine_instructions
                                                        }}
                                                    </td>
                                                    <td class="text-center">
                                                        <button
                                                            v-if="
                                                                !pmed?.user_id ||
                                                                $page.props.auth
                                                                    ?.user
                                                                    ?.id ===
                                                                    pmed.user_id
                                                            "
                                                            class="btn btn-icon btn-sm btn-danger"
                                                            @click.prevent="
                                                                deleteOtherMedicine(
                                                                    pmed
                                                                )
                                                            "
                                                        >
                                                            <i
                                                                class="las la-trash fs-1"
                                                            ></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!-- end:: Content Body -->
    </form>
    <!--end::Form-->
</template>
