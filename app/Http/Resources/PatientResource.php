<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
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
            'patient_no' => $this->patient_no,
            'patient_type_id' => $this->patient_type_id,
            'patient_name' => $this->patient_name,
            'gender_id' => $this->gender_id,
            'patient_age' => $this->patient_age,
            'relationship_with_employee' => $this->relationship_with_employee,
            'designation' => $this->designation,
            'patient_cnic' => $this->patient_cnic,
            'patient_phone' => $this->patient_phone,
            'patient_email' => $this->patient_email,
            'status' => $this->status,
            'patient_type' => new PatientTypeResource($this->whenLoaded('patientType')),
            'gender' => new GenderResource($this->whenLoaded('gender')),
            'patient_visit' => new PatientVisitResource($this->whenLoaded('patientVisit')),
            'patient_visit_count' => $this->whenLoaded('patientVisits', function () {
                return $this->patientVisits->count();
            }),
            'patient_employee' => new PatientEmployeeResource($this->whenLoaded('patientEmployee')),
            'patient_participant' => new PatientParticipantResource($this->whenLoaded('patientParticipant')),
        ];
    }
}
