import { CountryContext } from "../contexts/country.context";
import { EmptyMessage } from "./EmptyMessage";
import { useContext } from "react";
import { Loaded } from "./Loaded";
import { Card } from "./Card";

const List = () => {
  const { filteredCountries, loaded } = useContext(CountryContext);

  return (
    <menu className="w-full max-w-1440 m-auto grid grid-cols-3 auto-rows-1fr gap-6 max-1024:grid-cols-2 max-768:grid-cols-1">
      {loaded ? (
        <Loaded />
      ) : filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <Card country={country} key={country.name.common} />
        ))
      ) : (
        <EmptyMessage message="No country was found!" />
      )}
    </menu>
  );
};

export { List };
