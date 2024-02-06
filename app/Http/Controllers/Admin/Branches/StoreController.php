<?php

namespace App\Http\Controllers\Admin\Branches;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Branches\StoreStoreRequest;
use App\Repositories\Branches\Store\DeleteStore;
use App\Repositories\Branches\Store\GetStores;
use App\Repositories\Branches\Store\PostStore;
use App\Repositories\Branches\Store\PutStore;

class StoreController extends Controller
{
    

    public function index()
    {
        $stores = GetStores::getPaginated(15);
        return inertia('Admin/Stores/StoresIndex', [
            'stores' => $stores
        ]);
    }

    public function store(StoreStoreRequest $request)
    {
        $store = PostStore::fromRequest($request);

        return redirect()->back()->with([
            'stored' => $store,
            'status' => 'success',
            'message' => 'Store created successfully',
            'data' => [
                'name'=> request('name'),
                'location'=> request('location'),
            ]
        ]);
    }

    public function update(StoreStoreRequest $request, $id)
    {
        $store = PutStore::fromRequest($request, $id);

        return redirect()->back()->with([
            'updated' => $store,
            'status' => 'success',
            'message' => 'Store updated successfully',
            'data' => [
                'name'=> request('name'),
                'location'=> request('location'),
            ]
        ]);
    }

    public function destroy($id)
    {
        $store = DeleteStore::ById($id);

        return redirect()->back()->with([
            'status' => 'success',
            'message' => 'Store deleted successfully',
        ]);
    }
}
