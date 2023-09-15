import { ICountryProps, ICountryContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CountryContext = createContext({} as ICountryContextData);

export const CountryContextProvider = ({ children }: IChildren) => {
  const [count, setCount] = useState<number>(5);

  const [countries, setCountries] = useState<ICountryProps[]>([]);

  const [favorites, setFavorites] = useState<ICountryProps[]>([]);

  const [filteredCountries, setFilteredCountries] = useState<ICountryProps[]>(
    []
  );

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      const favoriteCountryNames = JSON.parse(storedFavorites);

      const favoriteCountries = countries.filter((country) =>
        favoriteCountryNames.includes(country.name.common)
      );

      setFavorites(favoriteCountries);
    }
  }, [countries]);

  useEffect(() => {
    api
      .get("all")
      .then((res) => {
        const data = res.data;
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.log(error));
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
    setFilteredCountries(
      favorites.filter((country) =>
        country.continents[0].toLowerCase().includes(continent.toLowerCase())
      )
    );
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        filteredCountries,
        favorites,
        setFavorites,
        handleSearchCountry,
        handleSelectContinents,
        handleSelectContinentsFavorites,
        count,
        setCount,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
