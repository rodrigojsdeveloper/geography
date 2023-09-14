import { Header } from "../components/Header";
import { IChildren } from "../interfaces";

const Layout = ({ children }: IChildren) => {
  return (
    <div className="w-full min-h-screen bg-grey-1 text-white-1 p-4 font-sans">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
