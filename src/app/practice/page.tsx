'use client'

import { CountryContext } from '@/contexts/country.context'
import { useContext, useState, useEffect } from 'react'
import { ICountryProps } from '@/interfaces'
import { Country } from '@/components/country'
import { Answer } from '@/components/answer'
import { Title } from '@/components/title'
import { Header } from '@/components/header'

export default function Practice() {
  const { countries } = useContext(CountryContext)

  const [sortedCountries, setSortedCountries] = useState<ICountryProps[]>([])

  const [country, setCountry] = useState<ICountryProps>({} as ICountryProps)

  useEffect(() => {
    for (let i = countries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[countries[i], countries[j]] = [countries[j], countries[i]]
    }

    setSortedCountries(countries)
    setCountry(sortedCountries[0])
  }, [countries, sortedCountries])

  return (
    <>
      <Header />
      <main className="flex flex-col gap-12">
        <Title>What is the name of this country?</Title>
        <section className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-center">
          <Country country={country} />
          <Answer
            country={country}
            countries={countries}
            setCountry={setCountry}
            sortedCountries={sortedCountries}
            setSortedCountries={setSortedCountries}
          />
        </section>
      </main>
    </>
  )
}
