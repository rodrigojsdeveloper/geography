import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'
import { CardProps } from '@/interfaces'
import { cn } from '@/utils/cn'

export const Card = ({ country }: CardProps) => {
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
    <li className="relative flex min-h-24 w-full cursor-pointer rounded-md border border-solid border-gray-100 bg-gray-300 duration-300">
      <Link href={`country/${countryName}`} className="flex w-full flex-row">
        <figure className="flex w-full max-w-32 items-center p-2">
          <Image
            src={country?.flags.png}
            alt={country?.name.common}
            width={112}
            height={78}
            className="no-select h-[4.625rem] w-[6.875rem] rounded-md"
          />
        </figure>

        <section className="flex w-full justify-between rounded-e-md border-l border-solid border-gray-100 bg-gray-200 p-2">
          <div className="flex w-full flex-col justify-center">
            <h2 className="mb-2 mr-10 text-base font-extrabold">
              {country?.name.common}
            </h2>
            <p className="text-xs font-bold opacity-60">{country?.region}</p>
          </div>
        </section>
      </Link>

      <div className="absolute right-3 top-2.5 h-fit cursor-pointer rounded-full bg-gray-200 p-1.5 hover:bg-gray-100">
        <Heart
          onClick={toggleFavoriteStatus}
          className={cn(
            'size-6 duration-200',
            isFavorite ? 'fill-green-200 text-green-200' : 'text-white',
          )}
        />
      </div>
    </li>
  )
}
