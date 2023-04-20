import { useGetAccountQuery, useGetProfileQuery } from "../login/auth";
import { useParams } from "react-router-dom";
import skierIcon from "../header/Skier_Icon.png";
import ProfileInfo from "./ProfileInfo";

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
      {profile && data && (
        <>
          <div class="container rounded shadow p-4 mt-4 bg-primary bg-gradient">
            <div class="row align-items-center">
              <div class="col-md-4 text-center">
                <img
                  style={{ height: 200, width: 200 }}
                  src={profile.picture_url}
                  className="profilep"
                />
              </div>
              <div class="col-md-8">
                <h1 className="snow">
                  {profile.first_name} {profile.last_name}
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <br></br>
                <ProfileInfo />
              </div>
              <div class="col-md-8 border">
                <p>COMMENT FEED GOES HERE</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
