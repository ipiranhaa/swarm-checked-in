import React from 'react'

import Layout from '../components/Layout'
import { Item } from '../db/CheckinsResponse.type'
import rawCheckins from '../db/sync-checkins/checkins.json'
import CheckedInPointByGeography from '../components/CheckedInPointByGeography'

const checkins: Item[] = rawCheckins

function Geography() {
  return (
    <Layout>
      <CheckedInPointByGeography items={checkins} />
    </Layout>
  )
}

export default Geography
