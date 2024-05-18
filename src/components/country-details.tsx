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
  Phone,
  Clock,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export const CountryDetails = ({ country }: CardProps) => {
  const { favoriteCountryNames, toggleFavoriteCountry } =
    useContext(CountryContext)

  const isFavorite = favoriteCountryNames.includes(country.name.common)

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name.common)
  }

  const details = [
    { Icon: Home, title: 'Capital', description: country.capital },
    {
      Icon: Coins,
      title: 'Currency',
      description: country.currencies[Object.keys(country.currencies)[0]].name,
    },
    {
      Icon: LandPlot,
      title: 'Area',
      description: `${country.area.toLocaleString('pt-BR')} Km²`,
    },
    {
      Icon: UsersRound,
      title: 'Population',
      description: country.population.toLocaleString('pt-BR'),
    },
    {
      Icon: Earth,
      title: 'Continent',
      description: country.continents.join(', '),
    },
    {
      Icon: Flag,
      title: 'Independent',
      description: country.independent ? 'Yes' : 'No',
    },
    {
      Icon: Phone,
      title: 'Phone Code',
      description: `${country.idd.root}${country.idd.suffixes[0]}`,
    },
    { Icon: Clock, title: 'Timezone', description: country.timezones[0] },
  ]

  return (
    <div className="mx-auto mt-16 flex min-h-72 w-full max-w-md flex-col rounded-md border border-solid border-gray-100 bg-gray-300 md:max-w-[55rem] md:flex-row">
      <figure className="w-full p-3">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          width={597}
          height={418}
          className="no-select h-full w-full rounded-md"
        />
      </figure>

      <div className="flex w-full max-w-none flex-col rounded-e-md border-l-0 border-t border-solid border-gray-100 bg-gray-200 p-2.5 sm:p-4 md:max-w-sm md:border-none">
        <div className="flex w-full justify-between pb-8">
          <div className="flex w-full flex-col">
            <h2 className="text-lg font-bold">{country.name.common}</h2>
            <p className="text-base font-bold opacity-60">{country.region}</p>
          </div>

          <div className="h-fit cursor-pointer p-1.5 hover:rounded-full hover:bg-gray-100">
            <Heart
              onClick={toggleFavoriteStatus}
              className={cn(
                'size-6 duration-200',
                isFavorite ? 'fill-green-200 text-green-200' : 'text-white',
              )}
            />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-36 md:gap-x-12">
          {details.map((detail, index) => (
            <Dado
              key={index}
              Icon={detail.Icon}
              title={detail.title}
              description={detail.description}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
