import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
import { Input, Box, Flex, Heading, FormControl, FormLabel, IconButton } from '@chakra-ui/react'
import { IoIosSend } from 'react-icons/io'

const Username = () => {
  const [username, setUsername] = useState('')
  const { setUser } = React.useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    setUser({ username: localStorage.getItem('username') })
    navigate('/app')
  }

  return (
    <Flex minH="calc(100vh - (300px))" flexDirection="column" justifyContent="center">
      <Heading pb={10} as="h1">Welcome to SA Universities</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Flex>
          <Box w="100%" paddingEnd={5}>
              <Input id="username" variant="flushed" type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </Box>
            <IconButton bg="primary.100" type="submit" icon={<IoIosSend />} />
        </Flex>
        </FormControl>
      </form>
    </Flex>
  )
}

export default Username