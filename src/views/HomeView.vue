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
  <TransitionGroup name="fade" tag="div">
    <HeaderComponent />
    <CategoriesComponent />
    <ProductList />
    <CuponComponent />
    <FaqComponent />
    <ServicesComponent />
    <FooterComponent />
  </TransitionGroup>
</template>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
