<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReimbursementResource extends JsonResource
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
            'patient' => new PatientResource($this->whenLoaded('patient')),
            'user' => new UserResource($this->whenLoaded('user')),
            'actual_amount' => $this->actual_amount,
            'approved_amount' => $this->approved_amount,
            'comments' => $this->comments,
        ];
    }
}
