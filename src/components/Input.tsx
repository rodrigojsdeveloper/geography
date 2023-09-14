import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="w-full max-w-261 h-45 bg-grey-2 flex justify-between items-center">
      <input
        className="w-full max-w-205 bg-grey-2 p-3 outline-none"
        placeholder="Digite o nome do país"
      />

      <div className="h-45 flex justify-center items-center cursor-pointer p-2 hover:bg-grey-3">
        <CiSearch size={24} />
      </div>
    </div>
  );
};

export { Input };
