import { CountryContext } from "../contexts/country.context";
import { ChangeEvent, useContext } from "react";
import { ISelect } from "../interfaces";

const Select = ({ disabled }: ISelect) => {
  const { handleSelectContinents } = useContext(CountryContext);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    handleSelectContinents(selectedRegion);
  };

  return (
    <select
      className="w-full max-w-167 h-45 bg-grey-2 outline-none cursor-pointer p-3 disabled:cursor-not-allowed disabled:opacity-50"
      onChange={handleSelectChange}
      disabled={disabled}
    >
      <option disabled selected>
        Filtrar por região
      </option>
      <option value="">Todos</option>
      <option value="South America">América do Sul</option>
      <option value="North America">América do Norte</option>
      <option value="Antarctica">Antártida</option>
      <option value="Asia">Ásia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export { Select };
