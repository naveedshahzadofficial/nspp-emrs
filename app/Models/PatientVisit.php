<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientVisit extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['institute_id', 'user_id','patient_id', 'token_no', 'temperature', 'bp_systolic', 'bp_diastolic', 'pulse', 'sugar',
        'weight', 'height', 'height_unit', 'notes',];

    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function institute(): BelongsTo
    {
        return $this->belongsTo(Institute::class);
    }
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
    public function patientEmployee(): HasOne
    {
        return $this->hasOne(PatientEmployee::class)->latest();
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y h:i A');
    }

   public function patientRiskFactors(): HasMany
   {
       return $this->hasMany(PatientRiskFactor::class);
   }
   public function patientComplaints(): HasMany
   {
       return $this->hasMany(PatientComplaint::class);
   }
   public function patientDiseases(): HasMany
   {
       return $this->hasMany(PatientDisease::class);
   }
   public function patientDiagnoses(): HasMany
   {
       return $this->hasMany(PatientDiagnosis::class);
   }
   public function patientMedicines(): HasMany
   {
       return $this->hasMany(PatientMedicine::class);
   }
   public function patientOtherMedicines(): HasMany
   {
       return $this->hasMany(PatientOtherMedicine::class);
   }
   public function patientHospitals(): HasMany
   {
       return $this->hasMany(PatientHospital::class);
   }

    public function patientLabs(): HasMany
    {
        return $this->hasMany(PatientLab::class);
    }

    public function scopeRelations($query) {
        return $query->with('patient', 'patientRiskFactors.riskFactor', 'patientComplaints.complaint',
            'patientDiseases.disease', 'patientDiagnoses.diseaseType', 'patientDiagnoses.disease',
            'patientDiagnoses.procedure', 'patientMedicines.medicine.medicineGeneric', 'patientMedicines.medicineType',
            'patientMedicines.route', 'patientMedicines.frequency', 'patientOtherMedicines.medicine.medicineGeneric',
            'patientHospitals.hospital', 'patientLabs.testCategory', 'patientLabs.testType',
            'patientLabs.test', 'patientLabs.lab',);
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $model->user_id = auth()->id();
            $model->institute_id = auth()->user()->institute_id??null;
            $model->token_no = (PatientVisit::whereDate('created_at', '=', today()->toDateString())->max('token_no'))+1;
        });
    }
}
