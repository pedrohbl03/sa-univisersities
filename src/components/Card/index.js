import React from 'react'
import { Box } from '@chakra-ui/react'

const Card = ({ children, ...props}) => {
  return (
    <Box boxShadow="xl" borderRadius="lg" p={3} {...props}>
      { children }
    </Box>
  )
}

export default Card