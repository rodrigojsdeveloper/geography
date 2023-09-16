import { ICountryProps } from "../interfaces";

const sortCountries = (countries: Array<ICountryProps>) => {
  const sortedCountries: Array<ICountryProps> = [];

  for (let i = countries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [countries[i], countries[j]] = [countries[j], countries[i]];
    sortedCountries.push(...[countries[i], countries[j]]);
  }

  return sortedCountries;
};

export { sortCountries };
