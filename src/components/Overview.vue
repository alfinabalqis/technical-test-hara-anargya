<template>
  <div class="p-8 bg-gray-50 h-full">
    <!-- UI for Function 1 -->
    <div class="flex gap-10">
      <div>
        <ProvinceTable />
        <CitiesTable />
      </div>
      <div>
        <!--Task 1-->
        <div class="section-card h-auto">
          <div>
            <h2 class="text-center text-black font-semibold pb-3">Tampilkan Kota Berdasarkan ID Provinsi</h2>
          </div>
          <div class="flex gap-2 items-center">
            <label for="provinceId">ID Provinsi : </label>
            <input type="number" v-model="provinceId" class="border p-1 rounded-lg">
            <button @click="getCities" class="border border-gray-300 p-2 text-small">Search</button>
            <button @click="clearInput" class="p-2 bg-red-500 text-white text-small">Reset</button>
          </div>

          <div v-if="cities !== null">
            <h3 class="mt-3 my-2 text-black font-semibold">List Kota :</h3>
            <ol v-if="cities.length > 0" style="list-style: auto;" class=" ml-4">
              <li v-for="city in cities" :key="city.id">{{ city.name }}</li>
            </ol>
            <p v-else>No cities found.</p>
          </div>

        </div>

        <!--Task 2-->
        <div class="section-card h-auto mt-5">
          <div>
            <h2 class="text-center text-black font-semibold pb-3">Tampilkan Provinsi Berdasarkan ID Kota</h2>
          </div>
          <div class="flex gap-2 items-center">
            <label for="cityId">ID Kota : </label>
            <input type="number" v-model="cityId" class="border p-1 rounded-lg">
            <button @click="getProvinceName" class="border border-gray-300 p-2 text-small">Search</button>
            <button @click="clearProvince" class="p-2 bg-red-500 text-white text-small">Reset</button>
          </div>

          <div v-if="provinceName" class="mt-3">
            <h3 class=" text-sm text-black font-bold">Nama Provinsi : </h3>
            <p class="text-black">{{ provinceName }}</p>
          </div>
        </div>

        <div class="section-card h-auto mt-5">
          <div>
            <h2 class="text-center text-black font-semibold pb-3">Urutkan Provinsi</h2>
          </div>
          <div class="flex gap-2 items-center">
            <label for="sortOrder">Urutkan Provinsi : </label>
            <select v-model="sortOrder" class="border p-1 rounded-lg text-small">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <button @click="sortProvinces" class="border border-gray-300 p-2 text-small">Urutkan</button>
            <button @click="clearSort" class="p-2 bg-red-500 text-white text-small">Reset</button>
          </div>

          <div v-if="sortedProvinces.length > 0">
            <h3 class="mt-3 my-2 text-black font-semibold">
              Urutan Provinsi Berdasarkan ID ({{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}) :
            </h3>
            <ul style="list-style: auto;" class=" ml-4">
              <li v-for="province in sortedProvinces" :key="province.id">{{ province.name }}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { provinces } from '../province/province.js';
import { cities } from '../province/city.js';
import ProvinceTable from './overview/ProvinceTable.vue';
import CitiesTable from './overview/CitiesTable.vue';

export default {
  name: 'Overview',
  components: {
    ProvinceTable,
    CitiesTable
  },
  data() {
    return {
      provinceId: null,
      cities: [],
      cityId: null,
      provinceName: null,
      sortOrder: 'asc',
      sortedProvinces: [],
    };
  },
  methods: {
    getCities() {
      this.cities = cities.filter(city => city.provinceId === this.provinceId);
    },
    getProvinceName() {
      const city = cities.find(city => city.id === this.cityId);
      if (city) {
        const province = provinces.find(province => province.id === city.provinceId);
        this.provinceName = province ? province.name : 'Provinsi Tidak Ada di Dalam List';
      } else {
        this.provinceName = 'Provinsi Tidak Ada di Dalam List';
      }
    },
    sortProvinces() {
      // Implement Function 3
      const orderMultiplier = this.sortOrder === 'asc' ? 1 : -1;
      this.sortedProvinces = [...provinces].sort((a, b) =>
        orderMultiplier * (a.id - b.id || a.name.localeCompare(b.name))
      );
    },
    clearInput() {
      this.provinceId = '';
      this.cities = [];
    },
    clearProvince() {
      this.provinceName = '';
      this.cityId = '';
    },
    clearSort() {
      this.sortedProvinces = [];
    }
  },
};
</script>
  