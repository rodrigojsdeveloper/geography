import { IArrow } from '@/interfaces'

export const Arrow = ({ Icon, handleFunc, disabled, ariaLabel }: IArrow) => {
  return (
    <button
      disabled={disabled}
      onClick={handleFunc}
      aria-label={ariaLabel}
      className="cursor-pointer rounded-md p-2 disabled:cursor-default disabled:opacity-20 disabled:hover:bg-transparent"
    >
      <Icon className="size-6 text-white" />
    </button>
  )
}
