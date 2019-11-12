import React from 'react';
import {NavLink} from 'react-router-dom';

function IndexRouter() {
    return (
        <div className='routeNav' >
        <h1><NavLink exact to={'/Feed'} activeClassName="active">Feed</NavLink></h1><h1><NavLink to={'/Events'} activeClassName="active">Events</NavLink></h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </div>
    );
  }

  export default IndexRouter;