import React from 'react'

import rawCheckins from '../db/sync-checkins/checkins.json'
import { Item } from '../db/CheckinsResponse.type'
import ProvinceCheckedIn from '../components/ProvinceCheckedIn'

const checkins: Item[] = rawCheckins

function Index() {
  return (
    <>
      <ProvinceCheckedIn items={checkins} />
    </>
  )
}

export default Index
