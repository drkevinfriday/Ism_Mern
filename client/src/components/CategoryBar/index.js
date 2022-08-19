import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const CategoryBar = () => {

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

export default CategoryBar;
