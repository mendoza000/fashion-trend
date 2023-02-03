<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-white shadow-xl py-5 rounded-xl max-w-[17rem] min-w-[17rem] cursor-pointer"
  >
    <div class="mb-5">
      <img
        src="/inmortal.png"
        alt="franela"
        class="bg-white w-60 rounded-xl"
        draggable="false"
      />
    </div>
    <div class="flex items-center justify-between min-w-full px-5">
      <p class="text-lg font-bold">Franela oversize</p>
      <p class="font-semibold uppercase opacity-50">inmortal</p>
    </div>

    <div class="flex justify-between min-w-full px-5 mt-3">
      <p class="text-lg font-bold">
        <span class="text-violet-400">$</span> 20.00
      </p>
      <button
        class="px-2 py-1 font-semibold text-white duration-200 rounded-md shadow-lg bg-violet-400 hover:bg-violet-500"
      >
        Añadir al carrito
      </button>
    </div>
  </div>
</template>
