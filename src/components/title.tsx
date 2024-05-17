import { PropsWithChildren } from 'react'

export const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="w-full max-w-[25rem] text-4xl font-bold">{children}</h1>
}
