import { Input } from "./Input";
import { Select } from "./Select";
import { Title } from "./Title";

const SubHeader = () => {
  return (
    <div className="w-full max-w-screen-xl pt-8 m-auto">
      <Title />

      <div className="w-full flex justify-between items-center py-12">
        <Input />
        <Select />
      </div>
    </div>
  );
};

export { SubHeader };
