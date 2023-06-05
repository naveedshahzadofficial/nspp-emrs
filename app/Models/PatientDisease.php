<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientDisease extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_id', 'patient_visit_id', 'disease_id', 'disease_notes',];

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function disease(): BelongsTo
    {
        return $this->belongsTo(Disease::class);
    }
}
