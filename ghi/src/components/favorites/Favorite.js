import { useParams } from "react-router-dom";
import { useGetAccountQuery, useFavoriteMutation, useDeleteFavoriteMutation } from "../login/auth";

export default function Favorite() {
  const { thisResort } = useParams();
  const { data: account } = useGetAccountQuery();
  const [favorite] = useFavoriteMutation();

  const handleOnClick = async (event) => {
    event.preventDefault();
    const info = {"user_id": account.id, "resort_id": thisResort}
    const result = await favorite(info).unwrap();


  }

  return (
    <>
      <div>
        <button onClick={handleOnClick}>
        Favorite
        </button>
      </div>
    </>
  );
}
