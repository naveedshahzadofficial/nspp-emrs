<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reimbursement extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['employee_id', 'institute_id', 'user_id', 'actual_amount', 'approved_amount', 'comments', 'attachment_file'];

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            $model->institute_id = auth()->user()->institute_id??null;
            $model->user_id = auth()->id();
        });
    }
}
