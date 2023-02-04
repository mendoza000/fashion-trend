<script setup lang="ts">
import CategoryCart from "./CategoryCart.vue";
</script>

<template>
  <div class="flex flex-col gap-5 py-20 lg:px-20">
    <h2 class="px-20 text-3xl font-bold lg:px-0">Categorias</h2>

    <div
      class="flex grid-cols-4 gap-10 px-10 mx-10 overflow-x-auto lg:grid lg:px-0 lg:mx-0"
    >
      <CategoryCart :title="'Todos los productos'" :id="'all'" />
      <CategoryCart :title="'Hombres'" :id="'man'" />
      <CategoryCart :title="'Mujeres'" :id="'woman'" />
      <CategoryCart :title="'Zapatos'" :id="'shoe'" />
    </div>
  </div>
</template>
