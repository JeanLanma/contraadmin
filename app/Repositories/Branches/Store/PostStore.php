<?php

namespace App\Repositories\Branches\Store;

use App\Models\Branches\Store;

class PostStore
{
    public static function fromRequest($request, $user_id = null): Store
    {
        return Store::create([
            'name' => $request->name,
            'location' => $request->location,
            'user_id' => $user_id ?? auth()->id(),
        ]);
    }
}