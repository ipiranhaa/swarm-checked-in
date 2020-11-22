import React from 'react'
import styled from 'styled-components'
import { EnGeographyName } from '../types/Province.type'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th:first-child {
    width: 74%;
  }

  td,
  th {
    border: 1px solid #eee;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }

  th:last-child,
  td:last-child {
    text-align: center;
  }
`

const Title = styled.h2`
  text-align: center;
`

interface Props {
  title: EnGeographyName
  items: { name: string; wasChecked: boolean }[]
}

const CheckedInTable = (props: Props) => {
  const { title, items } = props
  return (
    <>
      <Title>{title}</Title>
      <Table>
        <thead>
          <tr>
            <th>Provinces</th>
            <th>Check-in</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, wasChecked }) => (
            <tr>
              <td>{name}</td>
              <td>{wasChecked ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default CheckedInTable
