<script setup>
// This is the call to our .env file for Supabase
const supabase = useSupabaseClient()

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
   <ULandingSection class="">
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</ULandingSection>
</template>