<?php

namespace App\Repositories\Warehouse;

use App\Models\Warehouse\Warehouse;

class GetWarehouse
{


    public static function Paginated($limit = 10)
    {
        return Warehouse::with(['user:id,name'])->paginate($limit);
    }
}