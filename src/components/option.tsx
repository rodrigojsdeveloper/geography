import { CountryContext } from '@/contexts/country.context'
import { IOption } from '@/interfaces'
import { useContext } from 'react'

export const Option = ({ option }: IOption) => {
  const { setOption, setCloseSelect, handleSelect } = useContext(CountryContext)

  return (
    <li
      className="rounded-md p-2 text-center hover:bg-gray-100"
      onClick={() => {
        setOption(option)
        setCloseSelect(false)
        handleSelect(option)
      }}
    >
      {option}
    </li>
  )
}
