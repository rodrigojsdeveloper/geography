import PageCountryDetails from '../pages/PageCountryDetails'
import { Routes, Route } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Practice from '../pages/Practice'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/practice" element={<Practice />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/country/:countryName" element={<PageCountryDetails />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AllRoutes
