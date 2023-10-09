<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class ParticipantResource extends JsonResource
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
            "id"=> $this->user_id,
            "participant_id" => $this->user_id,
            "participant_batch_id" => $this->user_batch_id,
            "participant_batch_type_id" => $this->user_batch_type_id,
            "participant_college_name" => $this->user_college_name,
            "participant_name" => $this->user_name,
            "participant_email" => $this->user_email,
            "participant_mobile" => $this->user_mobile_number,
            "participant_cnic" => $this->detail_cnic,
            "participant_gender" => $this->detail_gender,
            "participant_dob" => $this->detail_date_of_birth,
            "age"=> !empty($this->detail_date_of_birth)?Carbon::parse($this->detail_date_of_birth)->age:"",
            "participant_designation" => $this->detail_designation
        ];
    }
}
