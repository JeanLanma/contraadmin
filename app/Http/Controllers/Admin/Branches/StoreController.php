<?php

namespace App\Http\Controllers\Admin\Branches;

use App\Http\Controllers\Controller;

class StoreController extends Controller
{
    

    public function index()
    {
        return inertia('Admin/Stores/StoresIndex');
    }
}
