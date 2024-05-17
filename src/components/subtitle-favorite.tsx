'use client'

import { useContext } from 'react'
import { CountryContext } from '@/contexts/country.context'
import { Select } from './select'
import { Title } from './title'

export const SubHeaderFavorites = () => {
  const { favorites } = useContext(CountryContext)

  return (
    <section className="flex w-full flex-col gap-12">
      <Title>Your favorite countries</Title>

      <div className="flex w-full items-center justify-end">
        <Select disabled={!(favorites.length > 0)} />
      </div>
    </section>
  )
}
