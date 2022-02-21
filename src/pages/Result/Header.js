import React from 'react'
import { Box, Flex, Image, Text, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Card from '../../components/Card'


const Header = ({ country, ...props }) => {

  const countryFlag = `https://countryflagsapi.com/png/${country.toLowerCase()}`
  const countryUniversities = localStorage.getItem(`${country}Universities`)

  return (
    <Box mb={10}>
      <Flex pb={5}>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/app'>HOME</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/app'>RESULT</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={`/app/result/${country}`}>{country.toUpperCase()}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Card maxW="250">
          <Flex alignItems="center">
            <Box marginEnd={3}>
              <Image src={countryFlag} maxW="100px" />
            </Box>
            <Box>
              <Heading as="h4" fontSize="md">{country.toUpperCase()}</Heading>
              <Text textAlign="center" pt={3}>Universities: {JSON.parse(countryUniversities).length}</Text>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Box>
  )
}

export default Header