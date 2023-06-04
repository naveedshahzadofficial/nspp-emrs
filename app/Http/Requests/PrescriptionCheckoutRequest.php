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
            'risk_factor_notes' => 'nullable|sometimes',
            'complaint_notes' => 'nullable|sometimes',
            'disease_notes' => 'nullable|sometimes',
            'diagnosis_advise' => 'nullable|sometimes',
        ];
    }
}
