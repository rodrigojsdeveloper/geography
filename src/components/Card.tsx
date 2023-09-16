import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CountryContext } from "../contexts/country.context";
import { useParams } from "react-router-dom";
import { ICountry } from "../interfaces";
import { useContext } from "react";

const Card = ({ country }: ICountry) => {
  let { countryName } = useParams();
  countryName = country.name.common;

  const { favoriteCountryNames, toggleFavoriteCountry } =
    useContext(CountryContext);

  const isFavorite = favoriteCountryNames.includes(countryName);

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name.common);
  };

  return (
    <div className="w-full flex bg-grey-1 border border-solid border-grey-3 cursor-pointer rounded-def hover:brightness-1.3">
      <figure className="w-full max-w-127 p-2">
        <img
          src={country?.flags.png}
          alt={country?.name.common}
          className="w-full h-full rounded-def"
        />
      </figure>

      <div className="w-full flex justify-between rounded-e-def bg-grey-2 border-l border-solid border-grey-3 p-2">
        <a
          href={`country/${countryName}`}
          className="w-full flex flex-col justify-center"
        >
          <h2 className="font-bold text-base mb-2">{country?.name.common}</h2>
          <p className="font-bold text-xs opacity-60">{country?.region}</p>
        </a>

        <div className="cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
          {isFavorite ? (
            <AiFillHeart
              size={24}
              color="#38BFD8"
              onClick={toggleFavoriteStatus}
            />
          ) : (
            <AiOutlineHeart size={24} onClick={toggleFavoriteStatus} />
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
