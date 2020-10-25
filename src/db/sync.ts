import 'dotenv/config'

import axios from 'axios'

import createFolder from './createFolder'
import { CHECKINS_SYNC_FOLDER } from './SyncConstants'
import { saveCheckinsSyncToFile } from './saveDataToFile'
import { ResponseJson, Item } from './CheckinsResponse.type'

createFolder(CHECKINS_SYNC_FOLDER)

const settings = {
  token: process.env.SWARM_OAUTH_TOKEN,
  v: '20190425',
  limit: 250,
}

const getCheckedIn = (offset: number) => {
  return new Promise<{
    items: Item[]
  }>((resolve, reject) => {
    const url = `https://api.foursquare.com/v2/users/self/checkins?oauth_token=${settings.token}&v=${settings.v}&offset=${offset}&limit=${settings.limit}`
    axios
      .get(url)
      .then((res: { data: ResponseJson }) => {
        const { checkins } = res.data.response
        resolve({ items: checkins.items })
      })
      .catch((error: string) => {
        console.error(error)
        reject(error)
      })
  })
}

const main = async () => {
  let continueFetching = true
  let index = 0
  let totalCheckins: Item[] = []

  try {
    while (continueFetching) {
      const { items } = await getCheckedIn(settings.limit * index)
      totalCheckins = [...totalCheckins, ...items]
      if (items.length === 0) {
        continueFetching = false
      }
      index += 1
    }
    console.log({ count: totalCheckins.length })
    await saveCheckinsSyncToFile('checkins.json', totalCheckins)
  } catch (error) {
    console.error(error)
  }
}

main()

export default undefined
