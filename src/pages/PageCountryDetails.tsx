import { CountryContext } from '../contexts/country.context'
import CountryDetails from '../components/CountryDetails'
import { useState, useEffect, useContext } from 'react'
import { ICountryProps } from '../interfaces'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Layout from '../layout'

const PageCountryDetails = () => {
  const { countryName } = useParams()

  const { countries } = useContext(CountryContext)

  const [country, setCountry] = useState<ICountryProps>({
    name: {
      common: '',
    },
    currencies: {
      UK: {
        name: '',
      },
    },
    flags: {
      png: '',
    },
    area: 0,
    population: 0,
    continents: [''],
  } as ICountryProps)

  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const foundCountry = countries.find(
      (country) => country.name.common === countryName,
    )

    if (foundCountry) {
      setCountry(foundCountry)
      setLoaded(false)
    } else {
      setLoaded(true)
    }
  }, [countryName, countries])

  return (
    <Layout>
      {loaded ? <Loading /> : <CountryDetails country={country} />}
    </Layout>
  )
}

export default PageCountryDetails
