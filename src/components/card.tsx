import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Heart } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'
import { ICountry } from '@/interfaces'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export const Card = ({ country }: ICountry) => {
  const pathname = usePathname()
  const [countryName, setCountryName] = useState<string>(pathname)

  const { favoriteCountryNames, toggleFavoriteCountry } =
    useContext(CountryContext)

  const isFavorite = favoriteCountryNames.includes(countryName)

  const toggleFavoriteStatus = () => {
    toggleFavoriteCountry(country.name.common)
  }

  useEffect(() => {
    setCountryName(country.name.common)
  }, [country.name.common])

  return (
    <div className="flex h-24 w-full cursor-pointer rounded-md border border-solid border-gray-100 bg-gray-300 duration-300">
      <figure className="w-full max-w-32 p-2">
        <Image
          src={country?.flags.png}
          alt={country?.name.common}
          width={112}
          height={78}
          className="h-full w-full rounded-md"
        />
      </figure>

      <div className="flex w-full justify-between rounded-e-md border-l border-solid border-gray-100 bg-gray-200 p-2">
        <a
          href={`country/${countryName}`}
          className="flex w-full flex-col justify-center"
        >
          <h2 className="mb-2 text-base font-extrabold">
            {country?.name.common}
          </h2>
          <p className="text-xs font-bold opacity-60">{country?.region}</p>
        </a>

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
    </div>
  )
}
