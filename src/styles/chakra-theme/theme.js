import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"


const theme = extendTheme({
  styles: {
    global: (props) => ({
      'body, html': {
        bg: mode('white', 'white')(props),
        textDecoration: 'none',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          background: '#B8B8B8',
          borderRadius: '30px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: "gray.100",
          borderRadius: '30px',
        },
      },
    }),
  },
  colors: {
    light: {
      100: '#F5F5F5'
    },
    dark: {
      100: '#262626',
      200: '#1D1D1D'
    },
    gray: {
      100: '#808080'
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
})

export default theme