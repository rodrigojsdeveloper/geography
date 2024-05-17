'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { ICountryProps, ICountryContextData } from '@/interfaces'
import { api } from '@/services/api'

export const CountryContext = createContext({} as ICountryContextData)

export const CountryContextProvider = ({ children }: PropsWithChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const [loaded, setLoaded] = useState<boolean>(false)

  const [countries, setCountries] = useState<ICountryProps[]>([])

  const [favorites, setFavorites] = useState<ICountryProps[]>([])

  const [filteredCountries, setFilteredCountries] = useState<ICountryProps[]>(
    [],
  )

  const [filteredFavorites, setFilteredFavorites] = useState<ICountryProps[]>(
    [],
  )

  const [favoriteCountryNames, setFavoriteCountryNames] = useState<string[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1)

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false)

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true)

  const [option, setOption] = useState<string>('Filter by region')

  const [closeSelect, setCloseSelect] = useState<boolean>(false)

  const options: string[] = [
    'All',
    'Africa',
    'Americas',
    'Antarctic',
    'Asia',
    'Europe',
    'Oceania',
  ]

  useEffect(() => {
    setLoaded(true)

    const storedFavorites = localStorage.getItem('favorites')

    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites)

      const favoriteCountries = countries.filter((country) =>
        favoriteCountryNames.includes(country.name.common),
      )

      setLoaded(false)
      setFavorites(favoriteCountries)
      setFilteredFavorites(favoriteCountries)
    }

    setLoaded(false)
  }, [countries])

  useEffect(() => {
    setLoaded(true)

    api
      .get('all')
      .then((res) => {
        const data = res.data
        setCountries(data)
        setFilteredCountries(data)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaded(false))
  }, [])

  const handleSearchCountry = (name: string) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase()),
      ),
    )
  }

  const handleSelectContinents = (region: string) => {
    if (region === 'All') {
      api
        .get('all')
        .then((res) => setFilteredCountries(res.data))
        .catch((error) => console.error(error))
    } else {
      api
        .get(`region/${region}`)
        .then((res) => setFilteredCountries(res.data))
        .catch((error) => console.error(error))
    }
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

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites)
      setFavoriteCountryNames(favoriteCountryNames)
    }
  }, [])

  const countriesPerPage = 66

  const startIndex = (currentPage - 1) * countriesPerPage
  const endIndex = startIndex + countriesPerPage

  const paginatedCountries = filteredCountries.slice(startIndex, endIndex)
  const paginatedFavorites = filteredFavorites.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (!disabledNextPage) {
      setCurrentPage(currentPage + 1)
    }

    window.scroll({ top: 0 })
  }

  const handlePreviousPage = () => {
    if (!disabledPreviousPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  const countryContextData: ICountryContextData = {
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
    disabledNextPage,
    disabledPreviousPage,
    handleNextPage,
    handlePreviousPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
    currentPage,
    countriesPerPage,
    paginatedCountries,
    paginatedFavorites,
    options,
    option,
    setOption,
    closeSelect,
    setCloseSelect,
    handleSelect,
  }

  return (
    <CountryContext.Provider value={countryContextData}>
      {children}
    </CountryContext.Provider>
  )
}
