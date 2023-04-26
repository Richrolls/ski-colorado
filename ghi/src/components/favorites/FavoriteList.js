import { useParams, Link } from "react-router-dom";
import { useGetResortsQuery, useGetUserFavoritesQuery } from "../login/auth";

export default function FavoriteList() {
  const { accountId } = useParams();
  const { data: favorites, isLoading: isFavoritesLoading } =
    useGetUserFavoritesQuery(accountId);
  const { data: resorts, isLoading: isResortsLoading } = useGetResortsQuery();
  if (isFavoritesLoading || isResortsLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const favoritesWithResorts = favorites.favorites.map((favorite) => {
    const resort = resorts.find((resort) => resort.id === favorite.resort_id);
    return {
      ...favorite,
      resortName: resort ? resort.name : "Unknown resort",
    };
  });

  return (
    <>
      <div className="row mx-auto w-75">
        {favoritesWithResorts.map((favorite) => (
          <div key={favorite.id}>
            <h4>
              <Link to={`/resorts/${favorite.resort_id}`}>
                {favorite.resortName}
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </>
  );
}
