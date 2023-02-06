<script lang="ts" setup>
import router from "@/router";

const goToHome = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="fixed z-20 flex items-center justify-between min-w-full px-5 py-4 shadow-xl bg-slate-200"
  >
    <div class="flex items-center gap-2 cursor-pointer" @click="goToHome()">
      <img src="/pulpo.png" alt="logo" class="w-9 h-9" />
      <span class="text-xl font-bold">FashionTrend</span>
    </div>

    <div class="hidden gap-5 md:flex text-center">
      <a
        href="#"
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Incio
      </a>
      <a
        href="#categories"
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Productos
      </a>
      <a
        href="#faq"
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        FAQ
      </a>
      <a
        href="#services"
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Servicios
      </a>
      <a
        href="#blog"
        class="hover:bg-purple-400 min-w-[6rem] py-2 font-semibold duration-200 rounded-lg shadow-md"
      >
        Blog
      </a>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
