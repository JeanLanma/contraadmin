<script setup>
import { computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        default: 'Button'
    },
    route: String,
    active: {
        type: Boolean,
        default: false
    },
    children: {
        type: Array,
        default: () => []
    }
})

const isActive = computed(() => {
    return props.active ? 'NavButton__active' : 'NavButton' ;
    // return route().current(route) === route().current(route)
})

</script>

<template>
<button :class="isActive">
    <span>
        {{ props.title }}
    </span>
</button>
</template>