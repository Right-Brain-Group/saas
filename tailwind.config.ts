import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        prenton: ['Prenton', ...defaultTheme.fontFamily.sans],
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#f69011',
        secondary: '#f25f4c',
        tertiary: '#e53170',
        dark: '#7b3d13',
        light: '#fafafa',
        fusion: {
          '50': '#fffaed',
          '100': '#fef3d6',
          '200': '#fde3ab',
          '300': '#fbcd76',
          '400': '#f9ad3e',
          '500': '#f69011',
          '600': '#e7780f',
          '700': '#c05c0e',
          '800': '#984814',
          '900': '#7b3d13',
          '950': '#421c08',
          },
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        text: 'text 5s ease infinite',
        rotate: 'rotate 10s linear infinite',
      },
    }
  }
}
