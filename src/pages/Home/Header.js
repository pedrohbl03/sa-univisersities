import React from 'react'
import { AuthContext } from '../../context/auth'
import { Box, Text } from '@chakra-ui/react'
import Card from '../../components/Card/index'
import SectionFavorite from './SectionFavorite'

const Header = ({ ...props }) => {

  const { user } = React.useContext(AuthContext)

  return (
    <Box {...props} w="100%">
      <Box pb={10}>
        <Text fontSize="xl" fontWeight="bold">
          Hello, {user.username}!
        </Text>
      </Box>
      <Box>
        <Card>
          <SectionFavorite />
        </Card>
      </Box>
    </Box>
  )
}

export default Header