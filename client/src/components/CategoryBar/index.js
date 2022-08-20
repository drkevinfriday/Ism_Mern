import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';


const CategoryBar = () => {
  // pull categories from props
  //const { post } = props;
  //console.log(post);
  // map through categories and return a link for each category
  //post.map(({ name, _id, postText, postId, title, reactionCount}) => {
/*
    const { loading, error, data } = useQuery(QUERY_POSTS);

    const posts = data?.posts || [];

      
    return (
      <div>
        <h3></h3>
        {posts &&
          posts.map(post => (
            <div key={post._id} className="card mb-3">
              <p className="card-header">
                <Link
                  to={`/profile/${post.username}`}
                  style={{ fontWeight: 700 }}
                  className="text-light"
                >
                  {post.username}
                </Link>{' '}
                thought on {post.createdAt}
              </p>
              <div className="card-body">
                <Link to={`/thought/${post._id}`}>
                  <p>{post.postText}</p>
                  <p className="mb-0">
                    Reactions: {post.reactionCount} || Click to{' '}
                    {post.reactionCount ? 'see' : 'start'} the discussion!
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
  };
*/
  /*
    return (
      
      <div key={_id} className="card mb-3">
      
      
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-subtitle">
            <Link to={`/post/${postId}`}>
              {title}
            </Link>
          </p>
          <div className="card-link">
            <Link to={`/post/${postId}`}>
              <p className="mb-0">
                Reactions: {reactionCount} || Click To{" "}
                {reactionCount ? "see" : "start"} The Discussion!
              </p>
            </Link>
          </div>
        </div>
      </div>
  )}
  */
  
  
  return(
    <section>
        <Marquee>
        <ul className="list-group list-group-horizontal">
            <li className="list-group item flex-fill">
              <Link to={``}>Sexism</Link>
            </li>
            <li className="list-group item flex-fill">
               <Link to={``}>Racism</Link>
            </li>
            <li className="list-group item flex-fill">
               <Link to={``}>Ableism</Link>
            </li>
            <li className="list-group item flex-fill">
             <Link to={``}>Anti-Semitism</Link>
            </li>
            <li className="list-group item flex-fill">
             <Link to={``}>Colorism</Link>
            </li>
            <li className="list-group item flex-fill">
             <Link to={``}>Cissexism</Link>
            </li>
            <li className="list-group item flex-fill">
             <Link to={``}>Elitism</Link>
            </li>
            <li className="list-group item flex-fill">
             <Link to={``}>Tokenism</Link>
            </li>
        </ul>
        </Marquee>
    </section>
    

  )
}

//)}



export default CategoryBar;
