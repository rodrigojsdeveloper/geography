import { CountryContext } from "../contexts/country.context";
import { ChangeEvent, useContext } from "react";
import { ISelect } from "../interfaces";

const Select = ({ disabled }: ISelect) => {
  const { handleSelectContinents, handleSelectContinentsFavorites } =
    useContext(CountryContext);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    handleSelectContinents(selectedRegion);
    handleSelectContinentsFavorites(selectedRegion);
  };

  return (
    <select
      className="w-full max-w-167 h-45 bg-grey-2 outline-none cursor-pointer py-2 px-3 rounded-def appearance-none bg-button bg-no-repeat bg-right-4 disabled:cursor-not-allowed disabled:opacity-50"
      onChange={handleSelectChange}
      disabled={disabled}
      defaultValue={"Filter by region"}
    >
      <option disabled>Filter by region</option>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      <option value="Oceania">Oceania</option>
      <option value="South America">South America</option>
    </select>
  );
};

export { Select };
