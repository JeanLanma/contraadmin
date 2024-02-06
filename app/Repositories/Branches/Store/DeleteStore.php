<?php

namespace App\Repositories\Branches\Store;

use App\Models\Branches\Store;

class DeleteStore
{
    public static function ById($id): bool
    {
        $store = Store::find($id);
        return $store->delete();
    }
}