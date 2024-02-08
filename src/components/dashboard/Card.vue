<template>
    <div class="bg-white shadow border rounded-md w-1/3">
        <div class="flex justify-between p-6">
            <div>
                <p class="font-semibold text-gray-500 text-xs">{{ status }}</p>
                <h2 class=" text-xl font-semibold text-black pt-2">{{ amount }}</h2>
            </div>
            <div>
                <img src="/images/ic-card.png" alt="icon">
            </div>
        </div>
        <div>
            <div class="bg-gray-200 flex gap-3 py-3 px-6 justify-between items-center">
                <div class="flex gap-2 items-center">
                    <img :src="image" alt="icon">
                    <p class="text-xxs font-medium" :class="textClass">{{ percent }}</p>
                    <p class="text-xxs font-medium">Last Month</p>
                </div>
                <a href="#" class=" font-semibold text-gray-900 text-xxs">View More</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const { props } = defineProps(['status', 'amount', 'image', 'percent', 'textClass']);
</script>