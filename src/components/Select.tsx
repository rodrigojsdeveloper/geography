import { CountryContext } from "../contexts/country.context";
import { ISelect } from "../interfaces";
import { useContext } from "react";
import { Option } from "./Option";

const Select = ({ disabled }: ISelect) => {
  const { options, option, closeSelect, setCloseSelect } =
    useContext(CountryContext);

  return (
    <div
      className={`w-full max-w-167 h-45 bg-grey-2 flex ${!disabled ? "cursor-pointer" : "cursor-default opacity-60"} flex-row items-center relative py-2 rounded-def ${closeSelect ? "bg-arrowClick" : "bg-arrow"} bg-no-repeat bg-right-4`}
      onClick={() => {
        if(!disabled) {
          
        setCloseSelect(true)

        if(closeSelect) {
          setCloseSelect(false)
        }
      }
      }}
    >
      <label className={`text-sm px-3 ${!disabled ? "cursor-pointer" : "cursor-default"}`}>{option}</label>
      {
        closeSelect ? (
          
      <ul className="absolute top-12 bg-grey-2 w-full z-50 shadow-def">
      {
        options.map(option => (
          <Option key={option} option={option} />
        ))
      }
    </ul>
        ) : null
      }
    </div>
  );
};

export { Select };
