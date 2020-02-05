import React, { useState, useEffect } from 'react';
import {NavLink,useRouteMatch} from 'react-router-dom';



function EventProfileHeader(props) {
    const [navClass, setNavClass] = useState('');
    let {url} = useRouteMatch();


    useEffect(() => {
        var container = document.getElementsByClassName("body-container")[0];
        var nav = document.getElementsByClassName("profile-nav")[0];
        var sticky = nav.offsetTop;
        
        container.addEventListener("scroll", function(){
            
            if(container.scrollTop >= sticky)
            {
                setNavClass("fixed");
            }
            else
            {
                setNavClass("");

            }
        });
    },[]);
    
    return (

                <div className="profile-header">
                <div className="profile-deets">
                <div>
                <div className="profile-pic"></div>
                <div>
                    <span className="name">{props.details.name}</span>
                    <span className="tag">{props.details.type}</span>
                </div>
                </div>
                    
                    <p>{props.details.bio}</p>
                    <button>Plug</button>

                    
                </div>
                <ul className={"profile-nav " + navClass}><li><NavLink exact to={{pathname:`${url}`,state:{id : props.details.id}}} activeClassName="active">Events</NavLink></li><li><NavLink to={{pathname:`${url}/Posts`,state:{id : props.details.id}}} activeClassName="active">Posts</NavLink></li><li><NavLink to={{pathname:`${url}/Word`,state:{id : props.details.id}}} activeClassName="active">Word on Road</NavLink></li></ul>
                </div>
                
            );
}



export default EventProfileHeader;