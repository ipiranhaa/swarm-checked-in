import React from 'react'

import Layout from '../components/Layout'
import { Item } from '../db/CheckinsResponse.type'
import rawCheckins from '../db/sync-checkins/checkins.json'
import CheckedInList from '../components/CheckedInList'

const checkins: Item[] = rawCheckins

function All() {
  return (
    <Layout>
      <CheckedInList items={checkins} />
    </Layout>
  )
}

export default All
