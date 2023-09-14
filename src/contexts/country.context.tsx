import { ICountryProps, ICountryContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CountryContext = createContext({} as ICountryContextData);

export const CountryContextProvider = ({ children }: IChildren) => {
  const [countries, setCountries] = useState<ICountryProps[]>([]);

  useEffect(() => {
    api
      .get("all")
      .then((res) => setCountries(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <CountryContext.Provider
      value={{
        countries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
