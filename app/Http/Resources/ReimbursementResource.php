<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
            'employee_id' => $this->employee_id,
            'employee' => new EmployeeResource($this->whenLoaded('employee')),
            'user' => new UserResource($this->whenLoaded('user')),
            'attachment_file' => !empty($this->attachment_file)?Storage::disk('public')->url($this->attachment_file):null,
            'actual_amount' => $this->actual_amount,
            'approved_amount' => $this->approved_amount,
            'comments' => $this->comments,
        ];
    }
}
