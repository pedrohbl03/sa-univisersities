import React from 'react'
import { Heading, Box, Flex, Text } from '@chakra-ui/react'
import { AuthContext } from '../../context/auth'
import TableWrapper from '../../components/TableWrapper/TableWrapper'
import TableItem from '../../components/TableItem/TableItem'


const SectionFavorite = ({ ...props }) => {

  const { favorites } = React.useContext(AuthContext)

  return (
    <Flex p={3} {...props} flexDirection="column">
        <Box>
          <Heading as="h3" pb={3} size="sm">Your favorites universities</Heading>
        </Box>
      <Box maxHeight="300px" flexDirection="column" overflowY="auto" sx={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          background: '#B8B8B8',
          borderRadius: '30px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: "gray.100",
          borderRadius: '30px',
        }}}>
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