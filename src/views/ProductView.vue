<script lang="ts" setup>
import ProductComponent from "@/components/product/ProductComponent.vue";
</script>

<template>
  <TransitionGroup name="fade" tag="div">
    <ProductComponent />
  </TransitionGroup>
</template>
