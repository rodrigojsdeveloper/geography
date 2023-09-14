import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";

const App = () => {
  return (
    <div className="w-full h-full bg-grey-1 text-white-1 p-4">
      <Header />
      <SubHeader />
    </div>
  );
};

export { App };
