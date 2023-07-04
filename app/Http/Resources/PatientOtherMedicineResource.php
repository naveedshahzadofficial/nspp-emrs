<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientOtherMedicineResource extends JsonResource
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
            'patient_id' => $this->patient_id,
            'patient_visit_id' => $this->patient_visit_id,
            'medicine_id' => $this->medicine_id,
            'acquire_from' => $this->acquire_from,
            'qty' => $this->qty,
            'acquire_qty' => $this->acquire_qty,
            'medicine_instructions' => $this->medicine_instructions,
            'user' => new UserResource($this->whenLoaded('user')),
            'patient' => new PatientResource($this->whenLoaded('patient')),
            'patient_visit' => new PatientVisitResource($this->whenLoaded('patientVisit')),
            'medicine' => new MedicineResource($this->whenLoaded('medicine')),
            ];
    }
}
