<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import WarehouseList from './Partials/WarehouseList.vue';
import NavButton from '@/Shared/Components/NavButton.vue';
import { useForm } from '@inertiajs/vue3'
import { useToast, POSITION } from "vue-toastification";

const toast = useToast();

const CreateWarehouseForm = useForm({
            name: '',
            location: '',
            user_id: null,
})

const submit = () => {
    CreateWarehouseForm.post(route('admin.warehouse.store'),{
        onSuccess: (response) => {
            console.log({response});
            toast.success('Almacen creado con exito!',{
                position: POSITION.TOP_CENTER
            })
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
        },
        onFinish: () => {
            CreateWarehouseForm.reset()
        }
    })
}
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
                            <NavButton 
                                title="Añadir almacen"
                                route="warehouse.index"
                                :active="true"/>
                            <NavButton 
                                title="Mostrar" route="warehouse.index"/>
                            <NavButton
                                title="Editar"
                                route="warehouse.index"/>
                    </div>
                </div>
                
                <!-- Create form -->
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2">
                    <div class="px-4 md:py-4 py-2">

                        <div class="my-4">
                            <h2 class="text-xl font-bold text-gray-700 md:text-center">Nuevo almacen</h2>
                        </div>

                        <form @submit.prevent="submit" class="md:flex md:flex-col md:items-center">

                            <div class="w-full sm:w-1/2 mb-4">
                                <div class="mb-5 md:flex md:items-end">
                                    <label
                                        for="name"
                                        class="mb-3 block text-base font-medium text-[#07074D] md:mr-4"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        v-model="CreateWarehouseForm.name"
                                        placeholder="Nombre del almacen.."
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />

                                </div>
                            </div>

                            <div class="w-full sm:w-1/2 mb-4">
                                <div class="mb-5 md:flex md:items-end">
                                    <label
                                        for="location"
                                        class="mb-3 block text-base font-medium text-[#07074D] md:mr-4"
                                    >
                                        Dirección
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        v-model="CreateWarehouseForm.location"
                                        placeholder="Calle 123, Ciudad, Estado..."
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                            <div class="md:w-1/3">
                                <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"
                                >
                                    Agregar
                                </button>
                            </div>

                        </form>
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
