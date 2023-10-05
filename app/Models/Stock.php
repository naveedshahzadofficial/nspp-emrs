<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stock extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'institute_id', 'medicine_category_id', 'medicine_id',
        'qty', 'unit_rate', 'amount', 'manufacturing_date', 'expiry_date',
        'pack_size', 'manufacturer','supplier', 'status'];

    public function setExpiryDateAttribute($value)
    {
        $this->attributes['expiry_date'] = !empty($value)?Carbon::parse($value)->format('Y-m-d'):null;
    }

    public function setManufacturingDateAttribute($value)
    {
        $this->attributes['manufacturing_date'] = !empty($value)?Carbon::parse($value)->format('Y-m-d'):null;
    }

    public function medicine(): BelongsTo
    {
        return $this->belongsTo(Medicine::class);
    }

    public function medicineCategory(): BelongsTo
    {
        return $this->belongsTo(MedicineCategory::class);
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
