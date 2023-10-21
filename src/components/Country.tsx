import { PiGlobeStandBold } from 'react-icons/pi'
import { ICountry } from '../interfaces'
import { GoHome } from 'react-icons/go'
import { Dado } from './Dado'

const Country = ({ country }: ICountry) => {
  return (
    <div className="w-full max-w-470 rounded-def border border-solid border-grey-3 max-1024:mb-10">
      <figure className="h-321 w-full p-3 max-1024:h-fit">
        <img
          src={country?.flags?.png}
          alt={country?.name?.common}
          className="h-295 w-full rounded-def max-1024:h-fit"
        />
      </figure>

      <div className="flex h-85 w-full items-center justify-between rounded-b-def border-t border-solid border-grey-3 bg-grey-2 px-11 py-5 max-425:px-8 max-370:h-140 max-370:flex-col max-370:items-start">
        <Dado Icon={GoHome} title="Capital" description={country?.capital} />
        <Dado
          Icon={PiGlobeStandBold}
          title="Continent"
          description={country?.continents}
        />
      </div>
    </div>
  )
}

export { Country }
