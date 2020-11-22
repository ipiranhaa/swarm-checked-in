import React from 'react'
import styled from 'styled-components'

import CheckedInTable from './CheckedInTable'

import rawProvinces from '../db/sync-provinces/provinces.json'
import { Item } from '../db/CheckinsResponse.type'
import Province, { EnGeographyName } from '../types/Province.type'
import { getThailandProvinceKeywords } from '../utilities/getThailandProvinces'
import getCheckedInByGeography from '../utilities/getCheckedInByGeography'

const Container = styled.div`
  margin-bottom: 16px;
`

interface Props {
  items: Item[]
}

const provinces: Province[] = rawProvinces

function CheckedInPointByGeography(props: Props) {
  const { items } = props

  const [enKeywordList, thKeywordList] = getThailandProvinceKeywords(items)
  const checkedInByGeography = getCheckedInByGeography(provinces, enKeywordList, thKeywordList)

  const tables = (Object.keys(checkedInByGeography) as EnGeographyName[]).map((geographyName) => (
    <CheckedInTable
      key={geographyName}
      title={geographyName}
      items={checkedInByGeography[geographyName]}
    />
  ))

  return <Container>{tables}</Container>
}

export default CheckedInPointByGeography
