<script setup lang="ts">
const links = [{
  label: 'Resources',
  children: [{
    label: 'Help center'
  }, {
    label: 'Docs'
  }, {
    label: 'Roadmap'
  }, {
    label: 'Changelog'
  }]
}, {
  label: 'Features',
  children: [{
    label: 'Affiliates'
  }, {
    label: 'Portal'
  }, {
    label: 'Jobs'
  }, {
    label: 'Sponsors'
  }]
}, {
  label: 'Company',
  children: [{
    label: 'About',
    to: '/about'
  }, {
    label: 'Pricing',
    to: '/pricing'
  }, {
    label: 'Careers'
  }, {
    label: 'Blog',
    to: '/blog',
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Subscribed!',
      description: 'You\'ve been subscribed to our newsletter.'
    })

    loading.value = false
  }, 1000)
}

// ICONS
import { Icon } from '#components'
const nuxt = ref('logos:nuxt-icon')
const tailwind = ref('logos:tailwindcss-icon')
const supabase = ref('logos:supabase-icon')
const github = ref('grommet-icons:github')
const notion = ref('logos:notion-icon')
const linkedin = ref('grommet-icons:linkedin')
const x = ref('i-devicon-twitter')
const facebook = ref('grommet-icons:facebook')
const instagram = ref('grommet-icons:instagram')
const beaker = ref('heroicons:beaker-solid')
</script>

<template>
  <UFooter>
    <!--<template #top>
       <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup
              label="Subscribe to our newsletter"
              :ui="{ container: 'mt-3' }"
            >
              <UInput
                v-model="email"
                type="email"
                placeholder="Enter your email"
                :ui="{ icon: { trailing: { pointer: '' } } }"
                required
                size="xl"
                autocomplete="off"
                class="max-w-sm"
                input-class="rounded-full"
              >
                <template #trailing>
                  <UButton
                    type="submit"
                    size="xs"
                    color="primary"
                    :label="loading ? 'Subscribing' : 'Subscribe'"
                    :loading="loading"
                  />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns> 
    </template>-->

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }} The Right Brain Group LLC. All rights reserved.
      </p>
    </template>

    <template #right>
      
      <!-- <div id="partners" class="w-full flex flex-row justify-center lg:justify-end">
        <UTooltip text="Color Mode" :popper="{ offsetDistance: 5 }">
          <UColorModeButton size="sm" />
        </UTooltip>  
        <UTooltip text="NuxtJS" :popper="{ offsetDistance: 5 }">
          <ULink to="https://nuxt.com" target="_blank" class="p-3" aria-label="Nuxt 3">
            <Icon :name="nuxt" size="22" />
          </ULink>
        </UTooltip>
        <UTooltip text="Notion" :popper="{ offsetDistance: 5 }">
          <ULink to="https://www.notion.so/" target="_blank" class="p-3" aria-label="We Love Notion">
            <Icon :name="notion" size="22" />
          </ULink>
        </UTooltip>
        <UTooltip text="SupaBase" :popper="{ offsetDistance: 5 }">
          <ULink to="https://supabase.com" target="_blank" class="p-3" aria-label="Supabase">
            <Icon :name="supabase" size="22" />
          </ULink>
        </UTooltip>
        <UTooltip text="Github" :popper="{ offsetDistance: 5 }">
          <ULink to="https://github.com/Right-Brain-Group-LLC" target="_blank" class="p-3" aria-label="Github">
            <Icon :name="github" size="22" />
          </ULink>
        </UTooltip>
      </div> -->
      <ul class="flex divide-x divide-slate-300 dark:divide-slate-600">
          <li>
            <ULink to="https://facebook.com/Right-Brain-Group-LLC" target="_blank" aria-label="Facebook"
              class="px-3 hover:text-primary hover:transition-all">
              <Icon :name="facebook" size="14" />
            </ULink>
          </li>
          <li>
            <ULink to="https://linkedin.com/in/Right-Brain-Group-LLC" target="_blank" aria-label="LinkedIn"
              class="px-3 hover:text-primary hover:transition-all">
              <Icon :name="linkedin" size="14" class="hover:text-primary hover:transition-all" />
            </ULink>
          </li>
          <li>
            <ULink to="https://instagram.com/Right-Brain-Group-LLC" target="_blank" aria-label="Instagram"
              class="px-3 hover:text-primary hover:transition-all">
              <Icon :name="instagram" size="14" class="hover:fill-primary hover:transition-all" />
            </ULink>
          </li>
          <li>
            <ULink to="https://twitter.com/Right-Brain-Group-LLC" target="_blank" aria-label="X"
              class="px-3 hover:text-primary hover:transition-all">
              <Icon :name="x" size="14" class="dark:fill-slate-300 fill-slate-700 hover:fill-primary hover:transition-all" />
            </ULink>
          </li>

        </ul>
    </template>
  </UFooter>
</template>
