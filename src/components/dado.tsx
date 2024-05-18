import { DadoProps } from '@/interfaces'

export const Dado = ({ title, description, Icon }: DadoProps) => {
  return (
    <li className="flex flex-row items-center gap-1.5">
      <Icon className="size-6 text-white" />

      <div className="flex w-full max-w-28 flex-col gap-1">
        <h2 className="text-xs font-bold">{title}</h2>
        <p className="text-xs font-bold opacity-60">{description}</p>
      </div>
    </li>
  )
}
