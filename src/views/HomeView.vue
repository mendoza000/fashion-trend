<script setup lang="ts">
import CategoriesComponent from "@/components/home/categories/CategoriesComponent.vue";
import CuponComponent from "@/components/home/cupon/CuponComponent.vue";
import FaqComponent from "@/components/home/faq/FaqComponent.vue";
import HeaderComponent from "@/components/home/header/HeaderComponent.vue";
import ProductList from "@/components/home/products/ProductList.vue";
import ServicesComponent from "@/components/home/services/ServicesComponent.vue";
import FooterComponent from "@/components/ui/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <CategoriesComponent />
  <ProductList />
  <CuponComponent />
  <FaqComponent />
  <ServicesComponent />
  <FooterComponent />
</template>
