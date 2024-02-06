<?php

namespace App\Repositories\Branches\Store;

use App\Models\Branches\Store;

class GetStore
{
    public function __invoke($id): Store
    {
        return Store::find($id);
    }
}