import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';


const CategoryBar = () => {
  return(
    <section>
        <Marquee
        style= {{
            width: "100%",
            fontSize: "1.5rem",
            fontFamily: "Misto",
            color: "black",
            textDecoration: "none",
        }}
        >
        <ul className="list-group list-group-horizontal">
            <li className="list-group item flex-fill">
              Please  consider  donating  to  keep  the  site  running.
            </li>
        </ul>
        </Marquee>
    </section>
  )
      }
//)}

export default CategoryBar;
