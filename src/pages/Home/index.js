import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import Header from './Header'
import ClipLoader from 'react-spinners/ClipLoader'
import CountriesWrapper from './CountriesWrapper'

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {loading ? (
        <Flex alignItems="center" justifyContent="center" h="calc(100vh - 300px)">
          <ClipLoader loading={loading} color="#808080" />
        </Flex>
      ) : (
        <>
          <Header />
          <CountriesWrapper />
        </>
      )}
    </>
  )
}

export default Home