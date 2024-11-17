<script setup lang="ts">
import { inject, ref, computed, type Ref } from 'vue'

// Define NavItem type locally or use the correct import from @nuxt/content
type NavItem = {
  label: string
  to: string
  children?: NavItem[]
}

// Inject navigation or provide a fallback as a Ref
const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

// Define links as a plain array of NavItem
const links: NavItem[] = [
  {
    label: 'Work Samples',
    to: '/work'
  },
  {
    label: 'RBG Labs',
    to: 'http://rightbrainlabs.notion.site'
  }
]

// Map content navigation safely using computed for reactivity
const mappedNavigation = computed(() => {
  if (!navigation?.value?.length) return []
  return navigation.value.map(item => ({
    label: item.label,
    to: item.to,
    children: item.children || []
  }))
})
</script>

<template :ui="{ container: 'max-w-full' }">
  <UHeader :links="links">
    <template #logo>
      <NuxtImg src="/images/rbg-logo.svg" width="29" height="auto" alt="Right Brain Group LLC" />
      <h2>Right Brain Group</h2>
    </template>

    <template #right>
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
      <!-- Pass the mapped navigation to the UNavigationTree -->
      <UNavigationTree :links="mappedNavigation" default-open :multiple="false" />
    </template>
  </UHeader>
</template>
