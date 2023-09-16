import { ICountryProps, ICountryContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CountryContext = createContext({} as ICountryContextData);

export const CountryContextProvider = ({ children }: IChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [count, setCount] = useState<number>(5);

  const [loaded, setLoaded] = useState<boolean>(false);

  const [countries, setCountries] = useState<ICountryProps[]>([]);

  const [favorites, setFavorites] = useState<ICountryProps[]>([]);

  const [filteredCountries, setFilteredCountries] = useState<ICountryProps[]>(
    []
  );

  const [filteredFavorites, setFilteredFavorites] = useState<ICountryProps[]>(
    []
  );

  const [favoriteCountryNames, setFavoriteCountryNames] = useState<string[]>(
    []
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false);

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true);

  useEffect(() => {
    setLoaded(true);

    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites);

      const favoriteCountries = countries.filter((country) =>
        favoriteCountryNames.includes(country.name.common)
      );

      setLoaded(false);
      setFavorites(favoriteCountries);
      setFilteredFavorites(favoriteCountries);
    }

    setLoaded(false);
  }, [countries]);

  useEffect(() => {
    setLoaded(true);

    api
      .get("all")
      .then((res) => {
        const data = res.data;
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaded(false));
  }, []);

  const handleSearchCountry = (name: string) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const handleSelectContinents = (continent: string) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.continents[0].toLowerCase().includes(continent.toLowerCase())
      )
    );
  };

  const handleSelectContinentsFavorites = (continent: string) => {
    setFilteredFavorites(
      favorites.filter((country) =>
        country.continents[0].toLowerCase().includes(continent.toLowerCase())
      )
    );
  };

  const toggleFavoriteCountry = (countryName: string) => {
    setFavoriteCountryNames((prevFavorites) => {
      if (prevFavorites.includes(countryName)) {
        const newFavorites = prevFavorites.filter(
          (name) => name !== countryName
        );
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      } else {
        const newFavorites = [...prevFavorites, countryName];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      }
    });
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites);
      setFavoriteCountryNames(favoriteCountryNames);
    }
  }, []);

  const countriesPerPage = 65;

  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;

  const paginatedCountries = filteredCountries.slice(startIndex, endIndex);
  const paginatedFavorites = filteredFavorites.slice(startIndex, endIndex);

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
    <CountryContext.Provider
      value={{
        countries,
        filteredCountries,
        filteredFavorites,
        favorites,
        setFavorites,
        handleSearchCountry,
        handleSelectContinents,
        handleSelectContinentsFavorites,
        count,
        setCount,
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
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
