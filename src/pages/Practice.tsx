import { CountryContext } from "../contexts/country.context";
import { useContext, useState, useEffect } from "react";
import { Country } from "../components/Country";
import { Answer } from "../components/Answer";
import { ICountryProps } from "../interfaces";
import { Title } from "../components/Title";
import { Layout } from "./Layout";

const Practice = () => {
  const { countries } = useContext(CountryContext);

  const [favorites, setFavorites] = useState<ICountryProps[]>([]);

  const [country, setCountry] = useState<ICountryProps>({} as ICountryProps);

  useEffect(() => {
    for (let i = countries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [countries[i], countries[j]] = [countries[j], countries[i]];
    }

    setFavorites(countries);
    setCountry(favorites[0]);
  }, [countries, favorites]);

  return (
    <Layout>
      <Title title="What is the name of this country?" />
      <main className="w-full max-w-1440 flex justify-between items-center m-auto max-1024:flex-col">
        <Country country={country} />
        <Answer
          country={country}
          countries={countries}
          setCountry={setCountry}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </main>
    </Layout>
  );
};

export { Practice };
