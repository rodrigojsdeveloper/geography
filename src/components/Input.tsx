import { CountryContext } from '../contexts/country.context'
import { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const Input = () => {
  const { handleSearchCountry } = useContext(CountryContext)

  const [country, setCountry] = useState<string>('')

  return (
    <div className="flex h-45 w-full max-w-261 items-center justify-between rounded-def bg-grey-2 max-500:mb-3.5">
      <input
        className="w-full max-w-205 rounded-def bg-grey-2 px-3 py-2 outline-none placeholder:focus:text-transparent"
        placeholder="Name of the country"
        onChange={(e) => setCountry(e.target.value)}
      />

      <div
        className="flex h-45 cursor-pointer items-center justify-center rounded-def p-2 transition-all duration-300 ease-in hover:bg-grey-3"
        onClick={() => handleSearchCountry(country)}
      >
        <CiSearch size={24} />
      </div>
    </div>
  )
}

export { Input }
