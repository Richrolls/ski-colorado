import { useParams } from "react-router-dom";
import { useGetFavoritesQuery } from "../login/auth";

export default function FavoriteList() {
  const { account } = useParams();
  const { data: favorites } = useGetFavoritesQuery();
  console.log(data);

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
                  <a href={`http://localhost:3000/resorts/${resort_id}`}>
                    {}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
