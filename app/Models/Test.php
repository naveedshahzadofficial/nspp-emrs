<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Test extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['test_type_id', 'test_name', 'status', ];

    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function testType(): BelongsTo
    {
        return $this->belongsTo(TestType::class);
    }
}
