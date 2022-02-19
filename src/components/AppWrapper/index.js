import React from 'react'
import Brand from '../Brand/index'
import { Container } from '@chakra-ui/react'

const AppWrapper = ({ children, ...props }) => {
  return(
    <Container maxW="container.lg" {...props}>
      <Brand />
      { children }
    </Container>
  )
}

export default AppWrapper