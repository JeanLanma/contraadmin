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

const detectCLickOutside = (event) => {
    if (event.target.classList.contains('navigation-dropdown')) {
        event.target.classList.add('hidden');
    }
};
const openAside = () => {
    document.querySelector('.navigation-dropdown').classList.remove('hidden');
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
                <div class="w-full flex justify-between px-4 py-2">
                    <div @click="openAside()" class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <AdminLogo class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md" />
                        <h2 class="hidden md:block text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200">Contra Admin</h2>
                        <Chevron class="block opacity-50 h-6 w-auto group-hover:opacity-75 transition-opacity duration-200" />
                    </div>
                    <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <img class="h-8" src="/assets/contradminlogo.png" alt="Admin Logo">
                    </div>
                    <!-- <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                        <Profile class="block opacity-50 h-10 md:h-8 w-auto group-hover:opacity-75 transition-opacity duration-200" />
                        <h2 class="hidden md:block text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200">{{ FormatUserName($page.props.auth.user.name) }}</h2>
                    </div> -->
                    <div>
                        <Dropdown align="right" width="48">

                            <template #trigger>
                                <div class="w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200">
                                    <Profile class="block opacity-50 h-10 md:h-8 w-auto group-hover:opacity-75 transition-opacity duration-200" />
                                    <h2 class="hidden md:block text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200">{{ FormatUserName($page.props.auth.user.name) }}</h2>
                                </div>
                            </template>
                            
                            <template #content>

                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <DropdownLink as="button">
                                        Cerrar sesión
                                    </DropdownLink>
                                </form>
                            </template>
                        </Dropdown>
                    </div>
                </div>
            </header>

            <div class="flex">
                
                <aside class="bg-white hidden md:block md:w-60 min-h-screen">
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
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z" stroke="black"/>
                                                <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="black" stroke-linecap="round"/>
                                                <path d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15" stroke="black" stroke-linecap="round"/>
                                            </svg>
                                            <span class="ml-4 font-bold">Catologo</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a :href="route('admin.product.index')" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Productos</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Categorias</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Etiquetas</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#6B7280" stroke-width="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                            <span class="ml-4 font-bold">Usuarios</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Usuarios</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Roles y Permisos</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <AdminLogo class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md" />
                                            <span class="ml-4 font-bold">Sucursales</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a :href="route('admin.store.index')" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Tiendas</span>
                                        </div>
                                    </a>
                                    <a :href="route('admin.warehouse.index')" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Almacenes</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Inventario</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>
                        
                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex">
                                            <svg class="stroke-gray-500" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="5" y="4" width="14" height="17" rx="2" stroke="#6B7280" stroke-width="2"></rect> <path d="M9 9H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round"></path> <path d="M9 13H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round"></path> <path d="M9 17H13" stroke="#6B7280" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                                            <span class="ml-4 font-bold">Pedidos</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Ordenes</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Envios</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Facturación</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>
                        
                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex">
                                            <svg fill="#6B7280" width="25px" height="25px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#6B7280" stroke-width="3.84"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.512"></g><g id="SVGRepo_iconCarrier"> <path d="M111.13672,158.97681a56.00028,56.00028,0,1,0-46.27246-.00025,92.23328,92.23328,0,0,0-52.13867,36.11719,3.99985,3.99985,0,1,0,6.541,4.60547A84.01746,84.01746,0,0,1,156.73,199.69434a4.00014,4.00014,0,0,0,6.541-4.60645A92.23237,92.23237,0,0,0,111.13672,158.97681ZM40.00049,108a48,48,0,1,1,48,48A48.05436,48.05436,0,0,1,40.00049,108Zm203.82519,92.66162a3.99923,3.99923,0,0,1-5.57373-.96728A84.17363,84.17363,0,0,0,169.522,164a4,4,0,0,1,0-8,48,48,0,1,0-13.02636-94.2124,4,4,0,1,1-2.166-7.70117A55.99661,55.99661,0,0,1,192.6582,158.97681,92.23507,92.23507,0,0,1,244.793,195.08789,4.0002,4.0002,0,0,1,243.82568,200.66162Z"></path> </g></svg>
                                            <span class="ml-4 font-bold">Clientes</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Clientes</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Facturación</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                    </nav>
                </aside>
                <!-- Aside Mobile -->
                <aside 
                    @click="detectCLickOutside($event)" 
                    class="hidden bg-black/40 backdrop-blur fixed w-full min-h-screen navigation-dropdown"
                    @wheel.prevent
                    @touchmove.prevent
                    @scroll.prevent
                >
                    <nav class="absolute z-40 py-4 bg-white w-60 min-h-screen">
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
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z" stroke="black"/>
                                                <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="black" stroke-linecap="round"/>
                                                <path d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15" stroke="black" stroke-linecap="round"/>
                                            </svg>
                                            <span class="ml-4 font-bold">Catologo</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a :href="route('admin.product.index')" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Productos</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Categorias</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Etiquetas</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#6B7280" stroke-width="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                            <span class="ml-4 font-bold">Usuarios</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Usuarios</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Roles y Permisos</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex"> 
                                            <AdminLogo class="block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md" />
                                            <span class="ml-4 font-bold">Sucursales</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a :href="route('admin.store.index')" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Tiendas</span>
                                        </div>
                                    </a>
                                    <a :href="route('admin.warehouse.index')" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Almacenes</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Inventario</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex">
                                            <svg class="stroke-gray-500" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="5" y="4" width="14" height="17" rx="2" stroke="#6B7280" stroke-width="2"></rect> <path d="M9 9H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round"></path> <path d="M9 13H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round"></path> <path d="M9 17H13" stroke="#6B7280" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                                            <span class="ml-4 font-bold">Pedidos</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Ordenes</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Envios</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Facturación</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>
                        
                        <div>
                            <NavLinkAside :isOpen="route().current('products')">
                                <template #NavLink>
                                    <a href="#">
                                        <span class="flex">
                                            <svg fill="#6B7280" width="25px" height="25px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#6B7280" stroke-width="3.84"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.512"></g><g id="SVGRepo_iconCarrier"> <path d="M111.13672,158.97681a56.00028,56.00028,0,1,0-46.27246-.00025,92.23328,92.23328,0,0,0-52.13867,36.11719,3.99985,3.99985,0,1,0,6.541,4.60547A84.01746,84.01746,0,0,1,156.73,199.69434a4.00014,4.00014,0,0,0,6.541-4.60645A92.23237,92.23237,0,0,0,111.13672,158.97681ZM40.00049,108a48,48,0,1,1,48,48A48.05436,48.05436,0,0,1,40.00049,108Zm203.82519,92.66162a3.99923,3.99923,0,0,1-5.57373-.96728A84.17363,84.17363,0,0,0,169.522,164a4,4,0,0,1,0-8,48,48,0,1,0-13.02636-94.2124,4,4,0,1,1-2.166-7.70117A55.99661,55.99661,0,0,1,192.6582,158.97681,92.23507,92.23507,0,0,1,244.793,195.08789,4.0002,4.0002,0,0,1,243.82568,200.66162Z"></path> </g></svg>
                                            <span class="ml-4 font-bold">Clientes</span>
                                        </span>
                                    </a>
                                </template>
                                <template #NavLinkItems>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Clientes</span>
                                        </div>
                                    </a>
                                    <a href="#" class="block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100">
                                        <div>
                                            <span>Facturación</span>
                                        </div>
                                    </a>
                                </template>
                            </NavLinkAside>
                        </div>

                    </nav>
                </aside>
                
                <div class="grow">
                    <slot name="content" />
                </div>
            
            </div>
  
        </div>
    </div>
</template>
