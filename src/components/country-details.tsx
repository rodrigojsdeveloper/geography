'use client'

import { CountryContext } from '@/contexts/country.context'
import { CardProps } from '@/interfaces'
import { useContext } from 'react'
import { Dado } from './dado'
import {
  Coins,
  Earth,
  Flag,
  Heart,
  Home,
  LandPlot,
  UsersRound,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export const CountryDetails = ({ country }: CardProps) => {
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
  const area = `${country?.area?.toLocaleString('pt-BR') ?? 0} Km²`
  const continents = country.continents?.join(', ') ?? 'Unknown'
  const population = country.population?.toLocaleString('pt-BR') ?? 0
  const isIndependent = country.independent ? 'Yes' : 'No'

  return (
    <div className="mx-auto mt-16 flex h-fit w-fit max-w-[50rem] flex-col rounded-md border border-solid border-gray-100 bg-gray-300 md:w-full md:flex-row">
      <figure className="w-full p-3">
        <Image
          src={src}
          alt={name}
          width={597}
          height={418}
          className="no-select h-full w-full rounded-md"
        />
      </figure>

      <div className="flex w-full max-w-none flex-col rounded-e-md border-l-0 border-t border-solid border-gray-100 bg-gray-200 p-2.5 sm:p-4 md:max-w-xs md:border-none">
        <div className="flex w-full justify-between pb-8">
          <div className="flex w-full flex-col">
            <h2 className="text-lg font-bold">{name}</h2>

            <p className="text-base font-bold opacity-60">{region}</p>
          </div>

          <div className="h-fit cursor-pointer p-1.5 hover:rounded-full hover:bg-gray-100">
            <Heart
              onClick={toggleFavoriteStatus}
              className={cn(
                'size-6',
                isFavorite ? 'text-green-200' : 'text-white',
              )}
            />
          </div>
        </div>

        <section className="flex flex-col justify-between gap-5 sm:flex-row">
          <div className="flex flex-col gap-5">
            <Dado Icon={Home} title="Capital" description={capital} />
            <Dado Icon={LandPlot} title="Area" description={area} />
            <Dado Icon={Earth} title="Continent" description={continents} />
          </div>

          <div className="flex flex-col gap-5">
            <Dado Icon={Coins} title="Currency" description={coin} />
            <Dado
              Icon={UsersRound}
              title="Population"
              description={population}
            />
            <Dado Icon={Flag} title="Independent" description={isIndependent} />
          </div>
        </section>
      </div>
    </div>
  )
}
