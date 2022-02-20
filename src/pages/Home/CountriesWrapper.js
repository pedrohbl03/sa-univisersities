import React from 'react'
import CountryWrapper from '../../components/CountryWrapper'
import { southAmericaCountries } from '../../constants/southAmericaCountries'
import { Box, Grid, Heading } from '@chakra-ui/react'

const CountriesWrapper = () => {

  return (
    <Box py={10}>
      <Heading as='h3' fontSize='lg' pb={3}>Show more universities</Heading>
      <Grid templateColumns="repeat(12, 1fr)" gap={5}>
        {southAmericaCountries.map((country, id) => <CountryWrapper country={country} key={id} />)}
      </Grid>
    </Box>
  )
}

export default CountriesWrapper