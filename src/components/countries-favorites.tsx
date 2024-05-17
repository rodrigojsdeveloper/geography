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
    disabled,
    handleNextPage,
    handlePreviousPage,
    setDisabled,
    currentPage,
    countriesPerPage,
    paginatedFavorites,
  } = useContext(CountryContext)

  useEffect(() => {
    setDisabled({
      nextPage: currentPage * countriesPerPage >= filteredFavorites.length,
    })
    setDisabled({ previousPage: currentPage === 1 })
  }, [
    currentPage,
    filteredFavorites,
    countriesPerPage,
    disabled.nextPage,
    disabled.previousPage,
    setDisabled,
  ])

  return (
    <section className="w-full">
      {loaded.favorites ? (
        <LoaderCircle className="m-auto mt-40 flex size-11 w-full animate-spin justify-center text-green-200" />
      ) : filteredFavorites.length > 0 ? (
        <>
          <menu className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paginatedFavorites.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </menu>
          {filteredFavorites.length >= 66 && (
            <Arrows
              disabledNextPage={disabled?.nextPage}
              disabledPreviousPage={disabled?.previousPage}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          )}
        </>
      ) : (
        <EmptyMessage>No favorite country found!</EmptyMessage>
      )}
    </section>
  )
}
