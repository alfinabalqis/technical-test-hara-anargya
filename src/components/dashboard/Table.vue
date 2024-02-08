<template>
    <table class="min-w-full bg-white table-auto rounded-lg border border-gray-200">
        <thead>
            <tr class="border-table">
                <th class=" p-6 text-left text-lg font-bold" colspan="7">
                    User List
                </th>
            </tr>
            <tr class=" bg-gray-50 text-gray-500 border-table">
                <th class="title-table">ID</th>
                <th class="title-table">User</th>
                <th class="title-table">Date Of Birth</th>
                <th class="title-table">Email</th>
                <th class="title-table">Job</th>
                <th class="title-table">Country</th>
                <th class="title-table">Action</th>
                <!-- Add more columns as needed -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in posts" :key="index" class="border-table">
                <td class="table-content">{{ user.id }}</td>
                <td class="px-4 py-2">
                    <div class="flex items-center font-medium text-black text-semixs">
                        <img :src="user.profile_picture" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
                        {{ `${user.first_name} ${user.last_name}` }}
                    </div>
                </td>
                <td class="table-content font-light">{{ formatDate(user.date_of_birth) }}</td>
                <td class="table-content font-medium text-black">{{ user.email }}</td>
                <td class="table-content">{{ user.job }}</td>
                <td class="table-content text-black font-medium">{{ user.country }}</td>
                <td class="px-4 py-2">
                    <div class=" flex items-center gap-2">
                        <button @click="selectUser(user.id)" class="btn-table">Select</button>
                        <button @click="viewDetails(user)" class="btn-table">View Detail</button>
                    </div>
                </td>
                <!-- Add more columns as needed -->
            </tr>
        </tbody>
    </table>

    <DetailBox :showDialog="isDialogVisible" :user="selectedUser" @close-dialog="closeDialog" />
    <Toast :is-visible="toastVisible" :message="toastMessage"/>
</template>

<script>
import axios from 'axios';
import DetailBox from './DetailBox.vue';
import Toast from './Toast.vue'

export default {
    components: {
        DetailBox,
        Toast,
    },
    data() {
        return {
            posts: [],
            isDialogVisible: false,
            selectedUser: null,
            toastVisible: false,
            toastMessage: '',
        }
    },
    mounted() {
        axios.get('https://api.slingacademy.com/v1/sample-data/users')
            .then(response => this.posts = response.data.users)
            .catch(error => console.error('Error fetching data:', error));
    },
    methods: {
        formatDate(dateString) {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-GB', options);
        },
        selectUser(userId) {
            // Handle the "Select" action
            console.log(`User selected with ID: ${userId}`);
            // tampilkan toast
            this.showToast(`User ID ${userId} Selected`);
        },
        viewDetails(user) {
            this.selectedUser = user;
            this.isDialogVisible = true;
        },

        closeDialog() {
            this.isDialogVisible = false;
        },
        showToast(message) {
            this.toastMessage = message;
            this.toastVisible = true;

            // Sembunyikan toast setelah beberapa detik (misalnya, 3 detik)
            setTimeout(() => {
                this.hideToast();
            }, 1000);
        },
        hideToast() {
            this.toastVisible = false;
            this.toastMessage = '';
        },
    },
}
</script>

<style scoped>
.title-table {
    padding: .5rem 1rem;
    font-weight: 600;
    font-size: 11px;
    text-align: left;
}

.table-content {
    padding: .5rem 1rem;
    font-size: 11px;
}

.btn-table {
    padding: .5rem;
    font-size: 11px;
    font-weight: 600;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.25);  
}

.border-table {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}
</style>