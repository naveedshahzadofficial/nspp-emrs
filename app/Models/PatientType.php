<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_type', 'status' ];
    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
