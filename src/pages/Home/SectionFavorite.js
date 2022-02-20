import React from 'react'
import { Heading, Box, Flex, Text } from '@chakra-ui/react'
import { AuthContext } from '../../context/auth'
import TableWrapper from '../../components/TableWrapper/TableWrapper'
import TableItem from '../../components/TableItem/TableItem'


const SectionFavorite = ({ ...props }) => {

  const { favorites } = React.useContext(AuthContext)

  return (
    <Flex p={3} {...props} flexDirection="column" overflowY="auto">
      <Box maxHeight="300px">
        <Box>
          <Heading as="h3" pb={3} size="sm">Your favorites universities</Heading>
        </Box>
        <Box>
          {favorites && favorites.length === 0 ? (
            <Flex alignItems="center" justifyContent="center">
              <Text py={3}>No university was favorited</Text>
            </Flex>
          ) :
            (
              <TableWrapper>
                {favorites.map((favorite, key) => <TableItem key={key} university={favorite} />)}
              </TableWrapper>

            )}
        </Box>
      </Box>
    </Flex>
  )
}

export default SectionFavorite