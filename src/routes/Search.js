import React from "react";
import {useLocation} from "react-router-dom";
import {NavLink,useRouteMatch} from 'react-router-dom';
import "./../css/search.css";
import Sidebar from "./../Sidebar";


function useQuery() {
    /* var url = new URL("http://localhost:3001" + useLocation().pathname);
    let query = new URLSearchParams(url.search);
    console.log(url);
    console.log(query.has("q"));
    //return new URLSearchParams(url.search); */
    return new URLSearchParams(useLocation().search);
  }

  function All(){
    
    return(
        
    <div className="searchContent">
      <div className="people">
          <ul>
              <li>

              </li>
              <li>

              </li>
          </ul>
          <p>See more</p>
      </div>
      <div className="posts">
          <ul>
              <li>

              </li>
              <li>

              </li>
          </ul>
          <p>See more</p>
      </div>
      <div className="partners">
          <ul>
              <li>

              </li>
              <li>

              </li>
          </ul>
          <p>See more</p>
      </div>
      <div className="events">
          <ul>
              <li>

              </li>
              <li>

              </li>
          </ul>
          <p>See more</p>
      </div>
      </div>
        );
  }

  function ChildComp({field}){

    if(field===null)
    return <All/>
    else if(field==="people")
    return <p>people</p>
    else if(field==="posts")
    return <p>posts</p>
    else if(field==="partners")
    return <p>partners</p>
    else if(field==="events")
    return <p>events</p>
    else
    return null;

}


  function Child({ name,field }) {
    let {url} = useRouteMatch();
    url += "?q=" + name;
    //path += "?q=" + name;

    return (
            
      <div>
          <div className="homePage">
      <div className="routeNav"><h1 className="active">Search</h1></div>
      <ul className="searchNav"><li><NavLink exact to={`${url}`} activeClassName={field === null?"active": null}>All</NavLink></li><li><NavLink to={`${url}&for=people`} activeClassName={field === "people"?"active": null}>People</NavLink></li><li><NavLink to={`${url}&for=posts`} activeClassName={field === "posts"?"active": null}>Posts</NavLink></li><li><NavLink to={`${url}&for=partners`} activeClassName={field === "partners"?"active": null}>Partners</NavLink></li><li><NavLink to={`${url}&for=events`} activeClassName={field === "events"?"active": null}>Events</NavLink></li></ul>
    

        <ChildComp field={field}/>
        {name ? (
          <h3>
            The <code>name</code> in the query string is &quot;{name}
            &quot;
          </h3>
        ) : (
          <h3>There is no name in the query string</h3>
        )}
        </div>
        <Sidebar/>
      </div>
    );
  }
  
  function Search() {
    let query = useQuery();
    return (<Child name={query.get("q")} field={query.has("for")?query.get("for"): null} />);
  }

export default Search;

  