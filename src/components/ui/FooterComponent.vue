<script setup lang="ts">
import {
  GlobeAmericasIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="px-10 pt-20 pb-10 text-white lg:px-20 bg-slate-900">
    <div class="grid grid-cols-2 gap-10 lg:grid-cols-5">
      <div class="flex flex-col gap-2">
        <h4 class="text-lg font-bold">Sobre nosotros</h4>
        <p class="max-w-xs text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          aspernatur quod repellendus voluptatibus numquam. Ex minima harum
          rerum reprehenderit aut?
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <h4 class="text-lg font-bold">Links</h4>
        <a
          class="max-w-xs text-sm text-purple-300 cursor-pointer opacity-80 hover:text-purple-400"
          href="#"
        >
          Instagram
        </a>
        <a
          class="max-w-xs text-sm text-purple-300 cursor-pointer opacity-80 hover:text-purple-400"
          href="#"
        >
          Twitter
        </a>
        <a
          class="max-w-xs text-sm text-purple-300 cursor-pointer opacity-80 hover:text-purple-400"
          href="#"
        >
          Blog
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <h4 class="text-lg font-bold">Contacto</h4>
        <p class="max-w-xs text-sm opacity-50">
          Direccion: Avenida real, Calle 00, Local 0
        </p>
        <p class="max-w-xs text-sm opacity-50">Telefono: +58412000000</p>
        <p class="max-w-xs text-sm opacity-50">servicio@fashiontrend.com</p>
      </div>

      <div class="flex flex-col col-span-2 gap-2">
        <h4 class="text-lg font-bold">Newsletter</h4>
        <p class="text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus provident illo hic, quis incidunt labore.
        </p>
        <div class="flex items-center min-w-full mt-3">
          <input
            type="text"
            placeholder="Email"
            class="min-w-[90%] px-3 min-h-[2.5rem] text-black bg-white rounded-tl-md rounded-bl-md shadow-md outline-none"
          />
          <button
            class="bg-purple-500 min-w-[10%] flex items-center justify-center min-h-[2.5rem] rounded-tr-md rounded-br-md hover:bg-purple-600 duration-200"
          >
            <PaperAirplaneIcon class="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>

    <div class="pt-5 mt-5 border-t border-slate-800">
      <p class="flex items-center">
        <GlobeAmericasIcon class="w-5 h-5 mr-2" />
        Created by
        <a
          href="https://mendoza000.vercel.app"
          target="_blank"
          class="ml-1 text-purple-400 duration-200 cursor-pointer hover:text-purple-500"
        >
          Omar Mendoza</a
        >.
      </p>
    </div>
  </div>
</template>
