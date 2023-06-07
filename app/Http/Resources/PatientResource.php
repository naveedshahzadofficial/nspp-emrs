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
            'status' => $this->status,
            ];
    }
}
