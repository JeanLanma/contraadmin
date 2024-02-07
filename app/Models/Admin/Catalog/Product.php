<?php

namespace App\Models\Admin\Catalog;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'description',
        'long_description',
        'slug',
        'sku',
        'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
