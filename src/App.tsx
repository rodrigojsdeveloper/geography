import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";

const App = () => {
  return (
    <div className="w-full h-full bg-grey-1 text-white-1 p-4">
      <Header />
      <SubHeader />
      <Card card={{ src: "https://s4.static.brasilescola.uol.com.br/be/2022/11/bandeira-do-japao.jpg", continent: "Asia", country: "Japão" }} />
    </div>
  );
};

export { App };
