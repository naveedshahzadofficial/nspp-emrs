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

    protected $fillable = ['user_id', 'institute_id',  'patient_id', 'patient_visit_id', 'medicine_id',
        'medicine_type_id', 'route_id', 'dosage', 'frequency_id', 'duration_unit',
        'duration_value', 'qty', 'acquire_qty', 'taken_meal', 'acquire_from',
        'medicine_instructions',];

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function patientVisit(): BelongsTo
    {
        return $this->belongsTo(PatientVisit::class);
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

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $model->user_id = auth()->id();
            $model->institute_id = auth()->user()->institute_id??null;
        });
    }

}
