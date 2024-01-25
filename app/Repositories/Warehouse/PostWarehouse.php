<?php

namespace App\Repositories\Warehouse;

use App\Models\Warehouse\Warehouse;

class PostWarehouse
{


    public static function fromRequest(array $request)
    {

        $warehouse = Warehouse::create([
            'name' => $request['name'],
            'location' => $request['location'],
            'user_id' => auth()->user()->id,
        ]);

        return $warehouse;
    }
}