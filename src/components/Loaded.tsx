import { AiOutlineLoading } from "react-icons/ai";

const Loaded = () => {
  return (
    <div className="w-full flex justify-center mt-40 animate-spin">
      <AiOutlineLoading size={45} color="#38BFD8" />
    </div>
  );
};

export { Loaded };
