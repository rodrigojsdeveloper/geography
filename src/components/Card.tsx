import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { CountryContext } from '../contexts/country.context'
import { useParams } from 'react-router-dom'
import { ICountry } from '../interfaces'
import { useContext } from 'react'

const Card = ({ country }: ICountry) => {
  let { countryName } = useParams()
  countryName = country.name.common

  const { favoriteCountryNames, toggleFavoriteCountry } =
    useContext(CountryContext)

  const isFavorite = favoriteCountryNames.includes(countryName)

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name.common)
  }

  return (
    <div className="flex h-96 w-full cursor-pointer rounded-def border border-solid border-grey-3 bg-grey-1 transition-all duration-300 ease-in hover:brightness-1.3">
      <figure className="w-full max-w-127 p-2">
        <img
          src={country?.flags.png}
          alt={country?.name.common}
          className="h-full w-full rounded-def"
        />
      </figure>

      <div className="flex w-full justify-between rounded-e-def border-l border-solid border-grey-3 bg-grey-2 p-2">
        <a
          href={`country/${countryName}`}
          className="flex w-full flex-col justify-center"
        >
          <h2 className="mb-2 text-base font-extrabold">
            {country?.name.common}
          </h2>
          <p className="text-xs font-bold opacity-60">{country?.region}</p>
        </a>

        <div className="h-fit cursor-pointer p-1.5 hover:rounded-full hover:bg-grey-3">
          {isFavorite ? (
            <AiFillHeart
              size={24}
              color="#00875F"
              onClick={toggleFavoriteStatus}
            />
          ) : (
            <AiOutlineHeart size={24} onClick={toggleFavoriteStatus} />
          )}
        </div>
      </div>
    </div>
  )
}

export { Card }
