import { CountryContext } from "../contexts/country.context";
import { Header } from "../components/Header";
import { IChildren } from "../interfaces";
import { useContext } from "react";

const Layout = ({ children }: IChildren) => {
  const { setOpenModal } = useContext(CountryContext);

  return (
    <div className="w-full min-h-screen px-4 pt-4 pb-7">
      <Header />
      <main
        onClick={() => setOpenModal(false)}
        className="w-full max-w-1300 min-h-screen m-auto"
      >
        {children}
      </main>
    </div>
  );
};

export { Layout };
