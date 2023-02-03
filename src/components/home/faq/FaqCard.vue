<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="px-1 bg-gradient-to-t from-violet-400 to-pink-400">
    <div class="flex flex-col gap-2 px-5 bg-white min-h-[13rem]">
      <h4 class="text-2xl font-semibold">
        {{ props.title }}
      </h4>
      <p class="">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
