import { CountryContext } from "../contexts/country.context";
import { useContext, useEffect } from "react";
import { EmptyMessage } from "./EmptyMessage";
import { Buttons } from "./Buttons";
import { Loaded } from "./Loaded";
import { Card } from "./Card";

const List = () => {
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
  } = useContext(CountryContext);

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1);
    setDisabledNextPage(
      currentPage * countriesPerPage >= filteredCountries.length
    );
  }, [currentPage, filteredCountries]);

  return (
    <div className="w-full">
      {loaded ? (
        <Loaded />
      ) : filteredCountries.length > 0 ? (
        <>
          <menu className="w-full grid grid-cols-3 auto-rows-1fr gap-6 max-1024:grid-cols-2 max-768:grid-cols-1">
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
  );
};

export { List };
