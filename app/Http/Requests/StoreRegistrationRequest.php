<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRegistrationRequest extends FormRequest
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
            'patient_type_id' => 'required',
            'patient_name' => 'required|string|max:255',
            'gender_id' => 'required',
            'patient_age' => 'required|string|max:25',
            'relationship_with_employee' => 'required|string|max:100',
            'designation' => 'required|string|max:100',
            'patient_cnic' => 'required',
            'patient_mobile' => 'nullable|sometimes',
            'temperature' => 'nullable|sometimes',
            'bp_systolic' => 'nullable|sometimes',
            'bp_diastolic' => 'nullable|sometimes',
            'pulse' => 'nullable|sometimes',
            'sugar' => 'nullable|sometimes',
            'weight' => 'nullable|sometimes',
            'height' => 'nullable|sometimes',
            'notes' => 'nullable|sometimes',
        ];
    }
}
