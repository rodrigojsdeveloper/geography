import { IArrow } from '../interfaces'

const Arrow = ({ Icon, handleFunc, disabled }: IArrow) => {
  return (
    <button
      disabled={disabled}
      onClick={handleFunc}
      className="hover:bg-hoverLink active:bg-activeLink cursor-pointer rounded-def p-2 transition-all duration-300 ease-in disabled:cursor-default disabled:opacity-20 disabled:hover:bg-transparent"
    >
      <Icon size={25} color="#FFFFFF" />
    </button>
  )
}

export { Arrow }
