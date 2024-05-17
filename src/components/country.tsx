import Image from 'next/image'
import { ICountry } from '@/interfaces'
import { Dado } from './dado'
import { Earth, Home } from 'lucide-react'

export const Country = ({ country }: ICountry) => {
  return (
    <div className="w-full max-w-[29.375rem] rounded-md border border-solid border-gray-100">
      <figure className="h-fit w-full p-3">
        <Image
          src={country?.flags?.png}
          alt={country?.name?.common}
          width={444}
          height={295.8}
          className="h-fit w-full rounded-md"
        />
      </figure>

      <div className="flex h-36 w-full flex-col items-start justify-between rounded-b-md border-t border-solid border-gray-100 bg-gray-200 px-8 py-5 sm:h-24 sm:flex-row sm:items-center sm:px-11">
        <Dado Icon={Home} title="Capital" description={country?.capital} />
        <Dado
          Icon={Earth}
          title="Continent"
          description={country?.continents}
        />
      </div>
    </div>
  )
}
