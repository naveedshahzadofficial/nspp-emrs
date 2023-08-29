<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HospitalResource extends JsonResource
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
            'hospital_name' => $this->hospital_name,
            'speciality' => $this->speciality,
            'address' => $this->address,
            'contact' => $this->contact,
            'status' => $this->status,
        ];
    }
}
