'use client'

import { useContext, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Earth, Menu, X } from 'lucide-react'
import { CountryContext } from '@/contexts/country.context'
import { LINKS } from '@/utils/constants'
import { cn } from '@/utils/cn'

export const Header = () => {
  const pathname = usePathname()
  const { openModal, setOpenModal } = useContext(CountryContext)
  const [currentUrl, setCurrentUrl] = useState<string>(pathname)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentUrl(pathname)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false)
      }
    }

    if (openModal) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openModal, setOpenModal])

  const toggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <header className="flex w-full items-center justify-between">
      <Link href="/" aria-label="world">
        <Earth className="size-9 text-green-200" />
      </Link>

      <nav className="hidden flex-row items-center justify-between gap-6 sm:flex">
        {LINKS.map(({ name, href }, index) => (
          <Link
            key={`${name}-${index}`}
            href={href}
            className={cn(
              'text-base font-medium duration-200 hover:text-green-200',
              currentUrl === href ? 'text-green-200' : 'text-white-100',
            )}
          >
            {name}
          </Link>
        ))}
      </nav>

      <Menu
        size={25}
        className={cn(
          'cursor-pointer sm:hidden',
          openModal ? 'hidden' : 'block',
        )}
        onClick={toggleOpenModal}
      />

      {openModal && (
        <div
          ref={modalRef}
          className="fixed inset-x-0 top-0 z-10 flex w-full flex-col border-b border-solid border-gray-100 bg-gray-300 sm:hidden"
        >
          <X
            size={25}
            className="absolute right-4 top-5 cursor-pointer"
            onClick={toggleOpenModal}
          />

          <nav className="mt-10 flex w-full flex-col items-center gap-6 py-6">
            {LINKS.map(({ name, href }, index) => (
              <Link
                key={`${name}-${index}`}
                href={href}
                className={cn(
                  'text-base font-medium duration-200 hover:text-green-200',
                  currentUrl === href ? 'text-green-200' : 'text-white-100',
                )}
                onClick={toggleOpenModal}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
