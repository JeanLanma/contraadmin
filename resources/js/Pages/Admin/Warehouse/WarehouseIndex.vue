<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import WarehouseList from './Partials/WarehouseList.vue';
import NavButton from '@/Shared/Components/NavButton.vue';
import { useForm } from '@inertiajs/vue3'
import { useToast, POSITION } from "vue-toastification";
import { ref } from 'vue';

const props = defineProps({
    warehouses: {
        type: Object,
        required: true
    }
})


const options = {
    READ: 'read',
    CREATE: 'create',
    EDIT: 'edit',
    DELETE: 'delete'
}
const activeOption = ref('read');
const setActiveOption = (option) => {
    activeOption.value = option;
}
const isActive = (option) => {
    return activeOption.value === option;
}

const toast = useToast();

const CreateWarehouseForm = useForm({
            name: '',
            location: '',
            user_id: null,
})

const submit = () => {
    CreateWarehouseForm.post(route('admin.warehouse.store'),{
        onSuccess: (response) => {
            toast.success('Almacen creado con exito!',{
                position: POSITION.TOP_CENTER
            })
            CreateWarehouseForm.reset()
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
        },
        onFinish: () => {
            CreateWarehouseForm.reset()
        }
    })
}

console.log(activeOption.value);
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
                                title="Añadir"
                                route="warehouse.index"
                                @click="setActiveOption(options.CREATE)"
                                :active="isActive(options.CREATE)"/>
                            <NavButton 
                                title="Mostrar" route="warehouse.index"
                                @click="setActiveOption(options.READ)"
                                :active="isActive(options.READ)"/>
                                
                            <NavButton
                                title="Editar"
                                route="warehouse.index"/>
                    </div>
                </div>

                
                <!-- List warehouses -->
                <transition name="slide-up" mode="out-in">

                <div v-if="activeOption === 'read'" class="bg-white overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2">
                    <div class="mx-auto">
                        <div class="bg-white shadow-md rounded my-6">

                            <div>
                                <h2 class="text-2xl font-bold py-4 px-6 text-gray-700">Lista de almacenes</h2>
                            </div>

                            <table class="text-left w-full border-collapse">
                            <thead>
                                <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nombre</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Locación</th>
                                <!-- <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="warehouse in props.warehouses.data" class="hover:bg-grey-lighter">
                                    <td class="py-4 px-6 border-b border-grey-light">{{ warehouse.name }}</td>
                                    <td class="py-4 px-6 border-b border-grey-light">{{ warehouse.location }}</td>
                                    <!-- <td class="py-4 px-6 border-b border-grey-light">
                                        <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
                                        <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
                                    </td> -->
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- pagination -->
                    <div class="mb-2 flex justify-center">
                        <nav aria-label="Page navigation example">
                            <ul class="inline-flex -space-x-px">
                                <li v-for="link in props.warehouses.links">
                                    <a v-if="link.active" href="#" aria-current="page"
					                    class="bg-blue-50 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3">
                                        <span v-html="link.label">
                                        </span>
                                    </a>
                                    <a href="#"
                                        v-else
                                        class="bg-white rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 leading-tight py-2 px-3">
                                        <span v-html="link.label">
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
               </div>    

                <div v-else-if="activeOption === 'create'" class="bg-white overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2">
                    <div class="px-4 md:py-4 py-2">

                        <div class="my-4">
                            <h2 class="text-2xl font-bold text-gray-700 md:text-center">Nuevo almacen.</h2>
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
                </transition>

                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <WarehouseList />
                </div>
            </div>
        </div>
        </template>
    </AdminLayout>
</template>
