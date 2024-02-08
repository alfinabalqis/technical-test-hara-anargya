<template>
    <Transition>
        <div v-if="showDialog" class="user-detail-dialog">
            <div class="user-detail-content">
                <div class="flex justify-between">
                    <div>
                        <div class="flex gap-5">
                            <div>
                                <img :src="user.profile_picture" alt="Profile Picture" class="w-20 h-20 rounded-full mb-4">
                            </div>
                            <div class=" text-left">
                                <h2 class="text-2xl font-bold mb-2">{{ user.first_name }} {{ user.last_name }}</h2>
                                <p class="detail">
                                    <Icon icon="ic:baseline-email" />{{ user.email }}
                                </p>
                                <p class="detail">
                                    <Icon icon="ic:baseline-phone" />{{ user.phone }}
                                </p>
                            </div>
                        </div>
                        <div class=" text-left">
                            <h1 class="font-bold py-2">Details</h1>
                            <p class="detail">
                                <Icon icon="ph:gender-neuter" />{{ user.gender }}
                            </p>
                            <p class="detail">
                                <Icon icon="uis:bag" />{{ user.job }}
                            </p>
                            <p class="detail">
                                <Icon icon="solar:home-bold" />{{ `${user.street}, ${user.city}, ${user.state},
                                                                ${user.country}, ${user.zipcode}` }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <button @click="closeDialog" class=" text-red-600 font-semibold">X</button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    props: {
        showDialog: Boolean,
        user: Object,
    },
    methods: {
        closeDialog() {
            this.$emit('close-dialog');
        },
    },
};
</script>

<style scoped>
.user-detail-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.user-detail-content {
    background: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
}

.detail {
    font-size: 1rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0.25rem auto;
    gap: 0.5rem;
}</style>