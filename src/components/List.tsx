import { CountryContext } from "../contexts/country.context";
import { useContext } from "react";
import { Card } from "./Card";

const List = () => {
  const { filteredCountries } = useContext(CountryContext);

  return (
    <menu className="w-full max-w-screen-xl flex justify-center flex-wrap m-auto">
      {filteredCountries.map((country) => (
        <Card country={country} key={country.name.common} />
      ))}
    </menu>
  );
};

export { List };
