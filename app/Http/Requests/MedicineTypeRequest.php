<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MedicineTypeRequest extends FormRequest
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
            'type_name' => ['required','string', 'max:255', Rule::unique('medicine_types', 'type_name')->ignore($this->medicine_type)],
            'is_multiply' => 'required',
            'status' => 'required',
        ];
    }
}
