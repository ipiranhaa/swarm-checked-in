import { Item } from '../db/CheckinsResponse.type'

const getThailandProvinces = (items: Item[]) =>
  items.reduce((list: string[], item: Item) => {
    const { state, country } = item.venue.location
    if (state && !list.includes(state.toLowerCase()) && country.toLowerCase() === 'thailand') {
      list = [...list, state.toLowerCase()]
    }
    return list
  }, [])

export default getThailandProvinces
