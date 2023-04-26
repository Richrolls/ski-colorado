import { Link, useParams } from "react-router-dom";
import { useGetCommentsQuery, useGetProfilesQuery } from "../login/auth.js";


export default function ResortFilteredCommentList() {
  const { thisResort } = useParams();
  const { data: commentsData, isLoading } = useGetCommentsQuery(thisResort);
  const { data: accountsData, isLoading: isAccountsLoading } = useGetProfilesQuery();


  if (isLoading || isAccountsLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const filteredComments = commentsData.comments.filter(
    (comment) => comment.resort_id === thisResort
  );

  const commentsWithUsernames = filteredComments.map(comment => {
    const user = accountsData.accounts.find(user => user.id === comment.user_id);
    return {
      ...comment,
      userName: user ? user.username : 'Unknown User',
    }
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <div style={{ borderRadius: 8, marginLeft: 0 }}>
              <div>
                <h2 className="underlined">Recent Comments</h2>
              </div>
              <br/>
              <div className="row mx-auto w-75">
                {commentsWithUsernames.map((comment) => (
                  <div key={comment.id}>
                      <h4>
                      <Link to={`/profile/${comment.user_id}`}>
                        {comment.userName}
                      </Link>
                      </h4>
                    <div className="bg-secondary bg-opacity-50 bg-gradient white-border">
                      <h4 className="m-0">
                      {comment.comment} {comment.rating}/5
                      </h4>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
