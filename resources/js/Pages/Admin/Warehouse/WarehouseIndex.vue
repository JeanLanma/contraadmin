<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import WarehouseList from './Partials/WarehouseList.vue';
</script>

<template>
    <AdminLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <template #content>
        <div class="w-full py-12 bg-pattern-1">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <WarehouseList />
                </div>
            </div>
        </div>
        </template>
    </AdminLayout>
</template>
