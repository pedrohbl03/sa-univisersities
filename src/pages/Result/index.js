import React, { useState } from 'react'
import Item from '../../components/TableItem/TableItem'
import TableWrapper from '../../components/TableWrapper/TableWrapper'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Box, Flex, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

const Result = () => {

  let { country } = useParams()
  const universities = JSON.parse(localStorage.getItem(`${country}Universities`))
  const [search, setSearch] = useState('')

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" flexDirection={["column", "column", "row"]}>
        <Header country={country} />
        <Box>
          <InputGroup mb={[5, 5, 0]}>
            <InputLeftElement
              pointerEvents='none'
              children={<FiSearch />}
            />
            <Input type='tel' placeholder='Search a university' onChange={(e) => setSearch(e.target.value)} />
          </InputGroup>
        </Box>
      </Flex>
      <Box overflow="auto" maxW="100%">
        <TableWrapper>
          {
            universities
              .sort((a, b) => a.name.localeCompare(b.name))
              .filter((university) => {
                if (
                  search === ""
                  || university.name.toLowerCase().includes(search.toLowerCase())
                  || (university["state-province"] && university["state-province"].toLowerCase().includes(search.toLowerCase()))
                ) {
                  return university
                }
              })
              .map((university, index) => {
                return (
                  <React.Fragment key={index}>
                    <Item university={university} country={country} />
                  </React.Fragment>
                )
              })
          }
        </TableWrapper>
      </Box>
    </>
  )
}

export default Result