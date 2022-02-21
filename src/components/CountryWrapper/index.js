import React from 'react'
import { getUniversities } from '../../services/api'
import { Flex, Link, Box, GridItem, Image, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const CountryWrapper = ({ country, ...props }) => {

  const countryFlag = `https://countryflagsapi.com/png/${country.name.toLowerCase().split(',')}`
  const countryUniversities = localStorage.getItem(`${country.name}Universities`)
  const navigate = useNavigate();

  const onClick = async () => {
    const response = await getUniversities(country.code)

    if (!countryUniversities) {
      const newParse = await response.map((university, key) => university = { id: key, ...university })
      localStorage.setItem(`${country.name}Universities`, JSON.stringify(newParse))
    }

    navigate(`/app/result/${country.name.toLowerCase()}`)
  }

  return (
    <GridItem colSpan={[12, 12, 4, 3]}>
      <Link textDecoration="none" _hover={{ textDecoration: 'none' }} onClick={onClick}>
        <Box p={5} borderRadius="md" boxShadow="lg" transition="all 0.3s" _hover={{ transform: 'scale(1.1)', transition: 'all 0.3s' }}>
          <Box borderBottom='1px' borderColor="#DDDDDD" pb={3}>
            <Flex {...props} w="100%">
              <Image src={countryFlag} maxW="50px" />
              <Flex alignItems="center" justifyContent="center" w="100%">
                <Heading as="h3" size="sm">{country.name.toUpperCase()}</Heading>
              </Flex>
            </Flex>
          </Box>
          <Box pt={3}>
            <Heading as="h4" textAlign="center" size="sm">Universities found</Heading>
            <Text pt={5} textAlign="center" fontSize="30px">
              {(JSON.parse(countryUniversities) ? JSON.parse(countryUniversities).length : 0)}
            </Text>
          </Box>
        </Box>
      </Link>
    </GridItem>
  )
}

export default CountryWrapper