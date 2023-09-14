import { IDado } from "../interfaces";

const Dado = ({ title, description, Icon }: IDado) => {
  return (
    <div>
      <Icon />

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { Dado };
