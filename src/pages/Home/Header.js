import React from 'react'
import { AuthContext } from '../../context/auth'
import { Flex, Box, Text } from '@chakra-ui/react'
import Card from '../../components/Card/index'
import SectionFavorite from './SectionFavorite'

const Header = ({ ...props }) => {

  const { user } = React.useContext(AuthContext)

  return (
    <Box {...props} w="100%">
      <Flex pb={10}>
        <Text fontSize="xl" fontWeight="bold">
          Hello, {user.username}!
        </Text>
      </Flex>
      <Box>
        <Card>
          <SectionFavorite />
        </Card>
      </Box>
    </Box>
  )
}

export default Header