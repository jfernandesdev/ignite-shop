import { createStitches } from '@stitches/react'

export const { 
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray400: '#8D8D99',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00B37E',
      green500: '#00875F',
    },

    fontSizes: {
      sm: '0.875rem', //14px
      md: '1.125rem', //18px
      lg: '1.25rem', //20px
      xl: '1.5rem', //24px
      '2xl': '2rem', //32px
    }
  }
})