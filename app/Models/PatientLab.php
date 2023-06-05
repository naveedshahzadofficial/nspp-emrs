<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientLab extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['patient_id', 'patient_visit_id',
        'test_category_id', 'test_type_id', 'test_id', 'lab_id',
        'test_instructions',];

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function testCategory(): BelongsTo
    {
        return $this->belongsTo(TestCategory::class);
    }

    public function testType(): BelongsTo
    {
        return $this->belongsTo(TestType::class);
    }

    public function test(): BelongsTo
    {
        return $this->belongsTo(Test::class);
    }

    public function lab(): BelongsTo
    {
        return $this->belongsTo(Lab::class);
    }
}
