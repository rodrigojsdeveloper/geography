import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Title } from "./components/Title";

const App = () => {
  return (
    <div className="w-full h-full bg-grey-1 text-white-1 p-4">
      <Header />
      <Title />
      <Input />
    </div>
  );
};

export { App };
