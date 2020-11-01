import React from 'react'
import styled from 'styled-components'

import rawProvinces from '../db/sync-provinces/provinces.json'
import { Item } from '../db/CheckinsResponse.type'

const provinces: { en: string; th: string }[] = rawProvinces

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

function ProvinceCheckeIn(props: Props) {
  const { items } = props
  const checkedInProvinces = items.reduce((list: string[], item: Item) => {
    const { state, country } = item.venue.location
    if (state && !list.includes(state) && country.toLowerCase() === 'thailand') {
      list = [...list, state]
    }
    return list
  }, [])

  console.log('>', checkedInProvinces)

  return (
    <Table>
      <thead>
        <tr>
          <th>Province</th>
          <th>Check-in</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ProvinceCheckeIn
