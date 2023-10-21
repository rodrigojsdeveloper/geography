import { useNavigate } from "react-router-dom";
import { PropsWithChildren } from "react"
import { ILink } from "../interfaces";

const Link = ({ href, children, activeLink }: PropsWithChildren<ILink>) => {
  const navigate = useNavigate();

  return (
    <p
      onClick={() => navigate(href)}
      className={`font-medium text-base no-underline p-3 transition-all ease-in duration-300 rounded-def cursor-pointer ${activeLink} hover:text-primary-color-1`}
    >
      {children}
    </p>
  );
};

export { Link };
