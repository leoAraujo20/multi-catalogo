import CardsList from "../../components/CardsList/CardsList";
import { useFavoriteContext } from "../../context/favoriteContext";
import { getFavorites } from "../../utils/getFavorites.ts";

function Favorites() {
  const { favorites } = useFavoriteContext();
  const allFavorites = getFavorites(favorites);
  return (
    <>
      <h2>Favoritos</h2>
      <CardsList items={allFavorites} />
    </>
  );
}

export default Favorites;
