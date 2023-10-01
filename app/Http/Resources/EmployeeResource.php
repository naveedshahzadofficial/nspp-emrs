<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
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
            "officer_id"=> $this->officer_id,
            "officer_name"=> $this->officer_name,
            "cnic"=> $this->cnic,
            "officer_batch"=> $this->officer_batch,
            "daysleft_for_retierment"=> $this->daysleft_for_retierment,
            "designation"=> $this->designation,
            "head_id"=> $this->head_id,
            "head_name"=> $this->head_name,
            "head_of_wing_id"=> $this->head_of_wing_id,
            "head_of_wing_name"=> $this->head_of_wing_name,
            "offical_contact"=> $this->offical_contact,
            "offical_email"=> $this->offical_email,
            "date_of_birth"=> $this->date_of_birth,
            "age"=> !empty($this->date_of_birth)?Carbon::parse($this->date_of_birth)->age:"",
            "gender"=> $this->gender,
        ];
    }
}
