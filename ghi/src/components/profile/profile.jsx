import { useGetAccountQuery, useGetProfileQuery } from "../login/auth";
import { useParams } from "react-router-dom";
import skierIcon from "../header/Skier_Icon.png";
import ProfileInfo from "./ProfileInfo";
import NavLoggedIn from "../header/NavLoggedIn.js";
import UserCommentList from "../comments/UserCommentList";
import ProfileName from "./ProfileName";
import FavoriteList from "../favorites/FavoriteList";

const Profile = () => {
  const { accountId } = useParams();
  const { data } = useGetAccountQuery();
  const { data: profile } = useGetProfileQuery(accountId);

  return (
    <>
      <NavLoggedIn />
      {profile && data && (
        <>
          <div className="container rounded shadow p-4 mt-4 bg-primary bg-gradient">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  style={{ height: 180, width: 180 }}
                  src={profile.picture_url}
                  className="profilep"
                  alt="profile picture"
                />
              </div>
              <div className="col-md-8">
                <ProfileName />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <br></br>
                <ProfileInfo />
                <div className="shadow p-4 mt-4 bg-primary bg-gradient rounded">
                  <h2 className="underlined">Favorite Resorts</h2>
                  <FavoriteList />
                </div>
              </div>
              <div className="col">
                <UserCommentList />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
