import { CountryContextProvider } from './country.context'
import { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren) => {
  return <CountryContextProvider>{children}</CountryContextProvider>
}
