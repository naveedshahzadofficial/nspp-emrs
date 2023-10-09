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
            'patient_id' => 'nullable|sometimes',
            'patient_type_id' => 'required',
            'employee' => 'required_if:patient_type_id,1',
            'participant' => 'required_if:patient_type_id,2',
            'patient_name' => 'required|string|max:255',
            'gender_id' => 'required',
            'patient_age' => 'required|max:25',
            'relationship_with_employee' => 'nullable|sometimes|string|max:100',
            'designation' => 'required|string|max:100',
            'patient_cnic' => 'required',
            'patient_phone' => 'required',
            'patient_email' => 'nullable|sometimes',
            'temperature' => 'nullable|sometimes',
            'bp_systolic' => 'nullable|sometimes',
            'bp_diastolic' => 'nullable|sometimes',
            'pulse' => 'nullable|sometimes',
            'sugar' => 'nullable|sometimes',
            'weight' => 'nullable|sometimes',
            'height' => 'nullable|sometimes',
            'height_unit' => 'nullable|sometimes',
            'notes' => 'nullable|sometimes',
        ];
    }

    public function messages()
    {
        return [
            'employee.required_if'=> 'Please choose an employee.',
            'participant.required_if'=> 'Please choose an participant.',
            'gender_id.required'=> 'Please choose a gender.'
        ];
    }


}
