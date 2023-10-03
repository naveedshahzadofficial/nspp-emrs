<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HeadResource extends JsonResource
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
          'name' => $this->name,
          'sort_id' => $this->sort_id,
          'status' => $this->status,
        ];
    }
}
