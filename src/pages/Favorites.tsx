import { SubHeaderFavorites } from "../components/SubHeaderFavorites";
import { ListFavorites } from "../components/ListFavorites";
import { Layout } from "./Layout";

const Favorites = () => {
  return (
    <Layout>
      <SubHeaderFavorites />
      <ListFavorites />
    </Layout>
  );
};

export { Favorites };
