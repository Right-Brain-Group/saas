export default defineAppConfig({
  ui: {
    primary: 'fusion',
    gray: 'slate',
    color: {
      tertiary: '#db7704',
      },
    variables: {
      light: {
        background: '#fafaf9',
        foreground: 'var(--color-gray-900)'
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: '#fafaf9'
      },
      header: {
        height: '4rem'
      }
    },
    badge: {
      variant: {
        subtle: '#fafaf9',
        background: '#fafaf9',
      },
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md'
      }
    },
    input: {
      default: {
        size: 'md'
      }
    },
    card: {
      background: 'lgt-neo dark:drk-neo ring-0',
      ring: 'ring-0',
      rounded: 'rounded-xl',
      shadow: 'shadow-none',
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    },
    page: {
      hero: {
        wrapper: 'lg:py-24'
      }
    }
  }
})
