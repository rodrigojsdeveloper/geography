import { ICountryProps, ICountryContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CountryContext = createContext({} as ICountryContextData);

export const CountryContextProvider = ({ children }: IChildren) => {
  const [countries, setCountries] = useState<ICountryProps[]>([]);

  const [filteredCountries, setFilteredCountries] = useState<ICountryProps[]>(
    []
  );

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

  return (
    <CountryContext.Provider
      value={{
        countries: filteredCountries,
        handleSearchCountry,
        handleSelectContinents,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
