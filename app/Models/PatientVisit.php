<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientVisit extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['user_id','patient_id', 'token_no', 'temperature', 'bp_systolic', 'bp_diastolic', 'pulse', 'sugar',
        'weight', 'height', 'notes',
    ];

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $model->user_id = auth()->id();
            $model->token_no = (PatientVisit::whereDate('created_at', '=', today()->toDateString())->max('token_no'))+1;
        });
    }
}
