<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Warehouse\StoreWarehouseRequest;
use App\Repositories\Warehouse\GetWarehouse;
use App\Repositories\Warehouse\PostWarehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    

    public function index()
    {
        $warehouses = GetWarehouse::Paginated(15);
        // return response()->json($warehouses);
        return inertia('Admin/Warehouse/WarehouseIndex', [
            'warehouses' => $warehouses
        ]);
    }

    public function store(StoreWarehouseRequest $request, PostWarehouse $postWarehouse)
    {

        $postWarehouse = PostWarehouse::fromRequest($request->validated());

        return redirect()->back()->with([
            'stored' => $postWarehouse,
            'status' => 'success',
            'message' => 'Warehouse created successfully',
            'data' => [
                'name'=> request('name'),
                'location'=> request('location'),
                'user_id'=> auth()->user()->id,
            ]
        ]);
    }
}
