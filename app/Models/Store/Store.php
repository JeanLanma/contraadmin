<?php

namespace App\Models\Store;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
