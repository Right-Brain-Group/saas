export default defineAppConfig({
  ui: {
    primary: 'fusion',
    gray: 'slate',
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
      background: 'bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 from-slate-50 to-slate-100 ring-1 ring-slate-100 dark:ring-slate-800',
      ring: 'ring-1 ring-slate-100 dark:ring-slate-800',
      rounded: 'rounded-xl',
      shadow: 'shadow-sm',
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
