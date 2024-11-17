<script setup lang="ts">
import { inject, ref, computed, type Ref } from 'vue';
import type { NavItem } from '@nuxt/content';

// Inject navigation and ensure fallback to an empty array if not provided
const navigation = inject<Ref<NavItem[]>>('navigation', ref([]));

// Links for the navigation menu
const links = [
  {
    label: 'Work Samples',
    icon: 'i-heroicons-book-open',
    to: '/work',
  },
  {
    label: 'RBG Labs',
    icon: 'i-heroicons-square-3-stack-3d',
    to: 'http://rightbrainlabs.notion.site',
  },
];

// Computed function to map navigation
const mappedNavigation = computed(() =>
  navigation.value.map(item => ({
    label: item.label,
    icon: item.icon || 'i-heroicons-document',
    to: item.to || '#',
  }))
);
</script>

<template :ui="{ container: 'max-w-full' }">
  <UHeader :links="links" >
    <template #logo>
      <NuxtImg
        src="/images/rbg-logo.svg"
        width="29"
        height="auto"
        alt="Right Brain Group LLC"
      />
      <h2>Right Brain Group</h2>
    </template>

    <template #right>
      
      <!-- Right Section (Desktop Buttons) -->
      <UButton
        label="Book Meeting Now"
        icon="i-heroicons-calendar-days"
        target="_blank"
        to="https://calendar.app.google/KRG9jGxhACsNm2FV9"
        class="hidden lg:flex bg-sky-400 hover:bg-sky-300 hover:dark:bg-sky-600"
        title="Book now with Right Brain Group LLC"
      />
    </template>

    <template #panel>
      <!-- Right Section (Desktop Buttons) -->
      <UNavigationTree :links="links" />
    </template>
  </UHeader>
</template>
