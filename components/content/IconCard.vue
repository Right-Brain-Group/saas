<script setup>
defineProps({
    src: {
    type: String,
    default: 'Default src'
  },
  title: {
    type: String,
    default: 'Default title'
  },
  description: {
    type: String,
    default: 'Default description'
  },
})
</script>

<template>
  <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded">
    <NuxtImg :src="src" class="w-full"/>
    <h3 class="text-3xl font-semibold mb-2 mt-4">
      {{ title }}
    </h3>
    <p>{{ description }}</p>
  </div>
</template>