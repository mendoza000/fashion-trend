<script setup lang="ts">
import { useConfigSite } from "@/stores/configSite";
import { useProductsStore } from "@/stores/products";
import type { Product } from "@/stores/products";
import ProductCard from "./ProductCard.vue";

const productsStore = useProductsStore();
const { configSite } = useConfigSite();

const setShow = (e: Product) => {
  switch (configSite.categorySelect) {
    case "all":
      return true;

    case "man":
      if (e.category == "man" || e.category == "unisex") {
        return true;
      }
      return false;

    case "woman":
      if (e.category == "woman" || e.category == "unisex") {
        return true;
      }
      return false;

    case "shoe":
      if (e.category == "shoe") {
        return true;
      }
      return false;
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-5 pb-20 lg:gap-10 lg:grid-cols-4 lg:grid px-36"
  >
    <ProductCard
      v-for="e in productsStore.productList"
      :key="e._id"
      :title="e.title"
      :brand="e.brand"
      :price="e.price"
      :image="e.image"
      :id="e._id"
      v-show="setShow(e)"
    />
  </div>
</template>
