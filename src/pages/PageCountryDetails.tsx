import { CountryDetails } from "../components/CountryDetails";
import { CountryContext } from "../contexts/country.context";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Layout } from "./Layout";

const PageCountryDetails = () => {
  const { countries } = useContext(CountryContext);

  const { countryName } = useParams();

  const country = countries.find(
    (country) => country.name.common === countryName
  );

  return (
    <Layout>
      <CountryDetails country={country} />
    </Layout>
  );
};

export { PageCountryDetails };
