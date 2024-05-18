import { PropsWithChildren } from 'react'

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="w-full max-w-[25rem] text-3xl font-bold leading-normal">
      {children}
    </h1>
  )
}
