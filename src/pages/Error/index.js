import React, { useState, useEffect } from 'react'
import ErrorSvg from '../../assets/images/svg/Error_404_SVG.svg'
import { Box, Image, Text, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  let [time, setTime] = useState(5)
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      time = setTime(time - 1)
    }, 1000)

    return time;
  })

  if (time === 0) {
    navigate('/')
  }

  return (
    <>
      <Box pb={10}>
        <Text textAlign="center">
          Your are redirect in {time.toString()} seconds.
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box>
          <Image src={ErrorSvg} alt="404 Page not fount" width="100%" maxW="600px"></Image>
        </Box>
      </Flex>
    </>
  )
}

export default ErrorPage