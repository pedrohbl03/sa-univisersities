import React from 'react'
import { Table, Thead, Tbody, Th, Tr } from '@chakra-ui/react'

const TableWrapper = ({ children, ...props }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>University</Th>
          <Th>Country</Th>
          <Th>State</Th>
          <Th>Website</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        { children }
      </Tbody>
    </Table>
  )
}

export default TableWrapper