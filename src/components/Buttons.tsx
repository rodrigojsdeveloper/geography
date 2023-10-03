import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IButtons } from "../interfaces";
import { Arrow } from "./Arrow";

const Buttons = ({
  disabledNextPage,
  disabledPreviousPage,
  handleNextPage,
  handlePreviousPage,
}: IButtons) => {
  return (
    <div className="w-full max-w-104 flex justify-between items-center mt-11 m-auto">
      <Arrow
        Icon={BsArrowLeft}
        handleFunc={handlePreviousPage}
        disabled={disabledPreviousPage}
      />
      <Arrow
        Icon={BsArrowRight}
        handleFunc={handleNextPage}
        disabled={disabledNextPage}
      />
    </div>
  );
};

export { Buttons };
