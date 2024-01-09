<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReimbursementRequest extends FormRequest
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
            'patient_id' => 'required',
            'old_attachment_file'=>'sometimes|nullable',
            'attachment_file' => 'required_if:old_attachment_file,null|sometimes|nullable|mimes:png,jpg,jpeg,docs,doc,csv,xlx,xls,pdf|max:10240',
            'actual_amount' => 'required',
            'approved_amount' => 'required',
            'comments' => 'sometimes|nullable|max:500',
        ];
    }

    public function messages()
    {
        return [
            'patient_id.required' => 'The patient is required.',
            'attachment_file.required_if' => 'The attachment is required.'
        ];
    }
}
