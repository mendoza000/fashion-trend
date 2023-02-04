<script setup lang="ts">
import { onMounted } from "vue";
import { client } from "./client";
import { useProductsStore } from "./stores/products";

const productsStore = useProductsStore();

const getProducts = async () => {
  const data = await client.fetch('*[_type == "products"]');
  // console.log(data);
  productsStore.addProducts(data);
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <router-view></router-view>
</template>
