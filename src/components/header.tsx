'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useState, useEffect } from 'react'
import { CountryContext } from '@/contexts/country.context'
import { Earth, Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

export const Header = () => {
  const pathname = usePathname()
  const { openModal, setOpenModal } = useContext(CountryContext)
  const [currentUrl, setCurrentUrl] = useState<string>(pathname)

  useEffect(() => {
    setCurrentUrl(pathname)
  }, [pathname])

  return (
    <header className="flex w-full items-center justify-between">
      <Link href="/" aria-label="world">
        <Earth className="size-9 text-green-200" />
      </Link>

      <nav className="hidden flex-row items-center justify-between gap-6 sm:flex">
        <Link
          href="/"
          className={cn(
            'text-base font-medium duration-200 hover:text-green-200',
            currentUrl === '/' ? 'text-green-200' : 'text-white-100',
          )}
          onClick={() => setOpenModal(false)}
        >
          Explore
        </Link>
        <Link
          href="/practice"
          className={cn(
            'text-base font-medium duration-200 hover:text-green-200',
            currentUrl === 'practice' ? 'text-green-200' : 'text-white-100',
          )}
          onClick={() => setOpenModal(false)}
        >
          Practice
        </Link>
        <Link
          href="/favorites"
          className={cn(
            'text-base font-medium duration-200 hover:text-green-200',
            currentUrl === 'favorites' ? 'text-green-200' : 'text-white-100',
          )}
          onClick={() => setOpenModal(false)}
        >
          Favorites
        </Link>
      </nav>

      <Menu
        size={25}
        className={cn(
          'cursor-pointer sm:hidden',
          openModal ? 'hidden' : 'block',
        )}
        onClick={() => setOpenModal(true)}
      />

      {openModal && (
        <div className="fixed inset-x-0 top-0 z-10 flex w-full flex-col backdrop-blur-sm">
          <X
            size={25}
            className="absolute right-4 top-5 cursor-pointer"
            onClick={() => setOpenModal(false)}
          />

          <nav className="mt-10 flex w-full flex-col items-center gap-4 py-2.5">
            <Link
              href="/"
              className={cn(
                'text-base font-medium duration-200 hover:text-green-200',
                currentUrl === '/' ? 'text-green-200' : 'text-white-100',
              )}
              onClick={() => setOpenModal(false)}
            >
              Explore
            </Link>
            <Link
              href="/practice"
              className={cn(
                'text-base font-medium duration-200 hover:text-green-200',
                currentUrl === 'practice' ? 'text-green-200' : 'text-white-100',
              )}
              onClick={() => setOpenModal(false)}
            >
              Practice
            </Link>
            <Link
              href="/favorites"
              className={cn(
                'text-base font-medium duration-200 hover:text-green-200',
                currentUrl === 'favorites'
                  ? 'text-green-200'
                  : 'text-white-100',
              )}
              onClick={() => setOpenModal(false)}
            >
              Favorites
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
