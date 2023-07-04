<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class QuantityRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        [$table_name, $index, $field_name] = explode('.', $attribute);
        $qty = request()->input("$table_name.$index.qty");
        return $value <= $qty;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The acquire qty must be less than or equal to the qty.';
    }
}
