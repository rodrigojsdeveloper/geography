import { CountryContext } from '../contexts/country.context'
import { EmptyMessage } from './EmptyMessage'
import { useContext, useEffect } from 'react'
import { Buttons } from './Buttons'
import { Loaded } from './Loaded'
import { Card } from './Card'

const ListFavorites = () => {
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
  }, [currentPage, filteredFavorites])

  return (
    <div className="w-full">
      {loaded ? (
        <Loaded />
      ) : filteredFavorites.length > 0 ? (
        <>
          <menu className="grid w-full auto-rows-1fr grid-cols-3 gap-6 max-1024:grid-cols-2 max-768:grid-cols-1">
            {paginatedFavorites.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </menu>
          <Buttons
            disabledNextPage={disabledNextPage}
            disabledPreviousPage={disabledPreviousPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <EmptyMessage message="No favorite country found!" />
      )}
    </div>
  )
}

export { ListFavorites }
