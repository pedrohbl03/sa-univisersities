import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"


const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'white')(props),
        textDecoration: 'none'
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