import React from 'react'
import styled from 'styled-components'

import CheckedInTable from './CheckedInTable'

import rawProvinces from '../db/sync-provinces/provinces.json'
import { Item } from '../db/CheckinsResponse.type'
import Province, { EnGeographyName } from '../types/Province.type'
import getCheckedInProvinces from '../utilities/getCheckedInProvinces'
import getThailandProvinces from '../utilities/getThailandProvinces'
import getCheckedInByGeography, { CheckedInByGeography } from '../utilities/getCheckedInByGeography'

const Container = styled.div`
  margin-bottom: 16px;
`

interface Props {
  items: Item[]
}

const provinces: Province[] = rawProvinces

function CheckedInPointByGeography(props: Props) {
  const { items } = props

  const filteredProvinces = getThailandProvinces(items)

  const enKeywordList: string[] = []
  const thKeywordList: string[] = []
  filteredProvinces.forEach((province) => {
    if (/[a-z]/.test(province)) {
      enKeywordList.push(province)
    } else {
      thKeywordList.push(province)
    }
  })

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
