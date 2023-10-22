import { PiGlobeStandBold, PiCoinsBold } from 'react-icons/pi'
import { CountryContext } from '../contexts/country.context'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { GoHome, GoPeople } from 'react-icons/go'
import { ICountry } from '../interfaces'
import { BiArea } from 'react-icons/bi'
import { FiFlag } from 'react-icons/fi'
import { useContext } from 'react'
import Dado from './Dado'

const CountryDetails = ({ country }: ICountry) => {
  const { favoriteCountryNames, toggleFavoriteCountry } =
    useContext(CountryContext)

  const isFavorite = favoriteCountryNames.includes(country.name?.common)

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name?.common)
  }

  const coin = country.currencies
    ? country.currencies[Object.keys(country.currencies)[0]].name
    : 'Unknown'
  const src = country.flags?.png ?? ''
  const name = country.name?.common ?? 'Unknown'
  const region = country.region ?? 'Unknown'
  const capital = country.capital ?? 'Unknown'
  const area = `${country.area.toLocaleString('pt-BR') ?? 0} Km²`
  const continents = country.continents.join(', ') ?? 'Unknown'
  const population = country.population.toLocaleString('pt-BR') ?? 0
  const isIndependent = country.independent ? 'Yes' : 'No'

  return (
    <div className="m-auto mt-40 flex h-281 w-full max-w-800 rounded-def border border-solid border-grey-3 bg-grey-1 max-768:h-fit max-768:w-fit max-768:flex-col">
      <figure className="h-256 w-full p-3 max-768:h-fit">
        <img
          src={src}
          alt={name}
          className="h-256 w-full rounded-def max-768:h-fit"
        />
      </figure>

      <div className="flex w-full max-w-336 flex-col rounded-e-def border-l border-solid border-grey-3 bg-grey-2 p-4 max-768:max-w-none max-768:border-l-0 max-768:border-t max-768:px-2.5">
        <div className="flex w-full justify-between pb-8">
          <div className="flex w-full flex-col">
            <h2 className="text-lg font-bold">{name}</h2>

            <p className="text-base font-bold opacity-60">{region}</p>
          </div>

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

        <section className="flex w-full justify-between gap-5 max-370:flex-col">
          <div className="grid w-full gap-5">
            <Dado Icon={GoHome} title="Capital" description={capital} />
            <Dado Icon={BiArea} title="Area" description={area} />
            <Dado
              Icon={PiGlobeStandBold}
              title="Continent"
              description={continents}
            />
          </div>

          <div className="grid w-full justify-end gap-5">
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
  )
}

export default CountryDetails
