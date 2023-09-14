import { PageCountryDetails } from "../pages/PageCountryDetails";
import { Routes, Route } from "react-router-dom";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/country/:countryName" element={<PageCountryDetails />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { AllRoutes };
