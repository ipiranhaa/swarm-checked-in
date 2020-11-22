export type EnGeographyName =
  | 'Northern'
  | 'Central'
  | 'Northeastern'
  | 'Western'
  | 'Eastern'
  | 'Southern'

export type ThGeographyName =
  | 'ภาคเหนือ'
  | 'ภาคกลาง'
  | 'ภาคตะวันออกเฉียงเหนือ'
  | 'ภาคตะวันตก'
  | 'ภาคตะวันออก'
  | 'ภาคใต้'

interface Province {
  id: number
  en: string
  th: string
  geography: {
    id: number
    en: string
    th: string
  }
}

export default Province
