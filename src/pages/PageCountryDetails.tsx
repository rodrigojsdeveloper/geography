import { CountryDetails } from "../components/CountryDetails";
import { CountryContext } from "../contexts/country.context";
import { useContext } from "react";
import { Layout } from "./Layout";

const PageCountryDetails = () => {
  const { country } = useContext(CountryContext);

  return (
    <Layout>
      <CountryDetails country={country} />
    </Layout>
  );
};

export { PageCountryDetails };
