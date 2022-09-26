import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',

    '&::-webkit-scrollbar': {
      width: '12px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#a8a8a8',
      borderRadius: '20px',
      border: '3px solid $gray900',
    }
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  // ':focus': {
  //   outline: 'none',
  //   boxShadow: 'inset 0 0 0 1.5px #E1E1E6',
  // }
})