import { useParams } from "react-router-dom";
import {useGetFavorites}

export default function FavoriteList() {
  const { thisResort } = useParams();
  const { data: favorites } =
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
                {data.comments?.map((comment) => (
                  <IndividualFavorite key={resort.id} {...resort} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
