import { CountryContext } from "../contexts/country.context";
import { EmptyMessage } from "./EmptyMessage";
import { useContext } from "react";
import { Card } from "./Card";

const List = () => {
  const { filteredCountries } = useContext(CountryContext);

  return (
    <menu className="w-full max-w-screen-xl flex justify-center flex-wrap m-auto">
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <Card country={country} key={country.name.common} />
        ))
      ) : (
        <EmptyMessage message="Nenhum país foi encontrado!" />
      )}
    </menu>
  );
};

export { List };
