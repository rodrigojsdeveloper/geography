import { PropsWithChildren } from 'react'
import { CountryContextProvider } from './country.context'

export const Providers = ({ children }: PropsWithChildren) => {
  return <CountryContextProvider>{children}</CountryContextProvider>
}
