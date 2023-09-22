<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MedicineRequest extends FormRequest
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
            'medicine_category_id' => 'required',
            'medicine_generic_id' => 'required',
            'medicine_type_id' => 'sometimes|nullable',
            'medicine_name' => ['required','string', 'max:255', Rule::unique('medicines', 'medicine_name')->ignore($this->medicine)],
            'strength' => 'sometimes|nullable',
            'is_controlled' => 'required',
            'is_multiply' => 'required',
            'is_over_counter' => 'required',
            'is_frequently_used' => 'required',
            'status' => 'required',
        ];
    }
}
