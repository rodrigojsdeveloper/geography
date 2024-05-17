'use client'

import { useContext } from 'react'
import { ChevronDown } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'
import { ISelect } from '@/interfaces'
import { Option } from './option'
import { cn } from '@/utils/cn'

export const Select = ({ disabled }: ISelect) => {
  const { options, option, closeSelect, setCloseSelect } =
    useContext(CountryContext)

  return (
    <div
      className={cn(
        'relative flex h-11 w-full max-w-40 flex-row items-center justify-between rounded-md bg-gray-200 py-2',
        !disabled ? 'cursor-pointer' : 'cursor-default opacity-60',
      )}
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
        className={cn(
          'px-3 text-sm',
          !disabled ? 'cursor-pointer' : 'cursor-default',
        )}
      >
        {option}
      </label>
      {closeSelect && (
        <ul className="shadow-def absolute top-12 z-10 w-full rounded-md bg-gray-200">
          {options.map((option) => (
            <Option key={option} option={option} />
          ))}
        </ul>
      )}
      <ChevronDown
        className={cn(
          'absolute right-2 size-4 transition-transform duration-200',
          closeSelect && 'rotate-180',
        )}
      />
    </div>
  )
}
