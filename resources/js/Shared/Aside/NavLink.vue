<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})

const isAccoridionOpen = ref(props.isOpen);
const accordionHeight = ref('0px');
const toggleAccordion = () => {
    isAccoridionOpen.value = !isAccoridionOpen.value;
    accordionHeight.value = isAccoridionOpen.value ? 'auto' : '0px';
};
</script>

<template>
<div @click="toggleAccordion" :class="{'bg-gray-200 mr-0 rounded-b-none' : isAccoridionOpen} " class="block cursor-pointer text-gray-500 py-2.5 px-4 mx-2 rounded transition-all duration-300 hover:bg-gray-100">
    <slot name="NavLink" />
</div>
<div :style="{ height: accordionHeight, transition: 'all', transitionDuration: '300' }" class="bg-gray-200 ml-2 overflow-hidden transition-transform duration-300">
    <slot name="NavLinkItems" />
</div>

</template>