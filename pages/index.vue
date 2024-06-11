<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div v-if="page">
    <AppLandingHero
      :title="page.hero.title"
      :animated="page.hero.animated"
      :description="page.hero.description"
      :links="page.hero.links"
      class=""
    >
      <div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,#fafaf9,transparent)]" />
      
      <template #headline>

        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold bg-slate-50 dark:bg-slate-50 light:bg-slate-50"
        >

          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
            aria-label="Our Process"
          >
            <span
              class="absolute inset-0"
              aria-hidden="false"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>
    </AppLandingHero>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :img="section.img"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :features="section.features"
      class="!py-0 pb-0 gap-5 my-28"
    >
      <div class="flex justify-center">
        <UColorModeImage class="w-9/12" :light="section.lightsrc" :dark="section.darksrc"  alt="Website & Branding People" width="auto" height="auto"/>
      </div>
    </ULandingSection>

    <ULandingSection
      class="!py-0">

      <template #title>
        <span v-html="page.features.title" />
      </template>

      <template #description>
          <span v-html="page.features.description" />
      </template>
      <UPageGrid
      class="-mt-10">
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection 
      v-for="(image, index) in page.images"
      :key="index"
      class="!py-0 mb-8 mt-[8em]">
      <UColorModeImage class="w-full md:w-10/12 px-12 self-center flex" :light="image.lightsrc" :dark="image.darksrc" alt="Right Brain Group Website Services" width="auto" height="auto" />
    </ULandingSection>

    <ULandingSection
      class="!py-0 mb-24"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :avatar="page.testimonials.lightsrc"
    >
      <UPageColumns class="xl:columns-4 -mt-10">
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial
            v-bind="testimonial"
            to="link"
          />
        </div>
      </UPageColumns>
    </ULandingSection>

    <!-- <ULandingSection>
      <ULandingCTA
        v-bind="page.cta"
        class="bg-gray-100/50 dark:bg-gray-800/50"
      />
    </ULandingSection> -->
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-100)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-100)) 1px, transparent 1px);
}
.dark {
  .landing-grid {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}
</style>
