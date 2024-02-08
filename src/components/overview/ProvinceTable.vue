<template>
  <div class="section-card">
    <!-- Tabel Provinsi -->
    <h2 class="text-xl font-semibold mb-4">List of Provinces</h2>
    <table class="min-w-full bg-white border border-gray-300 table-auto">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">Province Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(province, index) in provinces" :key="index">
          <td class="border border-gray-300 px-4 py-2">{{ province.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ province.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import { provinces } from '../../province/province.js';

export default {
  data() {
    return {
      provinces: provinces,
    };
  },
};
</script>
  