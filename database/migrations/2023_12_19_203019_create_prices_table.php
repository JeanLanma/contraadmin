<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')
                ->index();
            $table->foreignId('warehouse_id');
            $table->decimal('price', 9, 2);
            $table->decimal('sale_price', 9, 2);
            $table->decimal('cost', 9, 2);
            $table->string('status');
            $table->string('currency');
            $table->string('type');
            $table->string('tax');
            $table->string('tax_type');
            $table->string('tax_included');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prices');
    }
};
