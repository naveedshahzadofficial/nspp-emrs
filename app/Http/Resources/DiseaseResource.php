<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DiseaseResource extends JsonResource
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
            'disease_type_id' => $this->disease_type_id,
            'disease_name'=> $this->disease_name,
            'status'=> $this->status,
            'disease_type' => new DiseaseTypeResource($this->whenLoaded('diseaseType'))
        ];
    }
}
