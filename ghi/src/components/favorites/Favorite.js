import { useParams } from "react-router-dom";
import { useGetAccountQuery, useFavoriteMutation, useDeleteFavoriteMutation, useGetFavoritesQuery } from "../login/auth";

export default function Favorite() {
  const { thisResort } = useParams();
  const { data: account } = useGetAccountQuery();
  const [favorite] = useFavoriteMutation();
  const [unfavorite] = useDeleteFavoriteMutation();
  const { data: resortFavorites } = useGetFavoritesQuery(thisResort);
  let thisFavorite = ""
  if (resortFavorites?.favorites.some(e => e.user_id === (account.id))) {
    thisFavorite = resortFavorites?.favorites[0].id;
  }


  const handleFavorite = async (event) => {
    event.preventDefault();
    const info = {"user_id": account.id, "resort_id": thisResort}
    const result = await favorite(info).unwrap();
  }

  const handleUnfavorite = async (event) => {
    event.preventDefault();
    const result = await unfavorite({thisResort, thisFavorite});
  };

if (thisFavorite.length > 1) {
    return (
      <>
        <div>
          <button onClick={handleUnfavorite}>
          Unfavorite
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <button onClick={handleFavorite}>Favorite</button>
        </div>
      </>
    );
  }
}