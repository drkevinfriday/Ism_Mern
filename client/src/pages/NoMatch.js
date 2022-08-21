import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch=()=> {
    return(
        <div>
            <h2 className="text-center"> Seems Like You're Lost - Let's Help You Out!</h2>
            <Link to="/"> Take Me Home Please 💚 </Link>
        </div>
    )
}

export default NoMatch;