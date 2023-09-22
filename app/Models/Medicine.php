<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medicine extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['medicine_category_id', 'medicine_generic_id', 'medicine_type_id', 'medicine_name',
         'strength', 'is_controlled', 'is_multiply', 'is_over_counter', 'is_frequently_used', 'status',];

    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function medicineCategory(): BelongsTo
    {
        return $this->belongsTo(MedicineCategory::class);
    }
    public function medicineGeneric(): BelongsTo
    {
        return $this->belongsTo(MedicineGeneric::class);
    }
    public function medicineType(): BelongsTo
    {
        return $this->belongsTo(MedicineType::class);
    }
}
