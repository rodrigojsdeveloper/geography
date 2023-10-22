import { AiOutlineLoading } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className="m-auto mt-40 flex w-full animate-spin justify-center">
      <AiOutlineLoading size={45} color="#00875F" />
    </div>
  )
}

export default Loading
