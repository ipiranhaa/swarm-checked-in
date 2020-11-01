import React from 'react'
import styled from 'styled-components'

import { Item } from '../db/CheckinsResponse.type'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #eee;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }
`

interface Props {
  items: Item[]
}

function CheckinList(props: Props) {
  const { items } = props
  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const { name, location } = item.venue
          const { city, state, country } = location
          return (
            <tr key={item.id}>
              <td>{item.createdAt}</td>
              <td>{name}</td>
              <td>{city}</td>
              <td>{state}</td>
              <td>{country}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default CheckinList
