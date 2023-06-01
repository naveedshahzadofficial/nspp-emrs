<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicineType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['type_name', 'is_multiply', 'status'];

    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
