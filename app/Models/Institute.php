<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Institute extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['head_id', 'mapping_id' , 'name', 'short_name', 'order', 'status',];

    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function head(): BelongsTo
    {
        return $this->belongsTo(Head::class);
    }
}
