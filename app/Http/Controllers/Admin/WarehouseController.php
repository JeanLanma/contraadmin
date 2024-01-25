<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Warehouse\StoreWarehouseRequest;
use App\Repositories\Warehouse\PostWarehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    

    public function index()
    {
        return inertia('Admin/Warehouse/WarehouseIndex');
    }

    public function store(StoreWarehouseRequest $request, PostWarehouse $postWarehouse)
    {

        // $warehouse = array_merge($request->validated(), ['user_id' => auth()->user()->id]);
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
