import { CountryContextProvider } from "./country.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <CountryContextProvider>{children}</CountryContextProvider>;
};

export { Providers };
