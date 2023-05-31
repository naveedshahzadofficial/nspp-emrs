<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_no',
        'patient_type_id', 'patient_name', 'gender_id', 'patient_age',
        'relationship_with_employee', 'designation', 'patient_cnic', 'patient_phone', 'status'
    ];
    public function scopeActive($query) {
        return $query->where('active', true);
    }

    public function patientVisits(): HasMany
    {
        return $this->hasMany(PatientVisit::class)->latest();
    }

    public function patientVisit(): HasOne
    {
        return $this->hasOne(PatientVisit::class)->latest();
    }

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $max_number = Patient::max('id')+1;
            $model->patient_no = str_pad($max_number.today()->year, 7,'0',STR_PAD_LEFT);
        });
    }
}
