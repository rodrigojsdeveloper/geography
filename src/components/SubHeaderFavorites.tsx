import { CountryContext } from '../contexts/country.context'
import { useContext } from 'react'
import { Select } from './Select'
import { Title } from './Title'

const SubHeaderFavorites = () => {
  const { favorites } = useContext(CountryContext)

  return (
    <div className="w-full">
      <Title title="Your favorite countries" />

      <div className="flex w-full items-center justify-end py-12 max-500:flex-col max-500:items-start">
        <Select disabled={!(favorites.length > 0)} />
      </div>
    </div>
  )
}

export { SubHeaderFavorites }
