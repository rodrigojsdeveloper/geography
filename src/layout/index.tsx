import { CountryContext } from '../contexts/country.context'
import { useContext, PropsWithChildren } from 'react'
import Header from '../components/Header'

const Layout = ({ children }: PropsWithChildren) => {
  const { setOpenModal } = useContext(CountryContext)

  return (
    <div className="min-h-screen w-full px-4 pb-7 pt-4">
      <Header />
      <main
        onClick={() => setOpenModal(false)}
        className="m-auto w-full max-w-1300"
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
