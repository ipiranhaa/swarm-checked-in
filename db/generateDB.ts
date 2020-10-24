const fs = require('fs')
const axios = require('axios')

const credential = require('./credential')

interface CreatedBy {
  id: string
  firstName: string
  lastName: string
  gender: string
  relationship: string
  photo: {
    prefix: string
    suffix: string
  }
}

interface LabelLatLong {
  label: string
  lat: number
  lng: number
}

interface Location {
  address: string
  lat: number
  lng: number
  labeledLatLngs: LabelLatLong[]
  postalCode: string
  cc: string
  city: string
  state: string
  country: string
  formattedAddress: string[]
}

interface Category {
  id: string
  name: string
  pluralName: string
  shortName: string
  icon: {
    prefix: string
    suffix: string
  }
  primary: boolean
}

interface Venue {
  id: string
  name: string
  location: Location
  categories: Category[]
}

interface Item {
  id: string
  createAt: number
  type: string
  timeZoneOffset: number
  createdBy: CreatedBy
  venue: Venue
  likes: {
    count: number
    group: []
  }
  like: boolean
  isMayor: boolean
  photos: {
    count: number
    items: []
  }
  posts: {
    count: number
    textCount: number
  }
  comments: {
    count: number
  }
  source: {
    name: string
    url: string
  }
}

interface ResponseJson {
  meta: {
    code: number
    requestId: string
  }
  notification: {
    type: string
    item: {
      unreadCount: number
    }
  }[]
  response: {
    checkins: {
      count: number
      items: Item[]
    }
  }
}

const settings = {
  token: credential.OAUTH_TOKEN,
  v: '20190425',
  limit: 250,
}

const getCheckedIn = (offset: number) => {
  return new Promise<{
    items: Item[]
    count: number
  }>((resolve, reject) => {
    const url = `https://api.foursquare.com/v2/users/self/checkins?oauth_token=${settings.token}&v=${settings.v}&offset=${offset}&limit=${settings.limit}`
    axios
      .get(url)
      .then((res: { data: ResponseJson }) => {
        const { checkins } = res.data.response
        resolve({ items: checkins.items, count: checkins.count })
      })
      .catch((error: string) => {
        console.error(error)
        reject(error)
      })
  })
}

const main = async () => {
  try {
    const { items, count } = await getCheckedIn(0)
    console.log({ items })
    console.log({ count })
  } catch (error) {
    console.error(error)
  }
}

main()
