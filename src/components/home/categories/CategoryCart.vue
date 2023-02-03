<script setup lang="ts">
import { useConfigSite } from "@/stores/configSite";

const props = defineProps({
  title: String,
  id: {
    type: String,
    required: true,
  },
});

const configSiteStore = useConfigSite();

const setColor = () => {
  // console.log(props.id === configSiteStore.configSite.categorySelect);
  if (props.id === configSiteStore.configSite.categorySelect) {
    return "bg-opacity-0 text-white";
  }
};

const changeSelect = () => {
  configSiteStore.changeCategory(props.id);
};
</script>

<template>
  <div
    class="p-1 duration-200 shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl hover:shadow-purple-300 text-slate-500"
    @click="changeSelect()"
  >
    <div
      class="flex items-center justify-center h-20 px-5 duration-200 bg-white cursor-pointer rounded-xl hover:opacity-100"
      :class="setColor()"
    >
      <span class="text-2xl font-semibold text-center">{{ props.title }}</span>
    </div>
  </div>
</template>
