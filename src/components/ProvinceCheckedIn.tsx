import React from 'react'
import styled from 'styled-components'

import rawProvinces from '../db/sync-provinces/provinces.json'
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

interface Province {
  id: number
  en: string
  th: string
}

interface Props {
  items: Item[]
}

const provinces: Province[] = rawProvinces

const getCheckedInProvince = (
  enKeywordList: string[],
  thKeywordList: string[],
  province: Province
) => {
  const checkBy = (nameType: 'en' | 'th') => {
    let keywordList = enKeywordList
    if (nameType === 'th') {
      keywordList = thKeywordList
    }

    for (let index = 0; index < keywordList.length; index++) {
      const keyword = keywordList[index]
      if (keyword.includes(province[nameType].toLowerCase())) {
        return true
      }

      if (index === keywordList.length - 1) {
        return false
      }
    }

    return false
  }

  return checkBy('en') || checkBy('th')
}

function ProvinceCheckeIn(props: Props) {
  const { items } = props

  const filteredProvinces = items.reduce((list: string[], item: Item) => {
    const { state, country } = item.venue.location
    if (state && !list.includes(state.toLowerCase()) && country.toLowerCase() === 'thailand') {
      list = [...list, state.toLowerCase()]
    }
    return list
  }, [])

  const enKeywordList: string[] = []
  const thKeywordList: string[] = []
  filteredProvinces.forEach((province) => {
    if (/[a-z]/.test(province)) {
      enKeywordList.push(province)
    } else {
      thKeywordList.push(province)
    }
  })

  const checkedInState = provinces.map((province) => ({
    name: province.en,
    wasChecked: getCheckedInProvince(enKeywordList, thKeywordList, province),
  }))

  return (
    <Table>
      <thead>
        <tr>
          <th>Province</th>
          <th>Check-in</th>
        </tr>
      </thead>
      <tbody>
        {checkedInState.map(({ name, wasChecked }) => (
          <tr>
            <td>{name}</td>
            <td>{wasChecked ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ProvinceCheckeIn
