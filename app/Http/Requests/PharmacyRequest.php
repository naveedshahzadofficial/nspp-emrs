<?php

namespace App\Http\Requests;

use App\Rules\QuantityRule;
use Illuminate\Foundation\Http\FormRequest;

class PharmacyRequest extends FormRequest
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
            'patient_medicines' => 'required_without_all:patient_other_medicines|array',

            'patient_medicines.*.id' => 'nullable|sometimes',
            'patient_medicines.*.medicine_id' => 'nullable|sometimes',
            'patient_medicines.*.medicine_type_id' => 'nullable|sometimes',
            'patient_medicines.*.route_id' => 'nullable|sometimes',
            'patient_medicines.*.dosage' => 'nullable|sometimes',
            'patient_medicines.*.frequency_id' => 'nullable|sometimes',
            'patient_medicines.*.duration_unit' => 'nullable|sometimes',
            'patient_medicines.*.qty' => 'nullable|sometimes|numeric',
            'patient_medicines.*.acquire_qty' => ['required','numeric', new QuantityRule()],
            'patient_medicines.*.taken_meal' => 'nullable|sometimes',
            'patient_medicines.*.medicine_instructions' => 'nullable|sometimes',
            'patient_medicines.*.acquire_from' => 'nullable|sometimes',

            'patient_other_medicines.*.id' => 'nullable|sometimes',
            'patient_other_medicines.*.medicine_id' => 'nullable|sometimes',
            'patient_other_medicines.*.qty' => 'nullable|sometimes|numeric',
            'patient_other_medicines.*.acquire_qty' => ['required','numeric', new QuantityRule()],
            'patient_other_medicines.*.medicine_instructions' => 'nullable|sometimes',
            'patient_other_medicines.*.acquire_from' => 'nullable|sometimes',
        ];
    }

    public function messages()
    {
        return [
          'patient_medicines.required_without_all'=> 'At least one medicine/ other medicine is required.'
        ];
    }
}
