<script setup lang="ts">
import NavBar from "@/components/ui/NavBar.vue";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <!-- <div
    class="blur-2xl min-w-[10rem] min-h-[10rem] bg-purple-300 absolute bottom-36 left-10 bg-opacity-60 -rotate-12 z-0"
  >
    .
  </div>

  <div
    class="blur-2xl min-w-[10rem] min-h-[10rem] bg-purple-300 absolute bottom-14 right-10 bg-opacity-60"
  >
    .
  </div> -->
  <NavBar />
  <div
    class="flex flex-col-reverse items-center justify-center min-h-screen px-20 pt-20 lg:grid lg:grid-cols-2 bg-slate-200 lg:pt-0"
  >
    <div class="z-10 flex flex-col gap-4">
      <!-- <p class="font-semibold opacity-60">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
        error.
      </p> -->
      <h1
        class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
      >
        FashionTrend
      </h1>

      <p class="max-w-lg text-xl font-semibold opacity-75">
        ¡Destaca entre la multitud con la ropa oversize y urbana única de
        FashionTrend! Con nuestra amplia variedad de opciones, encontrarás
        prendas que se ajusten a tu estilo personal y te harán lucir
        impresionante
      </p>

      <button
        class="flex items-center justify-center max-w-md gap-2 py-4 mt-5 text-lg font-semibold duration-200 bg-purple-400 shadow-lg rounded-xl hover:bg-purple-500 hover:shadow-pink-300 hover:text-white hover:scale-105"
      >
        Nuestros productos!
        <ArrowDownIcon class="w-5 h-5 animate-bounce" />
      </button>
    </div>

    <img
      src="/tailor.svg"
      alt="header-image"
      class="min-w-[23rem] -mt-36 lg:-mt-0"
    />
  </div>
</template>
