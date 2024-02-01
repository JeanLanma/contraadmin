<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import WarehouseList from './Partials/WarehouseList.vue';
import NavButton from '@/Shared/Components/NavButton.vue';
import { router, useForm } from '@inertiajs/vue3'
import { useToast, POSITION } from "vue-toastification";
import { ref } from 'vue';
import DialogModal from '@/Components/DialogModal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import WarehouseTable from './Partials/WarehouseTable.vue';
import WarehousePagination from '@/Shared/Components/WarehousePagination.vue';
import CreateWarehouseForm from './Partials/CreateWarehouseForm.vue';

const props = defineProps({
    warehouses: {
        type: Object,
        required: true
    }
})

const toast = useToast();

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

// Update warehouse
const setCurrentWarehouse = (warehouse) => {
    currentWarehouse.name = warehouse.name;
    currentWarehouse.location = warehouse.location;
    currentWarehouse.id = warehouse.id;
}

const showModal = ref(false);
const setModal = (warehouse) => {
    setCurrentWarehouse(warehouse);
    showModal.value = true;
}

const currentWarehouse = useForm({
    name: '',
    location: '',
    user_id: null,
})
const updateCurrentWarehouse = () => {
    currentWarehouse.put(route('admin.warehouse.update', {id: currentWarehouse.id}), {
        onSuccess: (response) => {
            toast.success('Almacen actualizado con exito!',{
                position: POSITION.TOP_CENTER
            })
            showModal.value = false;
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
            showModal.value = false;
        },
        onFinish: () => {
            showModal.value = false;
        }
    })
}

// Delete warehouse
const deleteWarehouse = (WarehouseID) => {
    router.delete(route('admin.warehouse.destroy', {id: WarehouseID}), {
        onSuccess: (response) => {
            toast.success('Almacen eliminado con exito!',{
                position: POSITION.TOP_CENTER
            })
            showModal.value = false;
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
        },
        onFinish: () => {
            CreateWarehouseForm.reset()
            showModal.value = false;
        }
    })
}
</script>

<template>
    <AdminLayout title="Almacen">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ currentWarehouse ? currentWarehouse.name : 'Almacen' }}
            </h2>
        </template>

        <template #content>

        <!--  -->
        <DialogModal :show="showModal" @close="showModal = false">
            <template #title>
                <div class="flex justify-between items-center">
                    <span>
                        Editar almacen
                    </span>
                    <button @click.native="deleteWarehouse(currentWarehouse.id)" class="mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Eliminar
                    </button>
                </div>
            </template>

            <template #content>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            v-model="currentWarehouse.name"
                            placeholder="Nombre del almacen.."
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div class="flex flex-col gap-4">
                        <label for="location" class="block text-sm font-medium text-gray-700">
                            Dirección
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            v-model="currentWarehouse.location"
                            placeholder="Calle 123, Ciudad, Estado..."
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
            </template>

            <template #footer>
                <SecondaryButton @click.native="showModal = false">
                    Cancelar
                </SecondaryButton>

                <PrimaryButton :disabled="currentWarehouse.processing" @click.native="updateCurrentWarehouse()" class="ml-2">
                    Guardar
                </PrimaryButton>
            </template>
        </DialogModal>
        <!--  -->
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

                <div v-if="activeOption === 'read'" class="hidden md:block mx-auto max-w-xs md:max-w-none overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2">
                    <div>
                        <div class="bg-white shadow-md rounded my-6 overflow-auto">

                            <div>
                                <h2 class="text-2xl font-bold py-4 pl-6 text-gray-700">Lista de almacenes</h2>
                            </div>

                            <WarehouseTable :warehouses="props.warehouses" :setModal="setModal" />
                        </div>
                    </div>
                    
                    <!-- pagination -->
                    <div class="mb-2 flex justify-center">
                        <WarehousePagination :links="props.warehouses.links" />
                    </div>
               </div>

                <div v-else-if="activeOption === 'create'" class="bg-white overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2">
                    <div class="px-4 md:py-4 py-2">

                        <div class="my-4">
                            <h2 class="text-2xl font-bold text-gray-700 md:text-center">Nuevo almacen.</h2>
                        </div>

                        <CreateWarehouseForm />
                    </div>
                </div>
                </transition>
                <!-- Mobile List -->
                <div v-if="activeOption === 'read'" v-for="warehouse in props.warehouses.data" class="md:hidden max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    <div class="md:flex">
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">&nbsp;</div>
                            <p class="block mt-1 text-lg leading-tight font-medium text-black">{{warehouse.name}}</p>
                            <p class="mt-2 text-gray-500">{{ warehouse.location }}</p>
                            <button @click.native="setModal(warehouse)" class="mt-5 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Editar
                            </button>
                            <button @click.native="deleteWarehouse(warehouse.id)" class="mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Mobile List -->

                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <WarehouseList />
                </div>
            </div>
        </div>
        </template>
    </AdminLayout>
</template>
