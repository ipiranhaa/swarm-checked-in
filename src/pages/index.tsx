import React from 'react'

import rawCheckins from '../db/sync-checkins/checkins.json'
import { Item } from '../db/CheckinsResponse.type'

const checkins: Item[] = rawCheckins

function Index() {
  return (
    <ul>
      {checkins.map((item) => {
        const { name, location } = item.venue
        const { city, state, country } = location
        return (
          <li>
            {name} : {city}, {state}, {country}
          </li>
        )
      })}
    </ul>
  )
}

export default Index
