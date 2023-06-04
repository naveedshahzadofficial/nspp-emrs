<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hospital extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['hospital_name', 'speciality', 'address', 'contact', 'status', ];

    public function scopeActive($query) {
        return $query->where('status', true);
    }

}
