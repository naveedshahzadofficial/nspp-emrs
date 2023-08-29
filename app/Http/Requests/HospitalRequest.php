<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class HospitalRequest extends FormRequest
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
            'hospital_name' => ['required','string', 'max:255', Rule::unique('hospitals', 'hospital_name')->ignore($this->hospital)],
            'speciality' => 'sometimes|nullable|max:255',
            'address' => 'sometimes|nullable|max:255',
            'contact' => 'sometimes|nullable|max:255',
            'status' => 'required',
        ];
    }
}
