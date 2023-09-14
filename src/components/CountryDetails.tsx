import { AiOutlineHeart } from "react-icons/ai";
import { ICountry } from "../interfaces";

const CountryDetails = ({ country }: ICountry) => {
  return (
    <div className="w-full max-w-406 h-96 flex bg-grey-1 border border-solid border-grey-3 mb-5 mr-5 cursor-pointer hover:brightness-1.3">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full max-w-110 h-74 m-auto mx-2.5 object-cover"
      />

      <div className="w-full flex justify-between bg-grey-2 p-2">
        <div className="w-full flex flex-col justify-center">
          <h2 className="font-bold text-base mb-2">{country.name.common}</h2>

          <p className="font-bold text-xs">{country.region}</p>

          <div className="h-fit cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
            <AiOutlineHeart size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryDetails };
