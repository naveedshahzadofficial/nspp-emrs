<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medicine extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['medicine_category_id', 'medicine_generic_id', 'medicine_type_id', 'medicine_name',
        'specification', 'strength', 'uom', 'is_controlled', 'is_multiply', 'is_over_counter',
        'is_frequently_used', 'status',];

    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
