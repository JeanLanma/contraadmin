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
import NavLinkAside from '@/Shared/Aside/NavLink.vue';
import Profile from '@/Components/Icons/profile.vue';
import { FormatUserName } from '@/Shared/Utils.js';

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
        <Head :title="title">
            <link rel="icon" type="image/ico" href="/favicon.ico" />
        </Head>

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <!-- Page Content -->
            <!-- Header / Top Menu -->
            <header class="w-full bg-white h-16 shadow-md border-b-2 border-b-cyan-300">
                <div class="w-full flex justify-center px-4 py-2">
                    <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <Profile class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200" />
                        <h2 class="text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200">{{ FormatUserName($page.props.auth.user.name) }}</h2>
                    </div>
                    <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <AdminLogo class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md" />
                        <h2 class="text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200">Contra Admin</h2>
                        <Chevron class="block opacity-50 h-6 w-auto group-hover:opacity-75 transition-opacity duration-200" />
                    </div>
                    <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <ApplicationMark class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md" />
                    </div>
                </div>
            </header>
            <div>
                
                <aside class="bg-white w-60 min-h-screen">
                    <nav class="py-4">
                        <div>
                            <NavLinkAside :isOpen="route().current('dashboard')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" stroke="#000000" stroke-width="1.5"></path> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                            <span class="ml-4 font-bold">Inicio</span>
                                        </span>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                        <div>
                            <NavLinkAside :isOpen="route().current('prodcuts')">
                                <template :isOpen="route().current('dashboard')" #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z" stroke="black"/>
                                                <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="black" stroke-linecap="round"/>
                                                <path d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15" stroke="black" stroke-linecap="round"/>
                                            </svg>
                                            <span class="ml-4 font-bold">Usuarios</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Productos</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Categorias</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Etiquetas</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                    </nav>
                </aside>
                
                <div>
                    
                </div>
            
            </div>
  
        </div>
    </div>
</template>
