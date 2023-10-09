<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientParticipant extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ["patient_id", "patient_visit_id", "participant_id", "participant_batch_id", "participant_batch_type_id", "participant_college_name", "participant_name", "participant_email", "participant_mobile",
"participant_cnic", "participant_gender", "participant_dob", "participant_designation",
    ];

}
