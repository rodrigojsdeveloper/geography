import { ILink } from "../interfaces";

const Link = ({ href, children }: ILink) => {
  return (
    <a
      href={href}
      className="font-medium text-base no-underline p-3 mx-px transition-all ease-in duration-300 rounded-def hover:bg-hoverLink active:bg-activeLink"
    >
      {children}
    </a>
  );
};

export { Link };
