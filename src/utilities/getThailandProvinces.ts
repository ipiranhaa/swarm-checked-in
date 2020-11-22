import { Item } from '../db/CheckinsResponse.type'

const getThailandProvinces = (items: Item[]) =>
  items.reduce((list: string[], item: Item) => {
    const { state, country } = item.venue.location
    if (state && !list.includes(state.toLowerCase()) && country.toLowerCase() === 'thailand') {
      list = [...list, state.toLowerCase()]
    }
    return list
  }, [])

export const getThailandProvinceKeywords = (items: Item[]) => {
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

  return [enKeywordList, thKeywordList]
}

export default getThailandProvinces
