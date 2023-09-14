interface ILink {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: ILink) => {
  return (
    <a
      href={href}
      className="font-medium text-base no-underline p-2 hover:text-red-1"
    >
      {children}
    </a>
  );
};

export { Link };
