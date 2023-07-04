<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientMedicineResource extends JsonResource
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
            'medicine_type_id' => $this->medicine_type_id,
            'route_id' => $this->route_id,
            'dosage' => $this->dosage,
            'frequency_id' => $this->frequency_id,
            'duration_unit' => $this->duration_unit,
            'duration_value' => $this->duration_value,
            'qty' => $this->qty,
            'acquire_qty' => $this->acquire_qty,
            'taken_meal' => $this->taken_meal,
            'acquire_from' => $this->acquire_from,
            'medicine_instructions' => $this->medicine_instructions,
            'user' => new UserResource($this->whenLoaded('user')),
            'patient' => new PatientResource($this->whenLoaded('patient')),
            'patient_visit' => new PatientVisitResource($this->whenLoaded('patientVisit')),
            'medicine' => new MedicineResource($this->whenLoaded('medicine')),
            'medicine_type' => new MedicineTypeResource($this->whenLoaded('medicineType')),
            'route' => new RouteResource($this->whenLoaded('route')),
            'frequency' => new FrequencyResource($this->whenLoaded('frequency')),

        ];
    }
}
