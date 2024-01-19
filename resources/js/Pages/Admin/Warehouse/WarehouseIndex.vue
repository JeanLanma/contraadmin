<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import WarehouseList from './Partials/WarehouseList.vue';
import NavButton from '@/Shared/Components/NavButton.vue';
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
                    <div class="px-4 md:px-0 flex flex-col md:flex-row gap-4">
                            <NavButton title="Almacen" route="warehouse.index" :active="true" />
                            <NavButton title="Mostrar" route="warehouse.index"/>
                            <NavButton title="Borrar" route="warehouse.index"/>
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
