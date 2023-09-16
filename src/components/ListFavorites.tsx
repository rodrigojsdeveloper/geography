import { CountryContext } from "../contexts/country.context";
import { EmptyMessage } from "./EmptyMessage";
import { useContext } from "react";
import { Loaded } from "./Loaded";
import { Card } from "./Card";

const ListFavorites = () => {
  const { filteredFavorites, loaded } = useContext(CountryContext);

  return (
    <div className="w-full max-w-1440 m-auto">
      {loaded ? (
        <Loaded />
      ) : filteredFavorites.length > 0 ? (
        <menu className="w-full grid grid-cols-3 auto-rows-1fr gap-6 max-1024:grid-cols-2 max-768:grid-cols-1">
          {filteredFavorites.map((country) => (
            <Card country={country} key={country.name.common} />
          ))}
        </menu>
      ) : (
        <EmptyMessage message="No favorite country found!" />
      )}
    </div>
  );
};

export { ListFavorites };
