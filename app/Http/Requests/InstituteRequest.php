<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class InstituteRequest extends FormRequest
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
            'head_id' => 'required',
            'mapping_id' => 'sometimes|nullable',
            'name' => ['required','string', 'max:255', Rule::unique('institutes', 'name')->ignore($this->institute)],
            'short_name' => 'required',
            'order' => 'required',
            'status' => 'required'
        ];
    }
}
