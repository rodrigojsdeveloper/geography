import { CountryContext } from "../contexts/country.context";
import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  const { handleSearchCountry } = useContext(CountryContext);

  const [country, setCountry] = useState<string>("");

  return (
    <div className="w-full max-w-261 h-45 bg-grey-2 flex justify-between items-center rounded-def max-500:mb-3.5">
      <input
        className="w-full max-w-205 bg-grey-2 p-3 outline-none rounded-def placeholder:focus:text-transparent"
        placeholder="Name of the country"
        onChange={(e) => setCountry(e.target.value)}
      />

      <div
        className="h-45 flex justify-center items-center cursor-pointer p-2 transition-all ease-in duration-300 rounded-def hover:bg-grey-3"
        onClick={() => handleSearchCountry(country)}
      >
        <CiSearch size={24} />
      </div>
    </div>
  );
};

export { Input };
