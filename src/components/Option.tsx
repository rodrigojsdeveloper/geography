import { CountryContext } from '../contexts/country.context'
import { IOption } from '../interfaces'
import { useContext } from 'react'

const Option = ({ option }: IOption) => {
  const { setOption, setCloseSelect, handleSelect } = useContext(CountryContext)

  return (
    <li
      className="rounded-def p-2 text-center hover:bg-grey-3"
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

export default Option
