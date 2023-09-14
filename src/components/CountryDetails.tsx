import { AiOutlineHeart } from "react-icons/ai";
import { ICountry } from "../interfaces";

const CountryDetails = ({ country }: ICountry) => {
  return (
    <div className="w-full max-w-800 h-281 flex bg-grey-1 border border-solid border-grey-3">
      <img
        src={country?.flags.svg}
        alt={country?.name.common}
        className="w-full max-w-421 h-256 m-auto mx-2.5 object-cover"
      />

      <div className="w-full flex justify-between bg-grey-2 p-4">
        <div className="w-full flex flex-col">
          <h2 className="font-bold text-lg">{country?.name.common}</h2>

          <p className="font-bold text-base">{country?.region}</p>
        </div>

        <div className="h-fit cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
          <AiOutlineHeart size={24} />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export { CountryDetails };
