<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import NavBar from "@/components/ui/NavBar.vue";
import { urlFor } from "@/client";
import {
  BoltIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const router = useRoute();
const id = router.params.id;
const productStore = useProductsStore();
const product = productStore.filterProduct(id);

const sizeSelect = ref("");
const setDefaultSize = () => {
  sizeSelect.value = product?.size[0] || "0";
};
const setSize = (e: string) => {
  sizeSelect.value = e;
};

setDefaultSize();

// console.log(product?.size.length);
</script>

<template>
  <NavBar />
  <div class="pt-24 px-10 lg:px-20 grid lg:grid-cols-2">
    <div class="flex gap-5 flex-col lg:flex-row">
      <img
        :src="urlFor(product?.image).url()"
        :alt="product?.title"
        class="min-w-[100%] max-w-[100%] lg:min-w-[70%] lg:max-w-[70%] rounded-xl"
      />

      <div class="flex lg:flex-col items-center justify-between max-w-[100%]">
        <div>
          <img
            :src="urlFor(product?.image).url()"
            alt="variant-1"
            class="min-w[5rem] max-w-[5rem] rounded-xl cursor-pointer"
          />
        </div>
        <div>
          <img
            :src="urlFor(product?.image).url()"
            alt="variant-1"
            class="min-w[5rem] max-w-[5rem] rounded-xl grayscale cursor-pointer"
          />
        </div>
        <div>
          <img
            :src="urlFor(product?.image).url()"
            alt="variant-1"
            class="min-w[5rem] max-w-[5rem] rounded-xl grayscale cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 rounded-xl lg:px-10 py-10">
      <div class="flex items-center justify-between">
        <h2 class="text-4xl font-bold flex items-center gap-1">
          <BoltIcon class="h-10 w-10 text-purple-500" />
          {{ product?.title }}
        </h2>
        <h3 class="text-2xl font-semibold text-purple-500 uppercase opacity-80">
          {{ product?.brand }}
        </h3>
      </div>

      <p class="opacity-75 text-md">{{ product?.description }}</p>

      <div
        class="flex items-center justify-center bg-blue-200 rounded-lg py-3 font-semibold mt-auto"
        v-if="product?.size.length == 1"
      >
        <XMarkIcon class="h-5 w-5 text-red-500" />
        Talla unica
      </div>
      <template v-else>
        <p class="text-xl font-bold -mb-7 mt-auto">Tallas:</p>
        <div
          class="flex items-center bg-blue-200 rounded-lg py-2 font-semibold justify-around"
        >
          <div
            v-for="e in product?.size"
            :key="e"
            class="px-5 py-1 rounded-lg shadow-xl hover:bg-purple-400 font-semibold duration-200 cursor-pointer"
            :class="
              e == sizeSelect
                ? 'bg-purple-400 text-blue-50'
                : 'bg-white text-black'
            "
            @click="setSize(e)"
          >
            <span class="uppercase">{{ e }}</span>
          </div>
        </div>
      </template>

      <button
        class="bg-gradient-to-r from-blue-400 to-pink-400 p-1 rounded-lg hover:scale-105 duration-200 hover:from-pink-400 hover:to-pink-400 -mt-7"
      >
        <div
          class="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-semibold"
        >
          <ShoppingCartIcon class="h-7 w-7" />
          Añadir al carrito
        </div>
      </button>
    </div>
  </div>
</template>
