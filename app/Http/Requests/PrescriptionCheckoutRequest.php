<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PrescriptionCheckoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'temperature' => 'nullable|sometimes',
            'bp_systolic' => 'nullable|sometimes',
            'bp_diastolic' => 'nullable|sometimes',
            'pulse' => 'nullable|sometimes',
            'sugar' => 'nullable|sometimes',
            'weight' => 'nullable|sometimes',
            'height' => 'nullable|sometimes',
            'notes' => 'nullable|sometimes',

            //'patient_risk_factors' => 'required|array',
            'patient_risk_factors.*.risk_factor_id' => 'nullable|sometimes',
            'patient_risk_factors.*.risk_factor_notes' => 'nullable|sometimes',

            'patient_complaints.*.complaint_id' => 'nullable|sometimes',
            'patient_complaints.*.complaint_notes' => 'nullable|sometimes',


            'patient_diseases.*.disease_id' => 'nullable|sometimes',
            'patient_diseases.*.disease_notes' => 'nullable|sometimes',

            'patient_diagnoses.*.disease_type_id' => 'nullable|sometimes',
            'patient_diagnoses.*.disease_id' => 'nullable|sometimes',
            'patient_diagnoses.*.procedure_id' => 'nullable|sometimes',
            'patient_diagnoses.*.diagnosis_notes' => 'nullable|sometimes',

            'patient_medicines.*.medicine_id' => 'nullable|sometimes',
            'patient_medicines.*.medicine_type_id' => 'nullable|sometimes',
            'patient_medicines.*.route_id' => 'nullable|sometimes',
            'patient_medicines.*.dosage' => 'nullable|sometimes',
            'patient_medicines.*.frequency_id' => 'nullable|sometimes',
            'patient_medicines.*.duration_unit' => 'nullable|sometimes',
            'patient_medicines.*.qty' => 'nullable|sometimes',
            'patient_medicines.*.taken_meal' => 'nullable|sometimes',
            'patient_medicines.*.medicine_instructions' => 'nullable|sometimes',
            'patient_medicines.*.acquire_from' => 'nullable|sometimes',

            'patient_other_medicines.*.medicine_id' => 'nullable|sometimes',
            'patient_other_medicines.*.qty' => 'nullable|sometimes',
            'patient_other_medicines.*.medicine_instructions' => 'nullable|sometimes',
            'patient_other_medicines.*.acquire_from' => 'nullable|sometimes',

            'patient_hospitals.*.hospital_id' => 'nullable|sometimes',
            'patient_hospitals.*.priority' => 'nullable|sometimes',
            'patient_hospitals.*.remarks' => 'nullable|sometimes',

            'patient_labs.*.test_category_id' => 'nullable|sometimes',
            'patient_labs.*.test_type_id' => 'nullable|sometimes',
            'patient_labs.*.test_id' => 'nullable|sometimes',
            'patient_labs.*.test_instructions' => 'nullable|sometimes',
            'patient_labs.*.lab_id' => 'nullable|sometimes',
        ];
    }
}
