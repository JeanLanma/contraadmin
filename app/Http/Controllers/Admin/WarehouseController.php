<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    

    public function index()
    {
        return inertia('Admin/Warehouse/WarehouseIndex');
    }
}
