import React from 'react'
import { Heading, Box, Flex, Text, List, ListItem } from '@chakra-ui/react'


const SectionFavorite = ({ ...props }) => {

  const favoritesUniversities = localStorage.getItem('favoriteUniversities')

  return (
    <Flex p={3} {...props} flexDirection="column">
      <Box>
        <Heading as="h3" pb={3} size="sm">Your favorites universities</Heading>
      </Box>
      <Box>
        {favoritesUniversities ? (
          <List>
            {favoritesUniversities.map((favorite, key) => <ListItem key={key}>{favorite.name}</ListItem>)}
          </List>
        ) : 
        (
          <Flex alignItems="center" justifyContent="center">
            <Text py={3}>No university was favorited</Text>
          </Flex>
        )}
      </Box>
    </Flex>
  )
}

export default SectionFavorite