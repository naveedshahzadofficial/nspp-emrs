<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientVisitResource extends JsonResource
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
            'institute_id' => $this->institute_id,
            'user_id' => $this->user_id,
            'patient_id' => $this->patient_id,
            'token_no' => $this->token_no,
            'temperature' => $this->temperature,
            'bp_systolic' => $this->bp_systolic,
            'bp_diastolic' => $this->bp_diastolic,
            'pulse' => $this->pulse,
            'sugar' => $this->sugar,
            'weight' => $this->weight,
            'height' => $this->height,
            'height_unit' => $this->height_unit,
            'notes' => $this->notes,
            'created_at' => $this->created_at,
            'date' => Carbon::parse($this->created_at)->format('d-m-Y'),
            'time' => Carbon::parse($this->created_at)->format('h:i A'),
            'patient' => new PatientResource($this->whenLoaded('patient')),
            'institute' => new InstituteResource($this->whenLoaded('institute')),
            'user' => new UserResource($this->whenLoaded('user')),
            'patient_medicines' => PatientMedicineResource::collection($this->whenLoaded('patientMedicines')),
            'patient_other_medicines' => PatientOtherMedicineResource::collection($this->whenLoaded('patientOtherMedicines')),

        ];
    }
}
