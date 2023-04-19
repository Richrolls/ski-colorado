import { useGetAccountQuery, useGetProfileQuery } from "../login/auth";
import { useParams } from "react-router-dom";
import skierIcon from "../header/Skier_Icon.png"

const Profile = () => {
  const { accountId } = useParams();
  const { data } = useGetAccountQuery();
  const { data: profile } = useGetProfileQuery(accountId)
  console.log(profile)

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
    <div className="container">
      <script>
        if()

      </script>
      {profile && (
        <div className="row">
          <div>
            <div
              className="center shadow p-4 mt-4 bg-primary bg-gradient"
              style={{ borderRadius: 8 }}
            >
              <img
                style={{ height: 200, width: 200 }}
                src={profile.picture_url}
              />
              <div>
                <h1 className="snow">
                  {profile.first_name} {profile.last_name}
                </h1>
              </div>
              <div id="information"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
