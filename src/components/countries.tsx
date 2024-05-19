'use client'

import { useContext, useEffect } from 'react'
import { CountryContext } from '@/contexts/country.context'
import { EmptyMessage } from './empty-message'
import { Arrows } from './arrows'
import { Card } from './card'
import { Loading } from './loading'

export const Countries = () => {
  const {
    filteredCountries,
    loaded,
    disabled,
    handleNextPage,
    handlePreviousPage,
    setDisabled,
    currentPage,
    countriesPerPage,
    paginatedCountries,
  } = useContext(CountryContext)

  useEffect(() => {
    setDisabled({
      nextPage: currentPage * countriesPerPage >= filteredCountries.length,
      previousPage: currentPage === 1,
    })
  }, [
    currentPage,
    filteredCountries,
    countriesPerPage,
    disabled.nextPage,
    disabled.previousPage,
    setDisabled,
  ])

  return (
    <section className="w-full">
      {loaded.countries ? (
        <Loading />
      ) : filteredCountries.length > 0 ? (
        <>
          <menu className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paginatedCountries.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </menu>
          <Arrows
            disabledNextPage={disabled.nextPage}
            disabledPreviousPage={disabled.previousPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <EmptyMessage>No country was found!</EmptyMessage>
      )}
    </section>
  )
}
