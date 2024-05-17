'use client'

import { useContext, useState } from 'react'
import { Search } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'

export const Input = () => {
  const { handleSearchCountry } = useContext(CountryContext)
  const [country, setCountry] = useState<string>('')

  return (
    <div className="mb-3.5 flex h-11 w-full max-w-72 items-center justify-between rounded-md bg-gray-200 sm:mb-0">
      <input
        className="w-full max-w-52 rounded-md bg-gray-200 px-3 py-2 outline-none placeholder:focus:text-transparent"
        placeholder="Name of the country"
        onChange={(e) => setCountry(e.target.value)}
      />

      <button
        className="flex cursor-pointer items-center  justify-center rounded-md p-2 duration-200 hover:bg-gray-100"
        onClick={() => handleSearchCountry(country)}
      >
        <Search className="size-6" />
      </button>
    </div>
  )
}
