import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import SAMap from '../../assets/images/png/Flags_south_america.png'

const Brand = () => {
  return (
    <Flex justifyContent="end" pb={10}>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box>
          <Image src={SAMap} maxH="50px" />
        </Box>
        <Text fontWeight="bold">
          SA Universities
        </Text>
      </Flex>
    </Flex>
  )
}


export default Brand