import { useState } from 'react'
import { ICountriesPractice } from '@/interfaces'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronsRight } from 'lucide-react'

export const Answer = ({
  country,
  countries,
  setCountry,
  sortedCountries,
  setSortedCountries,
}: ICountriesPractice) => {
  const [count, setCount] = useState<number>(5)
  const [message, setMessage] = useState<boolean>(false)
  const [nextCountry, setNextCountry] = useState<boolean>(false)
  const [nextMessage, setNextMessage] = useState<string>('')
  const [rightCountry, setRightCountry] = useState<boolean>(false)
  const [rightMessage, setRightMessage] = useState<string>('')
  const [inputValue, setInputValue] = useState('')

  const answerSchema = z.object({
    name: z.string().min(1, 'Enter the name of the country'),
  })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(answerSchema),
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitFunction = handleSubmit((data: any) => {
    if (country?.name.common.toLowerCase() !== data.name.toLowerCase()) {
      setCount((prevCount) => {
        const updatedCount = prevCount - 1
        if (updatedCount === 0) {
          setNextCountry(true)
          setNextMessage(
            `No more trying! The name of this country is ${country?.name?.common}`,
          )
        }
        return updatedCount
      })

      setMessage(true)
      setNextCountry(false)
      setRightCountry(false)
      setNextMessage('Incorrect Answer!')
    } else {
      setMessage(false)
      setNextCountry(true)
      setRightCountry(true)
      setRightMessage(
        `Right answer! The name of this country is ${country?.name?.common}`,
      )

      countries = countries.filter((c) => c.name.common !== country.name.common)
    }
  })

  return (
    <div className="w-full max-w-[29.375rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-1.5 text-2xl font-bold">{count}</span>
          <p className="text-base font-medium">Remaining attempts</p>
        </div>

        {nextCountry ? (
          <ChevronsRight
            className="size-7 cursor-pointer"
            onClick={() => {
              for (let i = countries.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[countries[i], countries[j]] = [countries[j], countries[i]]
              }

              setSortedCountries(countries)
              setCountry(sortedCountries[0])
              setCount(5)
              setMessage(false)
              setRightCountry(false)
              setNextCountry(false)

              setInputValue('')
            }}
          />
        ) : (
          <ChevronsRight className="size-7 cursor-default opacity-60" />
        )}
      </div>

      <form className="mt-10 flex flex-col gap-6" onSubmit={onSubmitFunction}>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Respond</label>
          <input
            className="h-11 w-full rounded-md bg-gray-200 p-3 outline-none placeholder:focus:text-transparent"
            placeholder="Enter the answer"
            autoComplete="off"
            {...register('name')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {message ? (
            <p className="text-sm font-medium text-red-100">{nextMessage}</p>
          ) : count === 0 ? (
            <p className="text-sm font-medium text-orange-100">{nextMessage}</p>
          ) : null}
          {rightCountry && (
            <p className="text-sm font-medium text-green-100">{rightMessage}</p>
          )}
        </div>

        <button
          className="h-10 w-full rounded-md bg-green-200 transition-all duration-300 ease-in hover:bg-green-300 active:bg-green-300 disabled:cursor-default disabled:opacity-50"
          type="submit"
          disabled={!!(count === 0 || rightCountry)}
        >
          To check
        </button>
      </form>
    </div>
  )
}
