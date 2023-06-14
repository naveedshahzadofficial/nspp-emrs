<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Institute extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'short_name', 'order', 'status',];

    public function scopeActive($query) {
        return $query->where('status', true);
    }
}
