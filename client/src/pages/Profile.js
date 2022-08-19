import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';
import EmpathList from '../components/EmpathList';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { Navigate, useParams } from 'react-router-dom';

const Profile = () => {
    const { username: userParam } = useParams();
  
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam }
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
      return (
        <h4>
          Sign Up or Login!
        </h4>
      );
    }

    return (
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-light text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'Your'} Profile.
          </h2>
        </div>
  
        <div className="flex-row justify-space-between mb-3">
          <div className="col-12 mb-3 col-lg-8">
            <PostList posts={user.posts} title={`${user.username}'s Stories...`} />
          </div>
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
            username={user.username}
            empathCount={user.empathCount}
            empaths={user.empaths}
            />
            </div>
        </div>
      </div>
    );
  };