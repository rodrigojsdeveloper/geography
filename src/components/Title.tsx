import { ITitle } from '../interfaces'

const Title = ({ title }: ITitle) => {
  return (
    <div className="w-full py-12">
      <h1 className="w-full max-w-400 text-4xl font-bold">{title}</h1>
    </div>
  )
}

export default Title
