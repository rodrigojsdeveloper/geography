import { IDado } from "../interfaces";

const Dado = ({ title, description, Icon }: IDado) => {
  return (
    <div className="flex items-center">
      <Icon size={24} />

      <div className="w-full max-w-104 pl-1.5">
        <h2 className="font-bold text-xs pb-1">{title}</h2>
        <p className="font-bold text-xs opacity-60">{description}</p>
      </div>
    </div>
  );
};

export { Dado };
