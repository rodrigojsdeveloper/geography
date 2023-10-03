import { ILink } from "../interfaces";

const Link = ({ href, children, onClick, style }: ILink) => {
  return (
    <a
      href={href}
      onClick={onClick}
      style={style}
      className="font-medium text-base no-underline p-3 transition-all ease-in duration-300 rounded-def hover:text-primary-color-1"
    >
      {children}
    </a>
  );
};

export { Link };
