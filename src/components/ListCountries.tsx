import { CountryContext } from '../contexts/country.context'
import { useContext, useEffect } from 'react'
import EmptyMessage from './EmptyMessage'
import Buttons from './Buttons'
import Loading from './Loading'
import Card from './Card'

const ListCountries = () => {
  const {
    filteredCountries,
    loaded,
    disabledNextPage,
    disabledPreviousPage,
    handleNextPage,
    handlePreviousPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
    currentPage,
    countriesPerPage,
    paginatedCountries,
  } = useContext(CountryContext)

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1)
    setDisabledNextPage(
      currentPage * countriesPerPage >= filteredCountries.length,
    )
  }, [currentPage, filteredCountries])

  return (
    <div className="w-full">
      {loaded ? (
        <Loading />
      ) : filteredCountries.length > 0 ? (
        <>
          <menu className="grid w-full auto-rows-1fr grid-cols-3 gap-6 max-1024:grid-cols-2 max-768:grid-cols-1">
            {paginatedCountries.map((country) => (
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
        <EmptyMessage message="No country was found!" />
      )}
    </div>
  )
}

export default ListCountries
