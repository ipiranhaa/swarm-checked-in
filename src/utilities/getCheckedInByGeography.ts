import Province from '../types/Province.type'
import getCheckedInProvinces from './getCheckedInProvinces'

interface CheckedIn {
  name: string
  wasChecked: boolean
}

export interface CheckedInByGeography {
  Northern: CheckedIn[]
  Central: CheckedIn[]
  Northeastern: CheckedIn[]
  Western: CheckedIn[]
  Eastern: CheckedIn[]
  Southern: CheckedIn[]
}

const getCheckedInByGeography = (
  provinces: Province[],
  enKeywordList: string[],
  thKeywordList: string[]
) => {
  const result: CheckedInByGeography = {
    Northern: [],
    Central: [],
    Northeastern: [],
    Western: [],
    Eastern: [],
    Southern: [],
  }

  provinces.forEach((province) => {
    const checkedIn = {
      name: province.en,
      wasChecked: getCheckedInProvinces(enKeywordList, thKeywordList, province),
    }

    switch (province.geography.en) {
      case 'Northern':
        result['Northern'].push(checkedIn)
        break

      case 'Central':
        result['Central'].push(checkedIn)
        break

      case 'Northeastern':
        result['Northeastern'].push(checkedIn)
        break

      case 'Western':
        result['Western'].push(checkedIn)
        break

      case 'Eastern':
        result['Eastern'].push(checkedIn)
        break

      case 'Southern':
        result['Southern'].push(checkedIn)
        break

      default:
        break
    }
  })

  return result
}

export default getCheckedInByGeography
