import { AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { ICountry } from "../interfaces";
import { Link } from "react-router-dom";

const Card = ({ country }: ICountry) => {
  let { countryName } = useParams();
  countryName = country?.name.common;

  return (
    <Link
      to={`/country/${countryName}`}
      className="w-full h-96 flex bg-grey-1 border border-solid border-grey-3 cursor-pointer hover:brightness-1.3"
    >
      <img
        src={country?.flags.svg}
        alt={country?.name.common}
        className="w-full max-w-110 h-74 m-auto mx-2.5 object-cover"
      />

      <div className="w-full flex justify-between bg-grey-2 p-2">
        <div className="w-full flex flex-col justify-center">
          <h2 className="font-bold text-base mb-2">{country?.name.common}</h2>

          <p className="font-bold text-xs opacity-60">{country?.region}</p>
        </div>

        <div className="h-fit cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
          <AiOutlineHeart size={24} />
        </div>
      </div>
    </Link>
  );
};

export { Card };
