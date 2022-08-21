//useQuery IS A APOLLO HOOK THAT ALLOWS US TO MAKE REQUESTS IN GRAPHQL SERVER/AVALIABLE BY THE APOLLOPROVIDER
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { Link } from 'react-router-dom';
import CategoryBar from '../components/CategoryBar';
import Category from '../components/Category';
import EmpathList from '../components/EmpathList';
import Auth from '../utils/auth';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    // OBJECT DESTRUCTURING TO EXTRACT FROM USEQUERY HOOK
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const posts = data?.posts || [];
    const loggedIn = Auth.loggedIn();
    
    return (
      <main>
        <Category></Category>
        <CategoryBar></CategoryBar>
        <div className='container  shadow p-3 mb-5 bg-body rounded flex-row justify-space-between'>
        {loggedIn && (
         <Link to="/profile">
         <h2>Write A Story ✍🏾...</h2>
       </Link>
        )}
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>{loading ? (
          <div>Loading Your Daily Feed ✌🏾...</div>
            ) : (
                <PostList posts={posts} title="Here's Your Opportunity To Read Stories" />
            )}</div>
            {loggedIn && userData ? (
            <div className=" container col-12 col-lg-3 mb-3">
              <EmpathList
                username={userData.me.username}
                empathCount={userData.me.empathCount}
                empaths={userData.me.empaths}
              />
            </div>
          ) : null}
      </div>
    </main>
  );
};

export default Home;
