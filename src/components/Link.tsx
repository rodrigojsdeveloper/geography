import { useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { ILink } from '../interfaces'

const Link = ({ href, children, activeLink }: PropsWithChildren<ILink>) => {
  const navigate = useNavigate()

  return (
    <p
      onClick={() => navigate(href)}
      className={`cursor-pointer rounded-def p-3 text-base font-medium no-underline transition-all duration-300 ease-in ${activeLink} hover:text-primaryColor-1`}
    >
      {children}
    </p>
  )
}

export default Link
