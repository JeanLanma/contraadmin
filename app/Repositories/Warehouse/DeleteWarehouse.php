<?php

namespace App\Repositories\Warehouse;

use App\Models\Warehouse\Warehouse;

class DeleteWarehouse
{
    public static function ById($warehpuseID)
    {
        $warehouse = Warehouse::find($warehpuseID);
        return $warehouse->delete();
    }
}
