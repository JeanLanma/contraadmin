<?php

namespace App\Repositories\Catalog\Product;

use App\Interfaces\Catalog\GetModelRepository;
use App\Models\Admin\Catalog\Product;
use Illuminate\Pagination\LengthAwarePaginator;

class GetProducts implements GetModelRepository
{
    public static function GetAllProducts()
    {
        return Product::all();
    }

    public static function paginated($limit = 15): LengthAwarePaginator
    {
        return Product::paginate($limit);
    }
}