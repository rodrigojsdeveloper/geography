import { PropsWithChildren } from 'react'

export const EmptyMessage = ({ children }: PropsWithChildren) => {
  return <p className="text-base font-medium">{children}</p>
}
