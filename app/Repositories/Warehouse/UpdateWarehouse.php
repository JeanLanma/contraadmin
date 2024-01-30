<?php

namespace App\Repositories\Warehouse;

use App\Models\Warehouse\Warehouse;

class UpdateWarehouse
{
    public static function fromRequest(array $request, Warehouse $warehouse)
    {
        $warehouse->update([
            'name' => $request['name'],
            'location' => $request['location'],
        ]);

        return $warehouse;
    }
}