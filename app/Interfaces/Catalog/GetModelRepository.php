<?php

namespace App\Interfaces\Catalog;

use App\Models\Admin\Catalog\Product;
use Illuminate\Pagination\LengthAwarePaginator;

interface GetModelRepository
{
    public static function paginated($limit): LengthAwarePaginator;
}