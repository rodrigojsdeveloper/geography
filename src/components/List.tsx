import { CountryContext } from "../contexts/country.context";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import { EmptyMessage } from "./EmptyMessage";
import { Loaded } from "./Loaded";
import { Arrow } from "./Arrow";
import { Card } from "./Card";

const List = () => {
  const { filteredCountries, loaded } = useContext(CountryContext);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false);

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true);

  const countriesPerPage = 65;

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1);
    setDisabledNextPage(
      currentPage * countriesPerPage >= filteredCountries.length
    );
  }, [currentPage, filteredCountries]);

  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;

  const paginatedCountries = filteredCountries.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (!disabledNextPage) {
      setCurrentPage(currentPage + 1);
    }

    window.scroll({ top: 0 });
  };

  const handlePreviousPage = () => {
    if (!disabledPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          <div className="w-full max-w-104 flex justify-between items-center mt-10 m-auto">
            <Arrow
              Icon={BsArrowLeft}
              handleFunc={handlePreviousPage}
              disabled={disabledPreviousPage}
            />
            <Arrow
              Icon={BsArrowRight}
              handleFunc={handleNextPage}
              disabled={disabledNextPage}
            />
          </div>
        </>
      ) : (
        <EmptyMessage message="No country was found!" />
      )}
    </div>
  );
};

export { List };
