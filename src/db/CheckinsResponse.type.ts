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

export interface Item {
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

export interface ResponseJson {
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
