<?php

namespace App\Repositories\Catalog\Product;

use App\Models\Admin\Catalog\Product;

class GetProduct
{
    public function __construct(
        private Product $product
    ) {
    }

    public function __invoke(int $id): Product
    {
        return $this->product->findOrFail($id);
    }
}