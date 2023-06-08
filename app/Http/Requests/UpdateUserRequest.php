<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'username' => ['required', 'string', 'max:100', Rule::unique('users', 'username')->ignore($this->user)],
            'email' => ['email', 'max:255', Rule::unique('users', 'email')->ignore($this->user)],
            'password' => 'sometimes|nullable|confirmed|min:8',
            'status' => 'required',
            'roles' => 'sometimes|array',
            'permissions' => 'sometimes|array'
        ];
    }
}
