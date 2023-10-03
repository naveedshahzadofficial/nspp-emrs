<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
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
            'medicine_id' => 'required',
            'qty' => 'required',
            'unit_rate' => 'sometimes|nullable',
            'amount' => 'sometimes|nullable',
            'manufacturing_date' => 'sometimes|nullable',
            'expiry_date' => 'required',
            'pack_size' => 'required',
            'manufacturer' => 'sometimes|nullable',
            'supplier' => 'sometimes|nullable',
            'status' => 'required',
        ];
    }
}
