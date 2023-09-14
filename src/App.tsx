import { SubHeader } from "./components/SubHeader";
import { Header } from "./components/Header";
import { List } from "./components/List";

const App = () => {
  return (
    <div className="w-full h-full bg-grey-1 text-white-1 p-4">
      <Header />
      <SubHeader />
      <List />
    </div>
  );
};

export { App };
