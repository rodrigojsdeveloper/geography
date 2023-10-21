import { CountryContext } from "../contexts/country.context";
import { useContext, PropsWithChildren } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  const { setOpenModal } = useContext(CountryContext);

  return (
    <>
      <div className="w-full min-h-screen px-4 pt-4 pb-7">
        <Header />
        <main
          onClick={() => setOpenModal(false)}
          className="w-full max-w-1300 m-auto"
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Layout };
