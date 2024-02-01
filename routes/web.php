<?php

use App\Http\Controllers\Admin\Branches\StoreController;
use App\Http\Controllers\Admin\WarehouseController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/DashboardIndex');
    })->name('dashboard');

    Route::get('/admin/warehouse', [WarehouseController::class, 'index'])->name('admin.warehouse.index');
    Route::post('/admin/warehouse', [WarehouseController::class, 'store'])->name('admin.warehouse.store');
    Route::put('/admin/warehouse/{id}', [WarehouseController::class, 'update'])->name('admin.warehouse.update');
    Route::delete('/admin/warehouse/{id}', [WarehouseController::class, 'destroy'])->name('admin.warehouse.destroy');

    Route::get('/admin/stores', [StoreController::class, 'index'])->name('admin.store.index');
    Route::post('/admin/stores', [WarehouseController::class, 'store'])->name('admin.warehouse.store');
    Route::put('/admin/warehouse/{id}', [WarehouseController::class, 'update'])->name('admin.warehouse.update');
    Route::delete('/admin/warehouse/{id}', [WarehouseController::class, 'destroy'])->name('admin.warehouse.destroy');

});
