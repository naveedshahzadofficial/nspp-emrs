<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientParticipantResource extends JsonResource
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
            "id"=> $this->id??$this->user_id,
            "participant_id" => $this->participant_id,
            "participant_batch_id" => $this->participant_batch_id,
            "participant_batch_type_id" => $this->participant_batch_type_id,
            "participant_college_name" => $this->participant_college_name,
            "participant_name" => $this->participant_name,
            "participant_email" => $this->participant_email,
            "participant_mobile" => $this->participant_mobile,
            "participant_cnic" => $this->participant_cnic,
            "participant_gender" => $this->participant_gender,
            "participant_dob" => $this->participant_dob,
            "age"=> !empty($this->participant_dob)?Carbon::parse($this->participant_dob)->age:"",
            "participant_designation" => $this->participant_designation
        ];
    }
}
