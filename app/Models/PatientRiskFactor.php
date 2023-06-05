<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientRiskFactor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_id', 'patient_visit_id', 'risk_factor_id', 'risk_factor_notes',];

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function riskFactor(): BelongsTo
    {
        return $this->belongsTo(RiskFactor::class);
    }
}
