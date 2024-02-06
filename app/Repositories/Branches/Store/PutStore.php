<?php

namespace App\Repositories\Branches\Store;

use App\Models\Branches\Store;

class PutStore
{
    public static function fromRequest($request, $id): Store
    {
        $store = Store::find($id);
        $store->update([
            'name' => $request->name,
            'location' => $request->location,
        ]);

        return $store;
    }
}