<script setup>

const props = defineProps({
    links: {
        type: Object,
        required: true,
    }
});

</script>

<template>
<nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
        <li v-for="link in props.links">
            <a v-if="link.active" :href="link.url" aria-current="page"
                class="bg-blue-50 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3">
                <span v-html="link.label">
                </span>
            </a>
            <a :href="link.url"
                v-else
                class="bg-white rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 leading-tight py-2 px-3">
                <span v-html="link.label">
                </span>
            </a>
        </li>
    </ul>
</nav>
</template>