<script setup>
import { computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        default: 'Button'
    },
    route: String,
    icon: {
        type: String,
        default: ''
    },
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


const isIcon = (icon, iconName) => {

    if (icon === '') return false;

    const icons = {
        '+' : 'plus',
        '-' : 'minus',
        'edit' : 'pencil',
    };

    return icons[icon] === iconName;
}
</script>

<template>
<button :class="isActive">
    <span class="flex items-center">
        <span v-if="isIcon(props.icon, 'plus')" class="mr-1">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#374151" stroke-width="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#374151" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </span>
        <span v-if="isIcon(props.icon, 'minus')" class="mr-1">
            <svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#374151"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 2c-7.7319865 0-14 6.2680135-14 14s6.2680135 14 14 14 14-6.2680135 14-14-6.2680135-14-14-14zm5 13c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-10c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z" fill="#374151" fill-rule="nonzero"></path> </g> </g></svg>
        </span>
        {{ props.title }}
    </span>
</button>
</template>