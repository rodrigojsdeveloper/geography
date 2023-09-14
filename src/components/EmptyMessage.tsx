import { IEmptyMessage } from "../interfaces";

const EmptyMessage = ({ message }: IEmptyMessage) => {
  return <p className="font-medium text-base">{message}</p>;
};

export { EmptyMessage };
