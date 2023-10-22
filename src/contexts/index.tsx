import { CountryContextProvider } from './country.context'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return <CountryContextProvider>{children}</CountryContextProvider>
}

export default Providers
