<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientEmployee extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_id', 'patient_visit_id', 'officer_id', 'officer_name', 'cnic', 'officer_batch', 'daysleft_for_retierment', 'designation', 'offical_contact', 'offical_email', 'date_of_birth', 'gender', 'head_id', 'head_name', 'head_of_wing_id', 'head_of_wing_name'];
}
