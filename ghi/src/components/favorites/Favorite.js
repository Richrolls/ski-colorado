import { useParams } from "react-router-dom";
import { useGetAccountQuery, useFavoriteMutation, useDeleteFavoriteMutation } from "../login/auth";

export default function Favorite() {
  const { thisResort } = useParams();
  const { data: account } = useGetAccountQuery();
  const [favorite] = useFavoriteMutation();

  const handleOnClick = async (event) => {
    event.preventDefault();
    let body = {user_id: account.id, resort_id: thisResort}
    const result = await favorite({body, thisResort})

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
              <button onClick={handleOnClick}>
                Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
