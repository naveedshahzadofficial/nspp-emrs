<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stock extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'institute_id', 'medicine_id',
        'qty', 'unit_rate', 'amount', 'manufacturing_date', 'expiry_date',
        'pack_size', 'manufacturer','supplier', 'status'];
}
