import { Select } from './select'
import { Input } from './input'
import { Title } from './title'

export const SubHeader = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      <Title>Explore the countries of the world!</Title>

      <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-center">
        <Input />
        <Select />
      </div>
    </div>
  )
}
