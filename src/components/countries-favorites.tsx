'use client'

import { useContext, useEffect } from 'react'
import { CountryContext } from '@/contexts/country.context'
import { EmptyMessage } from './empty-message'
import { Arrows } from './arrows'
import { Card } from './card'
import { Loading } from './loading'

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
      previousPage: currentPage === 1,
    })
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
        <Loading />
      ) : filteredFavorites.length > 0 ? (
        <>
          <menu className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paginatedFavorites.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </menu>
          <Arrows
            disabledNextPage={disabled?.nextPage}
            disabledPreviousPage={disabled?.previousPage}
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
