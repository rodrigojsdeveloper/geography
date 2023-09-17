import { BiWorld } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full max-w-1300 mt-12 m-auto">
      <div className="w-full flex justify-between items-center border-t-2 border-solid border-grey-2 pt-6">
        <BiWorld size={36} color="#38BFD8" />

        <small className="font-medium text-sm opacity-60">
          Geography © 2023
        </small>

        <button
          onClick={() => window.scroll({ top: 0 })}
          className="w-43 h-43 bg-grey-2 border-2 border-solid border-grey-2 flex justify-center items-center transition-all ease-in duration-300 rounded-def hover:bg-grey-1"
        >
          <BsArrowUpShort size={24} color="#FFFFFF" />
        </button>
      </div>
    </footer>
  );
};

export { Footer };
