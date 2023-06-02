<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FrequencyResource extends JsonResource
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
            'frequency_name' => $this->frequency_name,
            'frequency_unit' => $this->frequency_unit,
            'multiply_factor' => $this->multiply_factor,
            'status' => $this->status,
        ];
    }
}
