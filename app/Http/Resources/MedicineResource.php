<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MedicineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'medicine_category_id' => $this->medicine_category_id,
            'medicine_generic_id' => $this->medicine_generic_id,
            'medicine_type_id' => $this->medicine_type_id,
            'medicine_name' => $this->medicine_name,
            'specification' => $this->specification,
            'strength' => $this->strength,
            'uom' => $this->uom,
            'is_controlled' => $this->is_controlled,
            'is_multiply' => $this->is_multiply,
            'is_over_counter' => $this->is_over_counter,
            'is_frequently_used' => $this->is_frequently_used,
            'medicine_category' => new MedicineCategoryResource($this->whenLoaded('medicineCategory')),
            'medicine_generic' => new MedicineGenericResource($this->whenLoaded('medicineGeneric')),
            'medicine_type' => new MedicineTypeResource($this->whenLoaded('medicineType')),

        ];
    }
}
