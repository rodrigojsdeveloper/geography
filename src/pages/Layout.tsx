import { Header } from "../components/Header";
import { IChildren } from "../interfaces";

const Layout = ({ children }: IChildren) => {
  return (
    <div className="w-full h-screen bg-grey-1 text-white-1 p-4">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
