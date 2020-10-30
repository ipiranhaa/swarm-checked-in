import React, { useState } from 'react'

import rawCheckins from '../db/sync-checkins/checkins.json'
import { Item } from '../db/CheckinsResponse.type'

const checkins: Item[] = rawCheckins

function Index() {
  const [items, setItems] = useState(checkins)
  const [sortingDirection, setSortingDirection] = useState('asc')
  const [sortingKey, setSortingKey] = useState('date')

  const sortBy = (key: string) => ({})

  return (
    <table>
      <thead>
        <tr>
          <th>Date {sortingKey === 'date' ? (sortingDirection === 'asc' ? '^' : 'v') : ''}</th>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const { name, location } = item.venue
          const { city, state, country } = location
          return (
            <tr key={item.id}>
              <td>{item.createdAt}</td>
              <td>{name}</td>
              <td>{city}</td>
              <td>{state}</td>
              <td>{country}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Index
