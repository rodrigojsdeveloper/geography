import { LucideIcon } from 'lucide-react'

export interface CountryProps {
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
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
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: {
    [key: string]: string
  }
  translations: {
    [key: string]: {
      official: string
      common: string
    }
  }
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: {
    eng: {
      f: string
      m: string
    }
    fra: {
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
    [key: string]: number
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
}

export interface CardProps {
  country: CountryProps
}

export interface CountriesPracticeProps {
  country: CountryProps
  countries: CountryProps[]
  sortedCountries: CountryProps[]
  setSortedCountries: React.Dispatch<React.SetStateAction<CountryProps[]>>
  setCountry: React.Dispatch<React.SetStateAction<CountryProps>>
}

export interface CountryContextDataProps {
  countries: CountryProps[]
  filteredCountries: CountryProps[]
  filteredFavorites: CountryProps[]
  favorites: CountryProps[]
  setFavorites: React.Dispatch<React.SetStateAction<CountryProps[]>>
  handleSearchCountry: (name: string) => void
  handleSelectContinents: (region: string) => void
  handleSelectContinentsFavorites: (continent: string) => void
  favoriteCountryNames: string[]
  toggleFavoriteCountry: (countryName: string) => void
  loaded: { country?: boolean; countries?: boolean; favorites?: boolean }
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  handleNextPage: () => void
  handlePreviousPage: () => void
  disabled: {
    nextPage: boolean
    previousPage: boolean
  }
  setDisabled: React.Dispatch<
    React.SetStateAction<{
      nextPage: boolean
      previousPage: boolean
    }>
  >
  currentPage: number
  countriesPerPage: number
  paginatedCountries: CountryProps[]
  paginatedFavorites: CountryProps[]
  options: string[]
  option: string
  setOption: React.Dispatch<React.SetStateAction<string>>
  closeSelect: boolean
  setCloseSelect: React.Dispatch<React.SetStateAction<boolean>>
  handleSelect: (option: string) => void
  country: CountryProps
  fetchCountry: (name: string | string[]) => void
}

export interface DadoProps {
  Icon: LucideIcon
  title: string
  description?: string | string[]
}

export interface SelectProps {
  disabled?: boolean
}

export interface ArrowProps {
  Icon: LucideIcon
  handleFunc: () => void
  disabled?: boolean
  ariaLabel: string
}

export interface ArrowsProps {
  disabledNextPage: boolean
  disabledPreviousPage: boolean
  handleNextPage: () => void
  handlePreviousPage: () => void
}

export interface OptionProps {
  option: string
}
