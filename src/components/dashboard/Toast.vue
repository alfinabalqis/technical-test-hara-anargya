<template>
    <div v-if="isVisible" class="toast">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        isVisible: Boolean,
        message: String,
    },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px; 
  right: 20px;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  display: inline-block;
}
</style>