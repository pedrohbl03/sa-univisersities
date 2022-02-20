import React from 'react'
import { Box, Flex, Image, Text, Heading, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Card from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { FiSearch } from 'react-icons/fi'

const Header = ({ country, ...props }) => {

  const navigate = useNavigate();

  const countryFlag = `https://countryflagsapi.com/png/${country.toLowerCase()}`

  const countryUniversities = localStorage.getItem(`${country}` + 'Universities')

  return (
    <Box mb={10}>
      <Flex pb={5}>
        <Button leftIcon={<TiArrowBack />} onClick={() => navigate('/')} bg="transparent">
          Back
        </Button>
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
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<FiSearch/>}
            />
            <Input type='tel' placeholder='Search a university' />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header