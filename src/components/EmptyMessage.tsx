import { IEmptyMessage } from '../interfaces'

const EmptyMessage = ({ message }: IEmptyMessage) => {
  return <p className="text-base font-medium">{message}</p>
}

export default EmptyMessage
