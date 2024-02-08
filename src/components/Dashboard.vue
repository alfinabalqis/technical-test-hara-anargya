<!-- Dashboard.vue -->
<template>
    <div class="p-8 bg-gray-50 h-full">
        <!--Card-->
        <div class="flex gap-3">
            <Card status="Pending" amount="2.480,30" image="/images/ic-arrow-up.png" percent="2,15%"
                textClass="text-green-500" />
            <Card status="Paid" amount="84.310" image="/images/ic-arrow-bottom.png" percent="1,10%"
                textClass="text-red-500" />
            <Card status="Rejected" amount="12.155" image="/images/ic-arrow-up.png" percent="2,15%"
                textClass="text-green-500" />
        </div>

        <!--Table-->
        <div class="pt-8">
            <TableUsers />
        </div>
    </div>
</template>
  
<script>
import Card from './dashboard/Card.vue';
import TableUsers from './dashboard/table.vue';
export default {
    name: 'Dashboard',
    components: {
        Card,
        TableUsers
    },
    data() {
        return {
            isDialogVisible: false,
            selectedUser: null,
        };
    },
    methods: {
        viewDetails(user) {
            this.selectedUser = user;
            this.isDialogVisible = true;
        },

        closeDialog() {
            this.isDialogVisible = false;
        }
    }
};
</script>
  