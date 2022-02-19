import React from 'react'

import { Flex, Link, Box, GridItem, Image, Heading, Text, Fade } from '@chakra-ui/react'

const CountryWrapper = ({ country, ...props }) => {

  const countryFlag = `https://countryflagsapi.com/png/${country.toLowerCase()}`

  return (
    <GridItem colSpan={[12, 12, 4, 3]}>
        <Box p={5} borderRadius="md" boxShadow="lg" transition="all 0.3s" _hover={{ transform: 'scale(1.1)', transition: 'all 0.3s' }}>
          <Box borderBottom='1px' borderColor="#DDDDDD" pb={3}>
            <Flex {...props} w="100%">
              <Image src={countryFlag} maxW="50px" />
              <Flex alignItems="center" justifyContent="center" w="100%">
                <Heading as="h3" size="sm">{country.toUpperCase()}</Heading>
              </Flex>
            </Flex>
          </Box>
          <Box pt={3}>
            <Heading as="h4" textAlign="center" size="sm">Universities found</Heading>
            <Text pt={5} textAlign="center" fontSize="30px">
              0
            </Text>
          </Box>
        </Box>
    </GridItem>
  )
}

export default CountryWrapper