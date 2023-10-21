import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CountryContext } from "../contexts/country.context";
import { useContext, useState, useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "./Link";

const Header = () => {
  const { openModal, setOpenModal } = useContext(CountryContext);

  const [currentUrl, setCurrentUrl] = useState<string>(
    window.location.href.split("/")[3]
  );

  useEffect(() => {
    setCurrentUrl(window.location.href.split("/")[3]);
  }, []);

  return (
    <header className="w-full max-w-1300 flex justify-between items-center m-auto">
      <a href="/">
        <BiWorld size={36} color="#00875F" />
      </a>

      <nav className="flex justify-between max-768:hidden">
        <Link
          href="/"
          activeLink={
            currentUrl === "" ? "text-primaryColor-1" : "text-white-1"
          }
        >
          Explore
        </Link>
        <Link
          href="/practice"
          activeLink={
            currentUrl === "practice" ? "text-primaryColor-1" : "text-white-1"
          }
        >
          Practice
        </Link>
        <Link
          href="/favorites"
          activeLink={
            currentUrl === "favorites" ? "text-primaryColor-1" : "text-white-1"
          }
        >
          Favorites
        </Link>
      </nav>

      <AiOutlineMenu
        size={25}
        className={`cursor-pointer hidden max-768:flex ${
          openModal ? "max-768:hidden" : "max-768:flex"
        }`}
        onClick={() => setOpenModal(true)}
      />

      {openModal ? (
        <div className="w-full h-236 fixed top-0 left-0 z-50 flex flex-col bg-shadow backdrop-blur-sm py-5">
          <AiOutlineClose
            size={25}
            className="cursor-pointer absolute top-5 right-4"
            onClick={() => setOpenModal(false)}
          />

          <nav className="w-full h-200 flex flex-col justify-between items-center mt-4">
            <Link
              href="/"
              activeLink={
                currentUrl === "" ? "text-primaryColor-1" : "text-white-1"
              }
            >
              Explore
            </Link>
            <Link
              href="/practice"
              activeLink={
                currentUrl === "practice"
                  ? "text-primaryColor-1"
                  : "text-white-1"
              }
            >
              Practice
            </Link>
            <Link
              href="/favorites"
              activeLink={
                currentUrl === "favorites"
                  ? "text-primaryColor-1"
                  : "text-white-1"
              }
            >
              Favorites
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export { Header };
