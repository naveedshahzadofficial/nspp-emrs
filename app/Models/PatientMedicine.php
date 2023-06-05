<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientMedicine extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_id', 'patient_visit_id', 'medicine_id',
        'medicine_type_id', 'route_id', 'dosage', 'frequency_id', 'duration_unit',
        'duration_value', 'qty', 'taken_meal', 'acquire_from',
        'medicine_instructions',];

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function medicine(): BelongsTo
    {
        return $this->belongsTo(Medicine::class);
    }

    public function medicineType(): BelongsTo
    {
        return $this->belongsTo(MedicineType::class);
    }

    public function route(): BelongsTo
    {
        return $this->belongsTo(Route::class);
    }
    public function frequency(): BelongsTo
    {
        return $this->belongsTo(Frequency::class);
    }

}
