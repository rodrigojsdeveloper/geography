import { ILink } from "../interfaces";

const Link = ({ href, children }: ILink) => {
  return (
    <a
      href={href}
      className="font-medium text-base no-underline p-2 hover:text-primary-color-1"
    >
      {children}
    </a>
  );
};

export { Link };
