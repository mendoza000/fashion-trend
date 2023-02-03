<script setup lang="ts">
import {
  ChatBubbleLeftRightIcon,
  ClipboardIcon,
  CreditCardIcon,
  RocketLaunchIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-16 px-10 lg:px-20 py-36 bg-violet-500"
  >
    <h2 class="text-4xl font-bold text-white">Servicios</h2>

    <div
      class="grid items-center justify-center lg:grid-cols-4 gap-y-5 gap-x-10"
    >
      <div
        class="p-1 duration-200 cursor-default bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl hover:scale-105 hover:from-pink-500 hover:to-pink-500"
      >
        <div
          class="flex flex-col items-center justify-center gap-2 px-6 py-6 text-white bg-black shadow-xl rounded-xl"
        >
          <ChatBubbleLeftRightIcon class="gap-2 w-14 h-14" />
          <span class="text-2xl font-semibold">Atencion al cliente</span>
        </div>
      </div>

      <div
        class="p-1 duration-200 cursor-default bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl hover:scale-105 hover:from-pink-500 hover:to-pink-500"
      >
        <div
          class="flex flex-col items-center justify-center gap-2 px-6 py-6 text-white bg-black shadow-xl rounded-xl"
        >
          <RocketLaunchIcon class="gap-2 w-14 h-14" />
          <span class="text-2xl font-semibold">Delivery</span>
        </div>
      </div>

      <div
        class="p-1 duration-200 cursor-default bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl hover:scale-105 hover:from-pink-500 hover:to-pink-500"
      >
        <div
          class="flex flex-col items-center justify-center gap-2 px-6 py-6 text-white bg-black shadow-xl rounded-xl"
        >
          <ClipboardIcon class="gap-2 w-14 h-14" />
          <span class="text-2xl font-semibold">Blog</span>
        </div>
      </div>

      <div
        class="p-1 duration-200 cursor-default bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl hover:scale-105 hover:from-pink-500 hover:to-pink-500"
      >
        <div
          class="flex flex-col items-center justify-center gap-2 px-6 py-6 text-white bg-black shadow-xl rounded-xl"
        >
          <CreditCardIcon class="gap-2 w-14 h-14" />
          <span class="text-2xl font-semibold">Metodos de pago</span>
        </div>
      </div>
    </div>
  </div>
</template>
