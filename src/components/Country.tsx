import { PiGlobeStandBold } from "react-icons/pi";
import { ICountry } from "../interfaces";
import { GoHome } from "react-icons/go";
import { Dado } from "./Dado";

const Country = ({ country }: ICountry) => {
  return (
    <div className="w-full max-w-470 border border-solid border-grey-3 rounded-def max-1024:mb-10">
      <figure className="w-full h-321 p-3 max-1024:h-fit">
        <img
          src={country?.flags?.png}
          alt={country?.name?.common}
          className="w-full h-295 rounded-def max-1024:h-fit"
        />
      </figure>

      <div className="w-full h-85 flex justify-between items-center bg-grey-2 border-t border-solid border-grey-3 py-5 px-11 rounded-b-def max-425:px-8 max-370:flex-col max-370:h-140 max-370:items-start">
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
