import Province from '../types/Province.type'

const getCheckedInProvinces = (
  enKeywordList: string[],
  thKeywordList: string[],
  province: Province
) => {
  const checkBy = (nameType: 'en' | 'th') => {
    let keywordList = enKeywordList
    if (nameType === 'th') {
      keywordList = thKeywordList
    }

    for (let index = 0; index < keywordList.length; index++) {
      const keyword = keywordList[index]
      if (keyword.includes(province[nameType].toLowerCase())) {
        return true
      }

      if (index === keywordList.length - 1) {
        return false
      }
    }

    return false
  }

  return checkBy('en') || checkBy('th')
}

export default getCheckedInProvinces
