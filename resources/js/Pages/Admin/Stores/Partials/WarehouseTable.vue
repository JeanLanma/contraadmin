<script setup>

const props = defineProps({
    warehouses: {
        type: Object,
        required: true,
    },
    setModal: {
        type: Function,
        required: true,
    },
});

</script>
<template>
<table class="text-left w-full">
    <thead>
        <tr>
        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nombre</th>
        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Locación</th>
        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="warehouse in props.warehouses.data" class="hover:bg-gray-100">
            <td class="py-4 px-6 border-b border-grey-light">{{ warehouse.name }}</td>
            <td class="py-4 px-6 border-b border-grey-light">{{ warehouse.location }}</td>
            <td class="py-4 px-6 border-b border-grey-light flex">
                <button @click.native="setModal(warehouse)" class="inline text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">editar</button>
                <button @click.native="setModal(warehouse)" class="inline text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">ver</button>
            </td>
        </tr>
    </tbody>
</table>
</template>