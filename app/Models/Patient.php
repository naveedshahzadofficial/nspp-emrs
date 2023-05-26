<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'registration_no', 'token_no',
        'patient_type_id', 'patient_name', 'gender_id', 'patient_age',
        'relationship_with_employee', 'designation', 'patient_cnic',
        'temperature', 'bp_systolic', 'bp_diastolic', 'pulse', 'sugar',
        'weight', 'height', 'notes',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $model->user_id = auth()->id();
            $max_number = Registration::max('id')+1;
            $model->registration_no = str_pad($max_number, 7,'0',STR_PAD_LEFT).Carbon::today()->year;
            $model->token_no = (Registration::whereDate('created_at', '=', today()->toDateString())->max('token_no'))+1;
        });
    }
}
