import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { IButtons } from '../interfaces'
import Arrow from './Arrow'

const Buttons = ({
  disabledNextPage,
  disabledPreviousPage,
  handleNextPage,
  handlePreviousPage,
}: IButtons) => {
  return (
    <div className="m-auto mt-11 flex w-full max-w-104 items-center justify-between">
      <Arrow
        Icon={BsArrowLeft}
        ariaLabel="arrow-left"
        handleFunc={handlePreviousPage}
        disabled={disabledPreviousPage}
      />
      <Arrow
        Icon={BsArrowRight}
        ariaLabel="arrow-right"
        handleFunc={handleNextPage}
        disabled={disabledNextPage}
      />
    </div>
  )
}

export default Buttons
