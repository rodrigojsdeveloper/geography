import { IArrow } from "../interfaces";

const Arrow = ({ Icon, handleFunc, disabled }: IArrow) => {
  return (
    <button
      disabled={disabled}
      onClick={handleFunc}
      className="p-2 cursor-pointer transition-all ease-in duration-300 rounded-def hover:bg-hoverLink active:bg-activeLink disabled:cursor-default disabled:opacity-20 disabled:hover:bg-transparent"
    >
      <Icon size={25} color="#FFFFFF" />
    </button>
  );
};

export { Arrow };
