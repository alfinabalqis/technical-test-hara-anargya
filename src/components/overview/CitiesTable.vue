<template>
  <div class="section-card mt-4">
    <!-- Tabel Kota -->
    <h2 class="text-xl font-semibold mb-4">List of Cities with Province</h2>
    <table class="min-w-full bg-white border border-gray-300 table-auto">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">City Name</th>
          <th class="border border-gray-300 px-4 py-2">Province Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(city, index) in citiesWithProvince" :key="index">
          <td class="border border-gray-300 px-4 py-2">{{ city.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ city.name }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ city.provinceName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import { provinces } from '../../province/province.js';
import { cities } from '../../province/city.js';

export default {
  data() {
    return {
      cities: cities,
      provinces: provinces,
    };
  },
  computed: {
    citiesWithProvince() {
      // Gabungkan data kota dengan data provinsi berdasarkan provinceId
      return this.cities.map(city => {
        const province = this.provinces.find(p => p.id === city.provinceId);
        return {
          ...city,
          provinceName: province ? province.name : 'Unknown Province',
        };
      });
    },
  },
};
</script>
  