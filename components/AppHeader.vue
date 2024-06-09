<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
label: 'Process',
 to: '/docs'
}, //{
//   label: 'Blog',
//   to: '/blog'
// }, {
//  label: 'Contact',
//  to: 'https://calendar.app.google/PFyuyKtnQiTH1J4g9'
//}
]

// const appConfig = useAppConfig()
//   const { toggleContentSearch } = useUIState()
//   const { metaSymbol } = useShortcuts()
  
//   defineProps({
//     label: {
//       type: String,
//       default: 'Search...'
//     }
//   })
</script>

<template>
  <UHeader>
    <template #logo>
      <NuxtImg src="/images/rbg-logo.svg" width="29" height="auto" alt="Right Brain Group LLC" />
      <h2>Right Brain Group</h2>
    </template>

    <template #right>
      <!-- <UButton
        label="Sign in"
        color="gray"
        to="/login"
      />-->
      <UButton
        label="Book Meeting Now"
        icon="i-heroicons-calendar-days"
        target="_blank"
        to="https://calendar.app.google/PFyuyKtnQiTH1J4g9"
        class="hidden lg:flex bg-sky-400 hover:bg-sky-300 hover:dark:bg-sky-600 "
      />
      
      <!-- <UTooltip text="Search" :shortcuts="['⌘', 'k']">
        <UButton
          :icon="appConfig.ui.icons.search"
          v-bind="((!!label ? $ui?.button?.input : $ui?.button?.secondary) as any)"
          aria-label="Search"
          :class="[!!label && 'flex-1 border-0 ring-0']"
          @click="toggleContentSearch"
        ></UButton>
      </UTooltip> -->
      <!-- <UColorModeToggle /> -->
    </template>

    <!-- <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template> -->
  </UHeader>
</template>
