import { yupResolver } from '@hookform/resolvers/yup'
import { ICountriesPractice } from '../interfaces'
import { BiSkipNextCircle } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'

const Answer = ({
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

  const schema = yup.object().shape({
    name: yup.string().required('Digite o nome do país'),
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitFunction = (data: any) => {
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
  }

  return (
    <div className="w-full max-w-470 max-1024:mt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-1.5 text-2xl font-bold">{count}</span>
          <p className="text-base font-medium">Remaining attempts</p>
        </div>

        {nextCountry ? (
          <BiSkipNextCircle
            size={28}
            className="cursor-pointer"
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
          <BiSkipNextCircle size={28} className="cursor-default opacity-60" />
        )}
      </div>

      <form className="mt-10" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="mb-6 flex flex-col">
          <label className="mb-3 text-sm font-medium">Respond</label>
          <input
            className="h-45 w-full rounded-def bg-grey-2 p-3 outline-none placeholder:focus:text-transparent"
            placeholder="Enter the answer"
            autoComplete="off"
            {...register('name')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {message ? (
            <p className="pt-6 text-sm font-medium text-red">{nextMessage}</p>
          ) : count === 0 ? (
            <p className="pt-6 text-sm font-medium text-orange">
              {nextMessage}
            </p>
          ) : null}
          {rightCountry && (
            <p className="pt-6 text-sm font-medium text-green">
              {rightMessage}
            </p>
          )}
        </div>

        <button
          className="h-40 w-full rounded-def bg-primaryColor-1 transition-all duration-300 ease-in hover:bg-primaryColor-2 active:bg-primaryColor-3 disabled:cursor-default disabled:opacity-50"
          type="submit"
          disabled={!!(count === 0 || rightCountry)}
        >
          To check
        </button>
      </form>
    </div>
  )
}

export { Answer }
