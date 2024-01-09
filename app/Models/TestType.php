<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['test_category_id', 'type_name', 'status', ];

    public function scopeActive($query) {
        return $query->where('status', true);
    }

    public function testCategory(): BelongsTo
    {
        return $this->belongsTo(TestCategory::class);
    }
}
