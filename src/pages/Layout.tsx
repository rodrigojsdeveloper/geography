import { Header } from "../components/Header";
import { IChildren } from "../interfaces";

const Layout = ({ children }: IChildren) => {
  return (
    <div className="w-full min-h-screen px-4 pt-4 pb-7">
      <Header />
      <main className="w-full max-w-1300 m-auto">{children}</main>
    </div>
  );
};

export { Layout };
