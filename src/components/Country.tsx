import { PiGlobeStandBold } from "react-icons/pi";
import { ICountry } from "../interfaces";
import { GoHome } from "react-icons/go";
import { Dado } from "./Dado";

const Country = ({ country }: ICountry) => {
  return (
    <div className="w-full max-w-470 border border-solid border-grey-3">
      <figure className="w-full h-321 p-3 max-800:h-fit">
        <img
          src={country?.flags?.svg}
          alt={country?.name?.common}
          className="w-full h-295 object-cover max-800:h-fit"
        />
      </figure>

      <div className="w-full h-85 flex justify-between items-center bg-grey-2 border-t border-solid border-grey-3 py-5 px-11 max-425:flex-col max-425:h-140 max-425:items-start">
        <Dado Icon={GoHome} title="Capital" description={country?.capital} />
        <Dado
          Icon={PiGlobeStandBold}
          title="Continent"
          description={country?.continents}
        />
      </div>
    </div>
  );
};

export { Country };
