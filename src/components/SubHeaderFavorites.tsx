import { CountryContext } from "../contexts/country.context";
import { useContext } from "react";
import { Select } from "./Select";
import { Title } from "./Title";

const SubHeaderFavorites = () => {
  const { favorites } = useContext(CountryContext);

  return (
    <div className="w-full max-w-screen-xl pt-8 m-auto">
      <Title title="Seus países favoritos" />

      <div className="w-full flex justify-end items-center py-12 max-500:flex-col max-500:items-start">
        <Select disabled={favorites.length > 0 ? false : true} />
      </div>
    </div>
  );
};

export { SubHeaderFavorites };
