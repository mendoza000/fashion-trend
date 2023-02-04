<script setup lang="ts">
import { urlFor } from "@/client";
import router from "@/router";

const props = defineProps({
  title: String,
  brand: String,
  price: Number,
  image: Object,
  id: String,
});

const openProduct = () => {
  router.push("/product/" + props.id);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-white shadow-xl py-5 rounded-xl max-w-[17rem] min-w-[17rem] cursor-pointer"
    @click="openProduct()"
  >
    <div class="mb-5">
      <img
        :src="urlFor(props.image).url()"
        alt="franela"
        class="bg-white w-60 rounded-xl"
        draggable="false"
      />
    </div>
    <div class="flex items-center justify-between min-w-full px-5">
      <p class="text-lg font-bold">{{ props.title }}</p>
      <p class="font-semibold uppercase opacity-50">{{ props.brand }}</p>
    </div>

    <div class="flex justify-between min-w-full px-5 mt-3">
      <p class="text-lg font-bold">
        <span class="text-violet-400">$</span> {{ props.price }}
      </p>
      <button
        class="px-2 py-1 font-semibold text-white duration-200 rounded-md shadow-lg bg-violet-400 hover:bg-violet-500"
      >
        Añadir al carrito
      </button>
    </div>
  </div>
</template>
