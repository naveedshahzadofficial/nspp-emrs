<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Frequency extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['frequency_name', 'frequency_unit', 'multiply_factor', 'status',];

    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
