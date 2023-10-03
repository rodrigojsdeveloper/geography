import { ITitle } from "../interfaces";

const Title = ({ title }: ITitle) => {
  return (
    <div className="w-full py-12">
      <h1 className="w-full max-w-400 font-bold text-4xl">{title}</h1>
    </div>
  );
};

export { Title };
