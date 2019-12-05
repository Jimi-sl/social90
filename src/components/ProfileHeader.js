import React, { useState, useEffect } from 'react';
import defaultPhoto from './../img/default-pic.png';
import {NavLink} from 'react-router-dom';



function ProfileHeader() {

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
                <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <div>
                    <span className="name">Jimi Sule</span>
                    <span className="tag">jimi_sl</span>
                </div>
                </div>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    <button>Edit Profile</button>

                    
                </div>
                <ul className={"profile-nav " + navClass}><li><NavLink exact to={"/User-Profile/Jimi"} activeClassName="active">Posts</NavLink></li><li><NavLink to={"/User-Profile/Jimi/Lyncs"} activeClassName="active">Lyncs</NavLink></li><li><NavLink to={"/User-Profile/Jimi/Plugs"} activeClassName="active">Plugs</NavLink></li></ul>
                </div>
                
            );
}

/* window.addEventListener('load', function() {
    var container = document.getElementsByClassName("body-container")[0];
    var nav = document.getElementsByClassName("profile-nav")[0];
    var sticky = nav.offsetTop;
    
    container.addEventListener("scroll", function(){
        
        if(container.scrollTop >= sticky)
        {
            nav.classList.add("fixed");
        }
        else
        {
            nav.classList.remove("fixed");
        }
    });
});
 */
export default ProfileHeader;