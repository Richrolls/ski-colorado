import { useParams, Link } from "react-router-dom";
import { useGetUserFavoritesQuery } from "../login/auth";

export default function FavoriteList() {
  const { account } = useParams()
  console.log(account)
  const { data: favorites } = useGetUserFavoritesQuery(account);
  console.log(favorites)

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <div
              className="shadow p-4 mt-4 bg-primary bg-gradient"
              style={{ borderRadius: 8, marginLeft: 0 }}
            >
              <div>
                <h1 className="snow">F</h1>
              </div>
              <br />
              <div className="row mx-auto w-75">
                {/* {favoriteList?.map((favorite) => (
                  <div key={favorite.id}>
                    <p>Resort: <Link to={`/resorts/${favorite.resort_id}`}>Something</Link></p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
