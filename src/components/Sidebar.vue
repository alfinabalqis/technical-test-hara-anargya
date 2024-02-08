<template>
    <div class="relative flex min-h-screen">
        <!-- Sidebar -->
        <div class=" bg-whiite-600  w-40 pt-7 font-bold ">
            <h1 class="text-black font-extrabold text-3xl px-6">heylink.</h1>
            <nav class="mt-6 px-5">
                <ul>
                    <li :class="{ 'bg-blue-50': $route.path === '/dashboard' }" class="icon-menu">
                        <Icon icon="material-symbols:home" />
                        <router-link to="/dashboard" class="menu">
                            Dashboard
                        </router-link>
                    </li>
                    <li :class="{ 'bg-blue-50': $route.path === '/overview' }" class="icon-menu">
                        <Icon icon="material-symbols:overview" />
                        <router-link to="/overview" class="menu">
                            Overview
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <!--Main Content-->
        <div class="flex-1">
            <div class=" bg-white shadow py-4 px-10">
                <h1 class=" text-lg font-bold">Conversion</h1>
            </div>
            <!--Content-->
            <router-view />
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.icon-menu {
    @apply flex items-center gap-2 py-2 px-1 rounded-md  my-2
}

.menu {
    @apply text-gray-600 hover:text-gray-900 text-small font-medium
}
</style>