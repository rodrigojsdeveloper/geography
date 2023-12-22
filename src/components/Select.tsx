import { CountryContext } from '../contexts/country.context'
import { ISelect } from '../interfaces'
import { useContext } from 'react'
import Option from './Option'

const Select = ({ disabled }: ISelect) => {
  const { options, option, closeSelect, setCloseSelect } =
    useContext(CountryContext)

  return (
    <div
      className={`flex h-45 w-full max-w-167 bg-grey-2 ${
        !disabled ? 'cursor-pointer' : 'cursor-default opacity-60'
      } relative flex-row items-center rounded-def py-2 ${
        closeSelect ? 'bg-arrowClick' : 'bg-arrow'
      } bg-right-4 bg-no-repeat`}
      onClick={() => {
        if (!disabled) {
          setCloseSelect(true)

          if (closeSelect) {
            setCloseSelect(false)
          }
        }
      }}
    >
      <label
        className={`px-3 text-sm ${
          !disabled ? 'cursor-pointer' : 'cursor-default'
        }`}
      >
        {option}
      </label>
      {closeSelect ? (
        <ul className="absolute top-12 z-50 w-full rounded-def bg-grey-2 shadow-def">
          {options.map((option) => (
            <Option key={option} option={option} />
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Select
