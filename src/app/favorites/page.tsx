import { Header } from '@/components/header'
import { SubHeaderFavorites } from '@/components/subtitle-favorite'
import { CountriesFavorites } from '@/components/countries-favorites'

export default function Favorite() {
  return (
    <>
      <Header />
      <SubHeaderFavorites />
      <CountriesFavorites />
    </>
  )
}
