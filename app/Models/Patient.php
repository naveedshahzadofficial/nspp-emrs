<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_no',
        'patient_type_id', 'patient_name', 'gender_id', 'patient_age',
        'relationship_with_employee', 'designation', 'patient_cnic', 'patient_phone', 'patient_email', 'status'
    ];
    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function patientType(): BelongsTo
    {
        return $this->belongsTo(PatientType::class);
    }

    public function gender(): BelongsTo
    {
        return $this->belongsTo(Gender::class);
    }

    public function scopeRelations($query) {
        return $query->with('patientVisits', 'patientRiskFactors.riskFactor', 'patientComplaints.complaint',
            'patientDiseases.disease', 'patientDiagnoses.diseaseType', 'patientDiagnoses.disease',
            'patientDiagnoses.procedure', 'patientMedicines.medicine.medicineGeneric', 'patientMedicines.medicineType',
            'patientMedicines.route', 'patientMedicines.frequency', 'patientOtherMedicines.medicine.medicineGeneric',
            'patientHospitals.hospital', 'patientLabs.testCategory', 'patientLabs.testType',
            'patientLabs.test', 'patientLabs.lab',);
    }

    public function scopePharmacyRelations($query){
        return $query->with('patientMedicines.medicine.medicineGeneric', 'patientMedicines.medicineType',
            'patientMedicines.route', 'patientMedicines.frequency', 'patientOtherMedicines.medicine.medicineGeneric',);
    }

    public function patientVisits(): HasMany
    {
        return $this->hasMany(PatientVisit::class)->latest();
    }

    public function patientVisit(): HasOne
    {
        return $this->hasOne(PatientVisit::class)->latest();
    }

    public function patientEmployee(): HasOne
    {
        return $this->hasOne(PatientEmployee::class)->latest();
    }

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
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

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $max_number = Patient::max('id')+1;
            $model->patient_no = str_pad($max_number.today()->year, 7,'0',STR_PAD_LEFT);
        });
    }
}
