<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HeadOfWing extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['head_id', 'name', 'name_abbreviation', 'status'];

    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
