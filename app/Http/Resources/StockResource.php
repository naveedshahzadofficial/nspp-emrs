<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
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
            'user_id' => $this->user_id,
            'institute_id' => $this->institute_id,
            'medicine_id' => $this->medicine_id,
            'qty' => $this->qty,
            'unit_rate' => $this->unit_rate,
            'amount' => $this->amount,
            'manufacturing_date' => $this->manufacturing_date,
            'expiry_date' => $this->expiry_date,
            'status' => $this->status,
            'medicine_category' => new MedicineCategoryResource($this->whenLoaded('medicineCategory')),
            'medicine' => new MedicineResource($this->whenLoaded('medicine')),

        ];
    }
}
