<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestCategory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable =['category_name', 'short_name', 'status', ];

    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
