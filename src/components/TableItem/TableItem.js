import React from 'react'
import { AuthContext } from '../../context/auth'
import { Tr, Td, Link, IconButton } from '@chakra-ui/react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'


const TableItem = ({ university, country, ...props }) => {

  const { favorites, setFavorites } = React.useContext(AuthContext)
  const isFavorite = favorites && favorites.find(favorite => favorite.name === university.name)
  
  const favoriteToggle = () => { 
    if(isFavorite) {
      removeFavorite()
    } else {
      addNewFavorite()
    }
  }

  const addNewFavorite = () => {
    const favoriteArray = [...favorites, university]
    setFavorites(favoriteArray)
    localStorage.setItem('favoriteUniversities', JSON.stringify(favoriteArray))
  }

  const removeFavorite = () => {
    const newFavorites = favorites.filter(favorite => favorite.name !== university.name)
    localStorage.setItem('favoriteUniversities', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }


  return (
    <Tr>
      <Td>{university.name}</Td>
      <Td>{university.country}</Td>
      <Td>{university['state-province']}</Td>
      <Td>
        <Link href={university.web_pages[0]} isExternal>
          <FiExternalLink mx='2px' />
        </Link>
      </Td>
      <Td><IconButton bg="transparent" color="#FF0000" onClick={favoriteToggle} icon={(isFavorite) ? <AiFillHeart /> : <AiOutlineHeart /> } /></Td>
    </Tr>
  )
}

export default TableItem