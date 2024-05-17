'use client'

import { useEffect, useContext } from 'react'
import { useParams } from 'next/navigation'
import { CountryContext } from '@/contexts/country.context'
import { CountryDetails } from '@/components/country-details'
import { LoaderCircle } from 'lucide-react'
import { Header } from '@/components/header'

export default function CountryDetailsPage() {
  const { countryName } = useParams()
  const { fetchCountry, country, loaded } = useContext(CountryContext)

  useEffect(() => {
    fetchCountry(countryName)
  }, [])

  return (
    <>
      <Header />
      {loaded.country ? (
        <LoaderCircle className="m-auto mt-40 flex size-11 w-full animate-spin justify-center text-green-200" />
      ) : (
        <CountryDetails country={country} />
      )}
    </>
  )
}
