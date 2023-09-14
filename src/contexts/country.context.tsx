import { ICountryProps, ICountryContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export const CountryContext = createContext({} as ICountryContextData);

export const CountryContextProvider = ({ children }: IChildren) => {
  const { country_name } = useParams();

  const [countries, setCountries] = useState<ICountryProps[]>([]);

  const [country, setCountry] = useState<ICountryProps>({} as ICountryProps);

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

  country_name?.length > 0 &&
    useEffect(() => {
      api
        .get(`name/${country_name}`)
        .then((res) => {
          setCountry(res.data)
        })
        .catch((error) => console.log(error));
    }, [country_name]);

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
        country,
        handleSearchCountry,
        handleSelectContinents,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
