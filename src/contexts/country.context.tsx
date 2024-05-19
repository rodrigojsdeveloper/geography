'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { CountryProps, CountryContextDataProps } from '@/interfaces'
import { api } from '@/services/api'
import { toast } from 'sonner'

export const CountryContext = createContext({} as CountryContextDataProps)

export const CountryContextProvider = ({ children }: PropsWithChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<{
    country?: boolean
    countries?: boolean
    favorites?: boolean
  }>({
    country: true,
    countries: true,
    favorites: true,
  })
  const [countries, setCountries] = useState<CountryProps[]>([])
  const [favorites, setFavorites] = useState<CountryProps[]>([])
  const [filteredCountries, setFilteredCountries] = useState<CountryProps[]>([])
  const [filteredFavorites, setFilteredFavorites] = useState<CountryProps[]>([])
  const [favoriteCountryNames, setFavoriteCountryNames] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [disabled, setDisabled] = useState<{
    nextPage: boolean
    previousPage: boolean
  }>({
    nextPage: false,
    previousPage: true,
  })
  const [option, setOption] = useState<string>('Filter by region')
  const [closeSelect, setCloseSelect] = useState<boolean>(false)
  const [country, setCountry] = useState<CountryProps>({} as CountryProps)

  const fetchCountries = () => {
    setLoaded({ countries: true })

    api
      .get('/all')
      .then((res) => {
        const data = res.data
        setCountries(data)
        setFilteredCountries(data)
      })
      .catch(() => toast.error('Failed to fetch countries.'))
      .finally(() => setLoaded({ countries: false }))
  }

  const fetchCountry = (name: string | string[]) => {
    setLoaded({ country: true })

    api
      .get(`/name/${name}`)
      .then((res) => setCountry(res.data[0]))
      .catch(() => toast.error('Failed to fetch the country.'))
      .finally(() => setLoaded({ country: false }))
  }

  const handleSearchCountry = (name: string) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase()),
      ),
    )
  }

  const handleSelectContinents = (region: string) => {
    setLoaded({ countries: true })
    if (region === 'All') {
      api
        .get('/all')
        .then((res) => setFilteredCountries(res.data))
        .catch(() => toast.error('Failed to fetch countries by region.'))
    } else {
      api
        .get(`/region/${region}`)
        .then((res) => setFilteredCountries(res.data))
        .catch(() => toast.error('Failed to fetch countries by region.'))
    }
    setLoaded({ countries: false })
  }

  const handleSelectContinentsFavorites = (continent: string) => {
    if (continent === 'Americas') {
      setFilteredFavorites([
        ...favorites.filter((country) =>
          country.continents.some((c) =>
            c.toLowerCase().includes('South America'.toLowerCase()),
          ),
        ),
        ...favorites.filter((country) =>
          country.continents.some((c) =>
            c.toLowerCase().includes('North America'.toLowerCase()),
          ),
        ),
      ])
    } else if (continent === 'All') {
      setFilteredFavorites(favorites)
    } else {
      setFilteredFavorites(
        favorites.filter((country) =>
          country.continents.some((c) =>
            c.toLowerCase().includes(continent.toLowerCase()),
          ),
        ),
      )
    }
  }

  const toggleFavoriteCountry = (countryName: string) => {
    setFavoriteCountryNames((prevFavorites) => {
      if (prevFavorites.includes(countryName)) {
        const newFavorites = prevFavorites.filter(
          (name) => name !== countryName,
        )
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        return newFavorites
      } else {
        const newFavorites = [...prevFavorites, countryName]
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        return newFavorites
      }
    })
  }

  const handleSelect = (option: string) => {
    handleSelectContinents(option)
    handleSelectContinentsFavorites(option)
  }

  const countriesPerPage = 66

  const startIndex = (currentPage - 1) * countriesPerPage
  const endIndex = startIndex + countriesPerPage

  const paginatedCountries = filteredCountries.slice(startIndex, endIndex)
  const paginatedFavorites = filteredFavorites.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (!disabled.nextPage) {
      setCurrentPage(currentPage + 1)
    }

    window.scroll({ top: 0 })
  }

  const handlePreviousPage = () => {
    if (!disabled.previousPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    setLoaded({ favorites: true })

    const storedFavorites = localStorage.getItem('favorites')

    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites)

      const favoriteCountries = countries.filter((country) =>
        favoriteCountryNames.includes(country.name.common),
      )

      setFavorites(favoriteCountries)
      setFilteredFavorites(favoriteCountries)
    }

    setLoaded({ favorites: false })
  }, [countries])

  useEffect(() => fetchCountries(), [])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites)
      setFavoriteCountryNames(favoriteCountryNames)
    }
  }, [])

  useEffect(() => {
    const favoriteCountries = countries.filter((country) =>
      favoriteCountryNames.includes(country.name.common),
    )
    setFavorites(favoriteCountries)
    setFilteredFavorites(favoriteCountries)
  }, [favoriteCountryNames, countries])

  const countryContextData: CountryContextDataProps = {
    countries,
    filteredCountries,
    filteredFavorites,
    favorites,
    setFavorites,
    handleSearchCountry,
    handleSelectContinents,
    handleSelectContinentsFavorites,
    favoriteCountryNames,
    toggleFavoriteCountry,
    loaded,
    openModal,
    setOpenModal,
    disabled,
    handleNextPage,
    handlePreviousPage,
    setDisabled,
    currentPage,
    countriesPerPage,
    paginatedCountries,
    paginatedFavorites,
    option,
    setOption,
    closeSelect,
    setCloseSelect,
    handleSelect,
    country,
    fetchCountry,
  }

  return (
    <CountryContext.Provider value={countryContextData}>
      {children}
    </CountryContext.Provider>
  )
}
