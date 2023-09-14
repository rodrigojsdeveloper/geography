import { BiWorld } from "react-icons/bi";
import { Link } from "./Link";

const Header = () => {
  return (
    <header className="w-full max-w-screen-xl flex justify-between m-auto">
      <BiWorld size={36} color="#38BFD8" />

      <nav className="w-full max-w-310 flex justify-between">
        <Link href="./">Explore</Link>
        <Link href="./practice">Practice</Link>
        <Link href="./favorites">Favorites</Link>
      </nav>
    </header>
  );
};

export { Header };
