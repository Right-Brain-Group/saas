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
        primary: '#f9b712',
        secondary: '#f25f4c',
        tertiary: '#db7704',
        dark: '#0f172a',
        light: '#fafaf9',
        fusion: {
          '50': '#f8f9d1',
          '100': '#fdffba',
          '200': '#ffff84',
          '300': '#fff555',
          '400': '#f9b712',
          '500': '#f9b712',
          '600': '#db7704',
          '700': '#b13a02',
          '800': '#7e0d05',
          '900': '#460614'
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
