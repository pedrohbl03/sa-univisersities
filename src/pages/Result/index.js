import React from 'react'
import Item from '../../components/TableItem/TableItem'
import TableWrapper from '../../components/TableWrapper/TableWrapper'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Result = () => {

  let { country } = useParams()

  const universities = JSON.parse(localStorage.getItem(`${country}` + 'Universities'))

  return (
    <>
      <Box>
        <Header country={country} />
      </Box>
      <TableWrapper>
        {
          universities.sort((a, b) => a.name.localeCompare(b.name)).map((university, index) => {
            return (
              <React.Fragment key={index}>
                <Item university={university} country={country} />
              </React.Fragment>
            )
          })
        }
      </TableWrapper>
    </>
  )
}

export default Result