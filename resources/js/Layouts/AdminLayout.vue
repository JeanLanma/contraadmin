<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import AdminLogo from '@/Components/AdminLogo.vue';
import Chevron from '@/Components/Chevron.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <!-- Page Content -->
            <header class="w-full bg-white h-16 shadow-sm">
                <div class="w-full px-4 py-2">
                    <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <AdminLogo class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md" />
                        <h2 class="text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200">Contra Admin</h2>
                        <Chevron class="block opacity-50 h-6 w-auto group-hover:opacity-75 transition-opacity duration-200" />
                    </div>
                </div>
            </header>
            <div>
                
                <aside class="bg-white w-60 min-h-screen">
                    <nav>
                        <a class="block text-gray-500 py-2.5 px-4 mx-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
                            <span class="flex">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" stroke="#000000" stroke-width="1.5"></path> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                <span class="ml-4 font-bold">Inicio</span>
                            </span>
                        </a>
                    </nav>
                </aside>
                
                <div>
                    
                </div>
            
            </div>
  
        </div>
    </div>
</template>
