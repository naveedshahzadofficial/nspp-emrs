<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PatientRequest extends FormRequest
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
            'patient_age' => 'required|max:25',
            'relationship_with_employee' => 'nullable|string|max:100',
            'designation' => 'required|string|max:100',
            'patient_cnic' => ['nullable', 'max:20', Rule::unique('patients', 'patient_cnic')->ignore($this->patient)],
            'patient_phone' => 'required',
            'status' => 'required'
        ];
    }
}
