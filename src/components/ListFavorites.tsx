import { CountryContext } from "../contexts/country.context";
import { EmptyMessage } from "./EmptyMessage";
import { useContext } from "react";
import { Card } from "./Card";

const ListFavorites = () => {
  const { filteredFavorites } = useContext(CountryContext);

  return (
    <menu className="w-full max-w-1440 m-auto grid grid-cols-3 auto-rows-1fr gap-6 max-1024:grid-cols-2 max-768:grid-cols-1">
      {filteredFavorites.length > 0 ? (
        filteredFavorites.map((country) => (
          <Card country={country} key={country.name.common} />
        ))
      ) : (
        <EmptyMessage message="No favorite country found!" />
      )}
    </menu>
  );
};

export { ListFavorites };
