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

  const isFavorite = favoriteCountryNames.includes(country.name?.common);

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name?.common);
  };

  const coin = country.currencies
    ? country.currencies[Object.keys(country.currencies)[0]].name
    : "Unknown";
  const src = country.flags?.png ?? "";
  const name = country.name?.common ?? "Unknown";
  const region = country.region ?? "Unknown";
  const capital = country.capital ?? "Unknown";
  const area = `${country.area ?? 0} Km²`;
  const continents = country.continents ?? "Unknown";
  const population = country.population ?? 0;
  const isIndependent = country.independent ? "Yes" : "No";

  return (
    <div className="w-full max-w-800 h-281 flex bg-grey-1 border border-solid border-grey-3 rounded-def mt-40 m-auto max-768:w-fit max-768:h-fit max-768:flex-col">
      <figure className="w-full h-256 p-3 max-768:h-fit">
        <img
          src={src}
          alt={name}
          className="w-full h-256 rounded-def max-768:h-fit"
        />
      </figure>

      <div className="w-full max-w-336 flex flex-col bg-grey-2 border-l border-solid border-grey-3 p-4 rounded-e-def max-768:max-w-none max-768:border-l-0 max-768:border-t">
        <div className="w-full flex justify-between pb-8">
          <div className="w-full flex flex-col">
            <h2 className="font-bold text-lg">{name}</h2>

            <p className="font-bold text-base opacity-60">{region}</p>
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
            <Dado Icon={GoHome} title="Capital" description={capital} />
            <Dado Icon={BiArea} title="Area" description={area} />
            <Dado
              Icon={PiGlobeStandBold}
              title="Continent"
              description={continents}
            />
          </div>

          <div className="grid gap-5">
            <Dado
              Icon={PiCoinsBold}
              title="Official currency"
              description={coin}
            />
            <Dado Icon={GoPeople} title="Population" description={population} />
            <Dado
              Icon={FiFlag}
              title="Independent"
              description={isIndependent}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export { CountryDetails };
