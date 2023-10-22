import Select from './Select'
import Input from './Input'
import Title from './Title'

const SubHeader = () => {
  return (
    <div className="w-full">
      <Title title="Explore the countries of the world!" />

      <div className="flex w-full items-center justify-between pb-12 max-500:flex-col max-500:items-start">
        <Input />
        <Select />
      </div>
    </div>
  )
}

export default SubHeader
