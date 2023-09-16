import { Header } from "../components/Header";
import { IChildren } from "../interfaces";

const Layout = ({ children }: IChildren) => {
  return (
    <div className="w-full min-h-screen bg-grey-1 text-white-1 px-4 pt-4 pb-7 font-sans">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
