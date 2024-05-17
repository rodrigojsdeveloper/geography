'use client'

import { useContext, useEffect } from 'react'
import { LoaderCircle } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'
import { EmptyMessage } from './empty-message'
import { Arrows } from './arrows'
import { Card } from './card'

export const CountriesFavorites = () => {
  const {
    filteredFavorites,
    loaded,
    disabledNextPage,
    disabledPreviousPage,
    handleNextPage,
    handlePreviousPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
    currentPage,
    countriesPerPage,
    paginatedFavorites,
  } = useContext(CountryContext)

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1)
    setDisabledNextPage(
      currentPage * countriesPerPage >= filteredFavorites.length,
    )
  }, [
    currentPage,
    filteredFavorites,
    countriesPerPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
  ])

  return (
    <section className="w-full">
      {loaded ? (
        <LoaderCircle className="m-auto mt-40 flex size-11 w-full animate-spin justify-center text-green-200" />
      ) : filteredFavorites.length > 0 ? (
        <>
          <menu className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paginatedFavorites.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </menu>
          <Arrows
            disabledNextPage={disabledNextPage}
            disabledPreviousPage={disabledPreviousPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <EmptyMessage>No favorite country found!</EmptyMessage>
      )}
    </section>
  )
}
