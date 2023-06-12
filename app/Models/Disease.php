<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Disease extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['disease_type_id', 'disease_name', 'disease_description', 'status'];
    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function diseaseType(): BelongsTo
    {
        return $this->belongsTo(DiseaseType::class);
    }
}
