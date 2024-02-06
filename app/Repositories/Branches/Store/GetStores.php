<?php

namespace App\Repositories\Branches\Store;

use App\Models\Branches\Store;

class GetStores
{
    /**
     * Get all stores
     * 
     * @param int $limit
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public static function getPaginated($limit = 10): \Illuminate\Pagination\LengthAwarePaginator
    {
        return Store::with('user:id,name')
            ->paginate($limit);
    }
}