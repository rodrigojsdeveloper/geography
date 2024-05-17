import { IDado } from '@/interfaces'

export const Dado = ({ title, description, Icon }: IDado) => {
  return (
    <div className="flex items-center">
      <Icon className="size-6 text-white" />

      <div className="w-full max-w-28 pl-1.5">
        <h2 className="pb-1 text-xs font-bold">{title}</h2>
        <p className="text-xs font-bold opacity-60">{description}</p>
      </div>
    </div>
  )
}
