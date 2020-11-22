import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Item } from '../db/CheckinsResponse.type'
import rawCheckins from '../db/sync-checkins/checkins.json'
import rawProvinces from '../db/sync-provinces/provinces.json'
import { getThailandProvinceKeywords } from '../utilities/getThailandProvinces'
import getCheckedInByGeography from '../utilities/getCheckedInByGeography'
import Province, { EnGeographyName } from '../types/Province.type'
import ProgressBar from '../components/ProgressBar'

const SectionTitle = styled.h2`
  text-align: center;
`

const checkins: Item[] = rawCheckins
const provinces: Province[] = rawProvinces

interface CheckInProgress {
  checked: number
  total: number
}

function Index() {
  const [enKeywordList, thKeywordList] = getThailandProvinceKeywords(checkins)
  const checkedInByGeography = getCheckedInByGeography(provinces, enKeywordList, thKeywordList)
  const geographyProgress = (Object.keys(checkedInByGeography) as EnGeographyName[]).reduce(
    (result, geographyName) => {
      result[geographyName] = {
        checked: checkedInByGeography[geographyName].filter((checkedIn) => checkedIn.wasChecked)
          .length,
        total: checkedInByGeography[geographyName].length,
      }

      return result
    },
    {
      Northern: {},
      Central: {},
      Northeastern: {},
      Western: {},
      Eastern: {},
      Southern: {},
    }
  )

  return (
    <Layout>
      <>
        <h1>Progress Summary</h1>
        {(Object.keys(geographyProgress) as EnGeographyName[]).map((geographyName) => (
          <>
            <SectionTitle>{geographyName}</SectionTitle>
            <ProgressBar
              inProgress={(geographyProgress[geographyName] as CheckInProgress).checked}
              total={(geographyProgress[geographyName] as CheckInProgress).total}
            />
          </>
        ))}
      </>
    </Layout>
  )
}

export default Index
