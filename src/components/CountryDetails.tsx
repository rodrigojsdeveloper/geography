import { PiGlobeStandBold, PiCoinsBold } from "react-icons/pi";
import { GoHome, GoPeople } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { ICountry } from "../interfaces";
import { BiArea } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";
import { Dado } from "./Dado";

const CountryDetails = ({ country }: ICountry) => {
  const coin = country?.currencies[Object.keys(country.currencies)[0]].name;

  return (
    <div className="w-full max-w-800 h-281 flex bg-grey-1 border border-solid border-grey-3 mt-40 m-auto max-800:w-fit max-800:h-fit max-800:flex-col">
      <figure className="w-full max-w-421 h-256 p-3 max-800:h-fit">
        <img
          src={country?.flags.svg}
          alt={country?.name.common}
          className="h-256 max-800:h-fit"
        />
      </figure>

      <div className="w-full flex flex-col bg-grey-2 p-4">
        <div className="w-full flex justify-between pb-8">
          <div className="w-full flex flex-col">
            <h2 className="font-bold text-lg">{country?.name.common}</h2>

            <p className="font-bold text-base opacity-60">{country?.region}</p>
          </div>

          <div className="h-fit cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
            <AiOutlineHeart size={24} />
          </div>
        </div>

        <div className="w-full flex justify-between max-370:flex-col">
          <div>
            <Dado
              Icon={GoHome}
              title="Capital"
              description={country?.capital}
            />
            <Dado
              Icon={BiArea}
              title="Area"
              description={`${country?.area} Km²`}
            />
            <Dado
              Icon={PiGlobeStandBold}
              title="Continent"
              description={country?.continents}
            />
          </div>

          <div>
            <Dado
              Icon={PiCoinsBold}
              title="Official currency"
              description={coin}
            />
            <Dado
              Icon={GoPeople}
              title="Population"
              description={country?.population}
            />
            <Dado
              Icon={FiFlag}
              title="Independent"
              description={country?.independent ? "Yes" : "No"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryDetails };
