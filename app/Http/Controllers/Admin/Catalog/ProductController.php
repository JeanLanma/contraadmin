<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Repositories\Catalog\Product\GetProducts;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
     public function index()
     {
            $products = GetProducts::paginated(15);
            return inertia('Admin/Products/ProductsIndex', compact('products'));
     }
}
