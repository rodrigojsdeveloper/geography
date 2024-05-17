import { Countries } from '@/components/countries'
import { Header } from '@/components/header'
import { SubHeader } from '@/components/sub-title'

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <Countries />
      <main></main>
    </>
  )
}
