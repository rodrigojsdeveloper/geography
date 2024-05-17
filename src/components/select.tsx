'use client'

import { useContext, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'
import { SelectProps } from '@/interfaces'
import { Option } from './option'
import { cn } from '@/utils/cn'

export const Select = ({ disabled }: SelectProps) => {
  const { options, option, closeSelect, setCloseSelect } =
    useContext(CountryContext)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setCloseSelect(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const toggleSelect = () => {
    if (!disabled) {
      setCloseSelect(!closeSelect)
    }
  }

  return (
    <div
      ref={selectRef}
      className={cn(
        'relative flex h-11 w-full max-w-40 flex-row items-center justify-between rounded-md bg-gray-200 py-2',
        !disabled ? 'cursor-pointer' : 'cursor-default opacity-60',
      )}
      onClick={toggleSelect}
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
        <ul className="absolute top-12 z-10 w-full rounded-md bg-gray-200">
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
