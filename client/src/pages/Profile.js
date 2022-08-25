import PostList from "../components/PostList";
import EmpathList from "../components/EmpathList";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_EMPATH } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Navigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";

import collage2 from ".././assets/images/collage2.jpg";
import background2 from ".././assets/images/background2.jpg";

const Profile = () => {
  const [addEmpath] = useMutation(ADD_EMPATH);
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // GOES TO PROFILE PAGE IF USER LOGGED-IN
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return <h4>Sign Up or Login!</h4>;
  }

  const handleClick = async () => {
    try {
      await addEmpath({
        variables: { id: user._id },
      });
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <div style={{ marginTop: "" }} className="profile-div">
      <div className="flex-row mb-3" style={{}}>
        <img style={{ position: "fixed", width: "100%" }}></img>
      </div>
      {userParam && (
        <button className="btn ml-auto" onClick={handleClick}>
          Add Empath ☯︎
        </button>
      )}
      <div className="flex-row justify-space-between mb-3">
        <h2 className="profile-title text-dark">
          Welcome back {user.username}!
        </h2>
        <div className="mb-3 post-form">{!userParam && <PostForm />}</div>
        <div className="col-12 mb-3 col-lg-8 profile-posts text-dark">
          <PostList posts={user.posts} title={`Your Stories...`} />
        </div>
        <div className="col-12 col-lg-3 mb-3">
          <EmpathList
            username={user.username}
            empathCount={user.empathCount}
            empaths={user.empaths}
          />
        </div>
      </div>
    </div>
  );
};

// Viewing {userParam ? `${user.username}'s` : 'Your'} Profile.

export default Profile;
