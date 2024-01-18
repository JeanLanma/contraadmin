<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import WarehouseList from './Partials/WarehouseList.vue';
</script>

<template>
    <AdminLayout title="Almacen">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <template #content>
        <div class="w-full py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                
                <div class="w-full">
                    <div class="flex gap-4">
                        <button class="pl-2 pr-4 py-2 rounded-xl border-2 border-sky-500 text-sky-500 font-bold text-left hover:bg-white/30">
                            Añadir nuevo almacen
                        </button>
                        <button class="pl-2 pr-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-left hover:bg-white/30 hover:border-sky-400 hover:shadow transition-all duration-300">
                            Añadir nuevo almacen
                        </button>
                    </div>
                </div>
                
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <WarehouseList />
                </div>
            </div>
        </div>
        </template>
    </AdminLayout>
</template>
