<script setup lang="ts">
import { GiftIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center grid-cols-2 gap-5 px-20 py-20 lg:justify-between lg:grid bg-violet-500"
  >
    <div class="flex flex-col gap-5">
      <h3 class="text-4xl font-bold text-white">
        ¡Comodidad y estilo a tu alcance!
      </h3>
      <p class="max-w-md text-lg text-white opacity-90">
        Comodidad y estilo a tu alcance en FashionTrend. Con nuestra amplia
        variedad de prendas oversize y urbana, encontrarás lo que necesitas para
        lucir impresionante en cualquier ocasión. ¡Explora nuestras promociones
        hoy mismo!
      </p>

      <button
        class="max-w-md p-1 duration-200 shadow-lg bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl hover:scale-105 hover:from-pink-500 hover:to-pink-500"
      >
        <div
          class="flex items-center justify-center gap-2 py-4 font-semibold text-white bg-black rounded-xl"
        >
          <GiftIcon class="w-7 h-7" />
          Descubrir cupon!
        </div>
      </button>
    </div>

    <div class="relative">
      <img
        src="/cupon.png"
        alt="cupon-img"
        class="relative z-10 ml-auto mr-auto w-96"
        draggable="false"
      />
      <div
        class="absolute bottom-0 right-0 z-0 shadow-xl w-96 bg-gradient-to-bl from-blue-500 to-pink-500 rounded-xl lg:h-[28rem] h-[15rem]"
      >
        .
      </div>
    </div>
  </div>
</template>
