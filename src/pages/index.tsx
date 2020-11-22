import React from 'react'

import Layout from '../components/Layout'
import { Item } from '../db/CheckinsResponse.type'
import rawCheckins from '../db/sync-checkins/checkins.json'
import ProvinceCheckedIn from '../components/ProvinceCheckedIn'

const checkins: Item[] = rawCheckins

function Index() {
  return (
    <Layout>
      <ProvinceCheckedIn items={checkins} />
    </Layout>
  )
}

export default Index
