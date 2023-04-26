import { useParams } from "react-router-dom";
import { useGetUserFavoritesQuery } from "../login/auth";
import { Link } from "react-router-dom";

export default function FavoriteList() {
  const { account } = useParams();
  const { data: favorites } = useGetUserFavoritesQuery();
  console.log(favorites);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

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
                <h1 className="snow">Comments</h1>
              </div>
              <br />
              <div className="row mx-auto w-75">
                {data.favorites?.map((favorite) => (
                  <Link to={`/resorts/${resort_id}`}>
                    {}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
