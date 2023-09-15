import { Input } from "./Input";
import { Select } from "./Select";
import { Title } from "./Title";

const SubHeader = () => {
  return (
    <div className="w-full max-w-1440 m-auto">
      <Title title="Explore the countries of the world!" />

      <div className="w-full flex justify-between items-center pb-12 max-500:flex-col max-500:items-start">
        <Input />
        <Select />
      </div>
    </div>
  );
};

export { SubHeader };
