<template>
    <UCard :class="[ui.wrapper]" v-bind="attrs" :ui="ui" :style="{ '--color-light': colorLight, '--color-dark': colorDark }">

        <ContentSlot unwrap="p" :use="$slots.default" />
        
    </UCard>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from 'vue'
  import colors from '#tailwind-config/theme/colors'
  import uiColors from '#ui-colors'
  
  const appConfig = useAppConfig()
  
  const config = computed(() => ({
    wrapper: 'relative group overflow-hidden flex items-center rounded-lg',

    body: {
      base: 'flex-1'
    },
    title: 'text-gray-900 dark:text-white font-semibold text-base my-0',
    description: 'text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0'
  }))
  
  defineOptions({
    inheritAttrs: false
  })
  
  const props = defineProps({
  
    color: {
      type: String as PropType<typeof uiColors[number]>,
      default: 'primary'
    },
    title: {
      type: String,
      default: undefined
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined
    },
    ui: {
      type: Object as PropType<Partial<typeof config.value>>,
      default: () => ({})
    }
  })
  
  const { ui, attrs } = useUI('content.card', toRef(props, 'ui'), config, toRef(props, 'class'), true)
  
  const colorLight = computed(() => {
    if (props.color === 'primary') {
      return 'rgb(var(--color-primary-DEFAULT))'
    }
    // @ts-ignore
    return colors[props.color]?.['500'] || colors[props.color] || props.color
  })
  const colorDark = computed(() => {
    if (props.color === 'primary') {
      return 'rgb(var(--color-primary-DEFAULT))'
    }
    // @ts-ignore
    return colors[props.color]?.['400'] || colors[props.color] || props.color
  })
  
  </script>
  