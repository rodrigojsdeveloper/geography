import { LucideIcon } from 'lucide-react'

export interface ILink {
  href: string
  activeLink: string
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICountryProps {
  name: {
    common: string
    official: string
    nativeName: {
      por: {
        official: string
        common: string
      }
    }
  }
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: unknown
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: {
    por: string
  }
  translations: unknown
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: {
    eng: {
      f: string
      m: string
    }
  }
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  gini: {
    '2019': number
  }
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: {
    png: string
    svg: string
    alt: string
  }
  coatOfArms: {
    png: string
    svg: string
  }
  startOfWeek: string
  capitalInfo: {
    latlng: number[]
  }
  postalCode: {
    format: string
    regex: string
  }
  favorite: boolean
}

export interface ICountry {
  country: ICountryProps
}

export interface ICountriesPractice {
  country: ICountryProps
  countries: ICountryProps[]
  sortedCountries: ICountryProps[]
  setSortedCountries: React.Dispatch<React.SetStateAction<ICountryProps[]>>
  setCountry: React.Dispatch<React.SetStateAction<ICountryProps>>
}

export interface ICountryContextData {
  countries: ICountryProps[]
  filteredCountries: ICountryProps[]
  filteredFavorites: ICountryProps[]
  favorites: ICountryProps[]
  setFavorites: React.Dispatch<React.SetStateAction<ICountryProps[]>>
  handleSearchCountry: (name: string) => void
  handleSelectContinents: (region: string) => void
  handleSelectContinentsFavorites: (continent: string) => void
  favoriteCountryNames: string[]
  toggleFavoriteCountry: (countryName: string) => void
  loaded: boolean
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  disabledNextPage: boolean
  disabledPreviousPage: boolean
  handleNextPage: () => void
  handlePreviousPage: () => void
  setDisabledNextPage: React.Dispatch<React.SetStateAction<boolean>>
  setDisabledPreviousPage: React.Dispatch<React.SetStateAction<boolean>>
  currentPage: number
  countriesPerPage: number
  paginatedCountries: ICountryProps[]
  paginatedFavorites: ICountryProps[]
  options: string[]
  option: string
  setOption: React.Dispatch<React.SetStateAction<string>>
  closeSelect: boolean
  setCloseSelect: React.Dispatch<React.SetStateAction<boolean>>
  handleSelect: (option: string) => void
}

export interface IDado {
  Icon: LucideIcon
  title: string
  description?: string | string[]
}

export interface ITitle {
  title: string
}

export interface ISelect {
  disabled?: boolean
}

export interface IEmptyMessage {
  message: string
}

export interface IArrow {
  Icon: LucideIcon
  handleFunc: () => void
  disabled: boolean
  ariaLabel: string
}

export interface IButtons {
  disabledNextPage: boolean
  disabledPreviousPage: boolean
  handleNextPage: () => void
  handlePreviousPage: () => void
}

export interface IOption {
  option: string
}
