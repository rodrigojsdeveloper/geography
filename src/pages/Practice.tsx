import { CountryContext } from '../contexts/country.context'
import { useContext, useState, useEffect } from 'react'
import { Country } from '../components/Country'
import { Answer } from '../components/Answer'
import { ICountryProps } from '../interfaces'
import { Title } from '../components/Title'
import { Layout } from './Layout'

const Practice = () => {
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
    <Layout>
      <Title title="What is the name of this country?" />
      <div className="m-auto flex w-full max-w-1200 items-center justify-between max-1024:flex-col">
        <Country country={country} />
        <Answer
          country={country}
          countries={countries}
          setCountry={setCountry}
          sortedCountries={sortedCountries}
          setSortedCountries={setSortedCountries}
        />
      </div>
    </Layout>
  )
}

export { Practice }
