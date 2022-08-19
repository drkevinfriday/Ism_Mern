import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { useParams } from 'react-router-dom';

const CategoryBar = (props) => {
  // pull categories from props
  const { category } = useParams();
  // map through categories and return a link for each one
  category.map(({ name, _id, postText, postId, title, reactionCount }) => {

    // ADD A FUNCTION TO OPEN A MODAL/PAGE FOR EACH CATEGORY?
   
  return(
    <section key={_id}>
        <Marquee>
        <ul className="list-group list-group-horizontal">
            <li className="list-group item flex-fill">
              <Link to={`/${name}`}> {`${name}`}</Link> 
            </li>
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

function Categories () {
  // display all posts for a category
    // ADD A CATEGORY DESCRIPTION? 
  return (
    
    <div key={_id}>
      <h1>Category Name: {`${name}`}</h1>
      <p>Category Description: </p>
      <div>
        <ul>
          <li>Post Title: {`${title}`}</li>
          <p> Post Text: {`${postText}`}</p>
          <li>Post Reactions: {`${reactionCount}`}</li>
        </ul>
      </div>
    </div>
  )
}
}
  )}

export default CategoryBar;
