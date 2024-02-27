<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import NavButton from '@/Shared/Components/NavButton.vue';
import { router, useForm } from '@inertiajs/vue3'
import { useToast, POSITION } from "vue-toastification";
import { ref } from 'vue';
import DialogModal from '@/Components/DialogModal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { CRUDOperation } from '@/Utils/Utils';
import ProductsTable from './Partials/ProductsTable.vue';

const props = defineProps({
    product: {
        type: Object,
        required: false
    },
    products: {
        type: Object,
    }
})

const currentModel = useForm({
    name: '',
    location: '',
    price: '',
    price_formatted: '',
    quantity: '',
    sku: '',
    user_id: null,
})

const toast = useToast();

const activeOption = ref('read');
const setActiveOption = (option) => {
    activeOption.value = option;
}
const isActive = (option) => {
    return activeOption.value === option;
}

// Update model
const setCurrentModel = (model) => {
    currentModel.name = model.name;
    currentModel.location = model.location;
    currentModel.id = model.id;
}

const showModal = ref(false);
const setModal = (warehouse) => {
    setCurrentModel(warehouse);
    showModal.value = true;
}

const updateCurrentModel = () => {
    currentModel.put(route('admin.store.update', {id: currentModel.id}), {
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
const deleteModel = (ModelID) => {
    router.delete(route('admin.store.destroy', {id: ModelID}), {
        onSuccess: (response) => {
            toast.success('Eliminación realizada con exito!',{
                position: POSITION.TOP_CENTER
            })
            showModal.value = false;
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
        },
        onFinish: () => {
            CreateStoresForm.reset()
            showModal.value = false;
        }
    })
}

// Format input price as currency format: $ 1,000.00
const FormatPrice = (price) => {

    // Only accept numbers
    if(isNaN(price) || price === '') {
        return '';
    }

    currentModel.price = price;
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);

    currentModel.price_formatted = formattedPrice;
}

const submitCreateProduct = () => {

    return console.log(currentModel);
    currentModel.post(route('admin.store.store'), {
        onSuccess: (response) => {
            toast.success('Almacen creado con exito!',{
                position: POSITION.TOP_CENTER
            })
            CreateStoresForm.reset()
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
        },
        onFinish: () => {
            CreateStoresForm.reset()
        }
    })
}
console.log(props.products);
</script>

<template>
    <AdminLayout title="Añadir Producto">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ currentModel ? currentModel.name : 'Productos ¿?' }}
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
                    <button @click.native="deleteModel(currentModel.id)" class="mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
                            v-model="currentModel.name"
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
                            v-model="currentModel.location"
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

                <PrimaryButton :disabled="currentModel.processing" @click.native="updateCurrentModel()" class="ml-2">
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
                                @click="setActiveOption(CRUDOperation.Create)"
                                :active="isActive(CRUDOperation.Create)"/>
                            <NavButton 
                                title="Mostrar" 
                                route="warehouse.index"
                                @click="setActiveOption(CRUDOperation.Read)"
                                :active="isActive(CRUDOperation.Read)"/>
                    </div>
                </div>

                
                <!-- List warehouses -->
                <transition name="slide-up" mode="out-in">

                <div v-if="activeOption === 'read'" class=" bg-white md:block mx-auto max-w-xs md:max-w-none overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2">
                    <div>
                        <div class="bg-white rounded my-6 overflow-auto">

                            <div>
                                <h2 class="text-2xl font-bold py-4 pl-6 text-gray-700">Añadir un nuevo producto</h2>
                            </div>

                            <div class="w-full flex-col flex md:flex-row">
                                <div class="w-full xl:w-1/2 px-8">
                                    <form @submit.prevent="submitCreateProduct">

                                        <div class="mt-4">
                                            <div>
                                                <label for="name" class="text-sm font-semibold text-gray-500">Nombre del producto</label>
                                            </div>
                                            <div>
                                                <input v-model="currentModel.name" name="name" class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors font-bold text-gray-600" type="text" placeholder="Nombre del producto...">
                                            </div>
                                        </div>
                                        <div class="mt-4 flex gap-4 justify-between">
                                            <div class="grow">
                                                <div>
                                                    <label for="price" class="text-sm font-semibold text-gray-500">$ Precio</label>
                                                </div>
                                                <div>
                                                    <input @blur="FormatPrice(currentModel.price_formatted)" v-model="currentModel.price_formatted" name="price" class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" placeholder="$...">
                                                </div>
                                            </div>
                                            <div class="grow">
                                                <div>
                                                    <label for="quantity" class="text-sm font-semibold text-gray-500">Cantidad</label>
                                                </div>
                                                <div>
                                                    <input v-model="currentModel.quantity" name="quantity" class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" placeholder="Cantidad dispobible">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <div>
                                                <label for="sku" class="text-sm font-semibold text-gray-500">SKU</label>
                                            </div>
                                            <div>
                                                <input v-model="currentModel.sku" name="sku" class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" placeholder="SKU...">
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <div>
                                                <button class="w-full my-4 px-3 py-3 bg-indigo-500 text-white rounded-md font-semibold hover:bg-indigo-600 duration-150 hover:shadow-md hover:shadow-indigo-900">Guardar</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                                <div class="w-full xl:w-1/2 px-8 pt-9">
                                    <div class="flex w-full items-center justify-center bg-grey-lighter">
                                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span class="mt-2 text-base leading-normal">Seleccionar imagen</span>
                                        <input type='file' class="hidden"/>
                                    </label>
                                </div>
                                </div>
                            </div>
                            
                            <div>

                            </div>

                            
                        </div>
                    </div>
               </div>
                </transition>
                <!-- Mobile List -->
                <div v-if="activeOption === 'read'" v-for="element in props.products.data" class="md:hidden max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    <div class="md:flex">
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">&nbsp;</div>
                            <p class="block mt-1 text-lg leading-tight font-medium text-black">{{element.name}}</p>
                            <p class="mt-2 text-gray-500">{{ element.location }}</p>
                            <button @click.native="setModal(element)" class="mt-5 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Editar
                            </button>
                            <button @click.native="deleteWarehouse(element.id)" class="mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Mobile List -->
            </div>
        </div>
        </template>
    </AdminLayout>
</template>