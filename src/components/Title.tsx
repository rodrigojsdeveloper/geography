import { ITitle } from "../interfaces";

const Title = ({ title }: ITitle) => {
  return (
    <div className="w-full max-w-1440 m-auto">
      <h1 className="w-full max-w-310 font-bold text-4xl pt-8 pb-12">
        {title}
      </h1>
    </div>
  );
};

export { Title };
