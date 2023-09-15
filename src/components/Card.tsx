import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ICountry } from "../interfaces";

const Card = ({ country }: ICountry) => {
  let { countryName } = useParams();
  countryName = country?.name.common;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavoriteStatus = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);

    const storedFavorites = localStorage.getItem("favorites");
    const favoriteCountries = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];

    if (newIsFavorite) {
      favoriteCountries.push(countryName);
    } else {
      const index = favoriteCountries.indexOf(countryName);
      if (index !== -1) {
        favoriteCountries.splice(index, 1);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favoriteCountries));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favoriteCountries = JSON.parse(storedFavorites);
      setIsFavorite(favoriteCountries.includes(countryName));
    }
  }, [countryName]);

  return (
    <div className="w-full h-96 flex bg-grey-1 border border-solid border-grey-3 cursor-pointer hover:brightness-1.3">
      <img
        src={country?.flags.svg}
        alt={country?.name.common}
        className="w-full max-w-110 h-74 m-auto mx-2.5 object-cover"
      />

      <div className="w-full flex justify-between bg-grey-2 p-2">
        <a
          href={`country/${countryName}`}
          className="w-full flex flex-col justify-center"
        >
          <h2 className="font-bold text-base mb-2">{country?.name.common}</h2>
          <p className="font-bold text-xs opacity-60">{country?.region}</p>
        </a>

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
    </div>
  );
};

export { Card };
