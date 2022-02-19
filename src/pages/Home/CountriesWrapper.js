import React from 'react'
import Card from '../../components/CountryWrapper'
import { Grid } from '@chakra-ui/react'

const CountriesWrapper = () => {
  return (
      <Grid templateColumns="repeat(12, 1fr)" gap={10}>
        <Card country="brazil" />
        <Card country="argentina" />
        <Card country="peru" />
        <Card country="paraguay" />
        <Card country="colombia" />
        <Card country="bolivia" />
        <Card country="chile" />
        <Card country="ecuador" />
        <Card country="venezuela" />
        <Card country="uruguay" />
        <Card country="guyana" />
        <Card country="suriname" />
      </Grid>
  )
}

export default CountriesWrapper