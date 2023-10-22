import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { CountryContext } from '../contexts/country.context'
import { useContext, useState, useEffect } from 'react'
import { BiWorld } from 'react-icons/bi'
import Link from './Link'

const Header = () => {
  const { openModal, setOpenModal } = useContext(CountryContext)

  const [currentUrl, setCurrentUrl] = useState<string>(
    window.location.href.split('/')[3],
  )

  useEffect(() => {
    setCurrentUrl(window.location.href.split('/')[3])
  }, [])

  return (
    <header className="m-auto flex w-full max-w-1300 items-center justify-between">
      <a href="/" aria-label="world">
        <BiWorld size={36} color="#00875F" />
      </a>

      <nav className="flex justify-between max-768:hidden">
        <Link
          href="/"
          activeLink={
            currentUrl === '' ? 'text-primaryColor-1' : 'text-white-1'
          }
          setOpenModal={setOpenModal}
        >
          Explore
        </Link>
        <Link
          href="/practice"
          activeLink={
            currentUrl === 'practice' ? 'text-primaryColor-1' : 'text-white-1'
          }
          setOpenModal={setOpenModal}
        >
          Practice
        </Link>
        <Link
          href="/favorites"
          activeLink={
            currentUrl === 'favorites' ? 'text-primaryColor-1' : 'text-white-1'
          }
          setOpenModal={setOpenModal}
        >
          Favorites
        </Link>
      </nav>

      <AiOutlineMenu
        size={25}
        className={`hidden cursor-pointer max-768:flex ${
          openModal ? 'max-768:hidden' : 'max-768:flex'
        }`}
        onClick={() => setOpenModal(true)}
      />

      {openModal ? (
        <div className="fixed left-0 top-0 z-50 flex h-236 w-full flex-col bg-shadow py-5 backdrop-blur-sm">
          <AiOutlineClose
            size={25}
            className="absolute right-4 top-5 cursor-pointer"
            onClick={() => setOpenModal(false)}
          />

          <nav className="mt-4 flex h-200 w-full flex-col items-center justify-between">
            <Link
              href="/"
              activeLink={
                currentUrl === '' ? 'text-primaryColor-1' : 'text-white-1'
              }
              setOpenModal={setOpenModal}
            >
              Explore
            </Link>
            <Link
              href="/practice"
              activeLink={
                currentUrl === 'practice'
                  ? 'text-primaryColor-1'
                  : 'text-white-1'
              }
              setOpenModal={setOpenModal}
            >
              Practice
            </Link>
            <Link
              href="/favorites"
              activeLink={
                currentUrl === 'favorites'
                  ? 'text-primaryColor-1'
                  : 'text-white-1'
              }
              setOpenModal={setOpenModal}
            >
              Favorites
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
