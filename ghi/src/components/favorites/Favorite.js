import { useParams } from "react-router-dom";
import {
  useGetAccountQuery,
  useFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetResortFavoritesQuery,
} from "../login/auth";

export default function Favorite() {
  const { thisResort } = useParams();
  const { data: account } = useGetAccountQuery();
  const [favorite] = useFavoriteMutation();
  const [unfavorite] = useDeleteFavoriteMutation();
  const { data: resortFavorites } = useGetResortFavoritesQuery(thisResort);
  let thisFavorite = "";
  let thisUserResortFavorite = resortFavorites?.favorites.filter(
    (e) => e.user_id === account.id
  );
  if (thisUserResortFavorite?.length > 0) {
    thisFavorite = thisUserResortFavorite[0].id;
  }

  const handleFavorite = async (event) => {
    event.preventDefault();
    const info = { user_id: account.id, resort_id: thisResort };
    const result = await favorite(info).unwrap();
  };

  const handleUnfavorite = async (event) => {
    event.preventDefault();
    const result = await unfavorite({ thisResort, thisFavorite });
  };

  if (thisFavorite.length >= 1) {
    return (
      <>
        <div style={{ paddingBottom: 12 }}>
          <button
            className="butt btn-sm btn-primary"
            onClick={handleUnfavorite}
          >
            Unfavorite
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <button className="butt btn-sm btn-primary" onClick={handleFavorite}>
            Favorite
          </button>
        </div>
      </>
    );
  }
}
