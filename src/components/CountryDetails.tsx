import { PiGlobeStandBold, PiCoinsBold } from "react-icons/pi";
import { CountryContext } from "../contexts/country.context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoHome, GoPeople } from "react-icons/go";
import { ICountry } from "../interfaces";
import { BiArea } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";
import { useContext } from "react";
import { Dado } from "./Dado";

const CountryDetails = ({ country }: ICountry) => {
  const { favoriteCountryNames, toggleFavoriteCountry } =
    useContext(CountryContext);

  const coin = country.currencies[Object.keys(country.currencies)[0]].name;

  const isFavorite = favoriteCountryNames.includes(country.name?.common);

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name?.common);
  };

  return (
    <div className="w-full max-w-800 h-281 flex bg-grey-1 border border-solid border-grey-3 rounded-def mt-40 m-auto max-800:w-fit max-800:h-fit max-800:flex-col">
      <figure className="w-full max-w-421 h-256 p-3 max-800:h-fit">
        <img
          src={country.flags?.svg}
          alt={country.name?.common}
          className="h-256 rounded-def max-800:h-fit"
        />
      </figure>

      <div className="w-full flex flex-col bg-grey-2 p-4 rounded-e-def">
        <div className="w-full flex justify-between pb-8">
          <div className="w-full flex flex-col">
            <h2 className="font-bold text-lg">{country.name?.common}</h2>

            <p className="font-bold text-base opacity-60">{country.region}</p>
          </div>

          <div className="h-fit cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
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

        <section className="w-full flex justify-between max-370:flex-col gap-5">
          <div className="grid gap-5">
            <Dado Icon={GoHome} title="Capital" description={country.capital} />
            <Dado
              Icon={BiArea}
              title="Area"
              description={`${country.area} Km²`}
            />
            <Dado
              Icon={PiGlobeStandBold}
              title="Continent"
              description={country.continents}
            />
          </div>

          <div className="grid gap-5">
            <Dado
              Icon={PiCoinsBold}
              title="Official currency"
              description={coin}
            />
            <Dado
              Icon={GoPeople}
              title="Population"
              description={country.population}
            />
            <Dado
              Icon={FiFlag}
              title="Independent"
              description={country.independent ? "Yes" : "No"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export { CountryDetails };
