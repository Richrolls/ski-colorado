import { useGetAccountQuery, useGetProfileQuery } from "../login/auth";
import { useParams } from "react-router-dom";
import skierIcon from "../header/Skier_Icon.png";
import ProfileInfo from "./ProfileInfo";
import NavLoggedIn from "../header/NavLoggedIn.js";
import UserFilteredCommentList from "../comments/UserFilteredCommentList";

const Profile = () => {
  const { accountId } = useParams();
  const { data } = useGetAccountQuery();
  const { data: profile } = useGetProfileQuery(accountId);

  //   const getLoggedInUserData = (data) => {
  //     if (data) {
  //       let userData = data;
  //       return userData;
  //     }
  //   }

  //   const getProfileUserData = (profile) => {
  //     if (profile) {
  //       let profileData = profile;
  //       return profileData;
  //     }
  //   }

  //     const loggedInUserData = getLoggedInUserData(data);
  //     console.log(loggedInUserData)
  //     const profileData = getProfileUserData(profile);
  //     console.log(profileData)

  return (
    <>
      <NavLoggedIn />
      {profile && data && (
        <>
          <div className="container rounded shadow p-4 mt-4 bg-primary bg-gradient">
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  style={{ height: 200, width: 200 }}
                  src={profile.picture_url}
                  className="profilep"
                />
              </div>
              <div className="col-md-8">
                <h1 className="snow">
                  {profile.first_name} {profile.last_name}
                </h1>
                <h3>@{profile.username}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <br></br>
                <ProfileInfo />
              </div>
              <div className="col-md-8 border">
                <UserFilteredCommentList/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
