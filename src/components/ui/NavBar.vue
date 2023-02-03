<script lang="ts" setup></script>

<template>
  <div
    class="fixed z-20 flex items-center justify-between min-w-full px-5 py-4 shadow-xl bg-slate-200"
  >
    <div class="flex items-center gap-2 cursor-pointer">
      <img src="/pulpo.png" alt="logo" class="w-9 h-9" />
      <span class="text-xl font-bold">FashionTrend</span>
    </div>

    <div class="hidden gap-5 md:flex">
      <button
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Incio
      </button>
      <button
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Productos
      </button>
      <button
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        FAQ
      </button>
      <button
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Servicios
      </button>
      <button
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Blog
      </button>
    </div>
  </div>
</template>
