<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Warehouse\StoreWarehouseRequest;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    

    public function index()
    {
        return inertia('Admin/Warehouse/WarehouseIndex');
    }

    public function store(StoreWarehouseRequest $request)
    {
        return response()->json([
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
