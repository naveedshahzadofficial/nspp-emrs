<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends \Spatie\Permission\Models\Role
{
    use HasFactory, SoftDeletes;

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d-m-Y');
    }
}
