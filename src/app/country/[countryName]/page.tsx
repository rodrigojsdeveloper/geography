'use client'

import { useEffect, useContext } from 'react'
import { useParams } from 'next/navigation'
import { CountryContext } from '@/contexts/country.context'
import { CountryDetails } from '@/components/country-details'
import { Header } from '@/components/header'
import { Loading } from '@/components/loading'

export default function CountryDetailsPage() {
  const { countryName } = useParams()
  const { fetchCountry, country, loaded } = useContext(CountryContext)

  useEffect(() => {
    fetchCountry(countryName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      {loaded.country ? (
        <Loading />
      ) : (
        country && country.name && <CountryDetails country={country} />
      )}
    </>
  )
}
