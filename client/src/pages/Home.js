//useQuery IS A APOLLO HOOK THAT ALLOWS US TO MAKE REQUESTS IN GRAPHQL SERVER/AVALIABLE BY THE APOLLOPROVIDER
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/ThoughtList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    return (
      <main>
        <div className='flex-row justify-space-between'>
          <div className='col-12 mb-3'>{loading ? (
          <div>Loading Your Daily Feed ✌🏾...</div>
            ) : (
                <PostList posts={posts} title="Here's Your Opportunity To Hear Stories" />
            )}</div>
        </div>
      </main>
    );
  };
  