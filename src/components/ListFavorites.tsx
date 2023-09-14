import { CountryContext } from "../contexts/country.context";
import { EmptyMessage } from "./EmptyMessage";
import { useContext } from "react";
import { Card } from "./Card";

const ListFavorites = () => {
  const { favorites } = useContext(CountryContext);

  return (
    <menu className="w-full max-w-screen-xl flex flex-wrap m-auto">
      {favorites.length > 0 ? (
        favorites.map((country) => (
          <Card country={country} key={country.name.common} />
        ))
      ) : (
        <EmptyMessage message="Nenhum país favorito encontrado!" />
      )}
    </menu>
  );
};

export { ListFavorites };
