import {  Link } from "react-router-dom";
import { useGetAccountQuery, useGetResortsQuery, useGetUserFavoritesQuery } from "../login/auth";
import { current } from "@reduxjs/toolkit";

export default function FavoriteList() {
  const { data: account } = useGetAccountQuery();
  const { data: favorites, isLoading: isFavoritesLoading } = useGetUserFavoritesQuery(account?.id);
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
    const filteredFavorites = favoritesWithResorts.filter((currentFavorite, index, array) => {
      const duplicates = array.find(
        (favorite) => favorite.resortName === currentFavorite.resortName);
        return duplicates === currentFavorite || index === array.indexOf(duplicates);
    });
  return (
    <>
      <div className="row mx-auto text-center">
        {filteredFavorites.map((favorite) => (
          <div key={favorite.id}>
            <p>
              <Link to={`/resorts/${favorite.resort_id}`}>
                {favorite.resortName}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
