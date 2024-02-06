<script setup>

import { useToast, POSITION } from "vue-toastification";
import { useForm } from '@inertiajs/vue3'

const toast = useToast();

const CreateModelForm = useForm({
            name: '',
            location: '',
            user_id: null,
})

const submit = () => {
    CreateModelForm.post(route('admin.store.store'),{
        onSuccess: (response) => {
            toast.success('Almacen creado con exito!',{
                position: POSITION.TOP_CENTER
            })
            CreateModelForm.reset()
        },
        onError: () => {
            toast.error('Algo salio mal, intentalo de nuevo')
        },
        onFinish: () => {
            CreateModelForm.reset()
        }
    })
}
</script>

<template>
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
                v-model="CreateModelForm.name"
                placeholder="Nombre de la tienda..."
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
                v-model="CreateModelForm.location"
                placeholder="Calle 123, Ciudad, Estado..."
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
    </div>

    <div class="md:w-1/3">
        <button
        :disabled="CreateModelForm.processing"
        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"
        >
            Agregar
        </button>
    </div>

</form>
</template>