import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';



function EventProfileHeader() {
    const [navClass, setNavClass] = useState('');


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
                    <span className="name">Block Party</span>
                    <span className="tag">Partner</span>
                </div>
                </div>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    <button>Plug</button>

                    
                </div>
                <ul className={"profile-nav " + navClass}><li><NavLink exact to={"/Event/Profile"} activeClassName="active">Events</NavLink></li><li><NavLink to={"/Event/Profile/Posts"} activeClassName="active">Posts</NavLink></li><li><NavLink to={"/Event/Profile/Word"} activeClassName="active">Word on Road</NavLink></li></ul>
                </div>
                
            );
}



export default EventProfileHeader;