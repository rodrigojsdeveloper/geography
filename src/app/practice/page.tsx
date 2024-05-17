'use client'

import { useContext, useState, useEffect } from 'react'
import { CountryContext } from '@/contexts/country.context'
import { CountryProps } from '@/interfaces'
import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { Country } from '@/components/country'
import { Answer } from '@/components/answer'

export default function Practice() {
  const { countries } = useContext(CountryContext)

  const [sortedCountries, setSortedCountries] = useState<CountryProps[]>([])

  const [country, setCountry] = useState<CountryProps>({} as CountryProps)

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
