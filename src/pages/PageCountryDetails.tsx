import { CountryDetails } from "../components/CountryDetails";
import { CountryContext } from "../contexts/country.context";
import { useState, useEffect, useContext } from "react";
import { ICountryProps } from "../interfaces";
import { Loaded } from "../components/Loaded";
import { useParams } from "react-router-dom";
import { Layout } from "./Layout";

const PageCountryDetails = () => {
  const { countryName } = useParams();

  const { countries } = useContext(CountryContext);

  const [country, setCountry] = useState<ICountryProps>({
    name: {
      common: "",
    },
    currencies: {
      UK: {
        name: "",
      },
    },
    flags: {
      png: "",
    },
  } as ICountryProps);

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const foundCountry = countries.find(
      (country) => country.name.common === countryName
    );

    if (foundCountry) {
      setCountry(foundCountry);
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [countryName, countries]);

  return (
    <Layout>
      {loaded ? <Loaded /> : <CountryDetails country={country} />}
    </Layout>
  );
};

export { PageCountryDetails };
