import React, { useState, useEffect } from 'react';
import {NavLink,useRouteMatch} from 'react-router-dom';
import axios from 'axios';
import Settings from './../appsettings';




function EventProfileHeader(props) {
    const [navClass, setNavClass] = useState('');
    const [isPlugged, setisPlugged] = useState();
    let {url} = useRouteMatch();

    let plugToggle = async (e) => {
        e.preventDefault();
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "userId" : sessionStorage.getItem("id"),
            "plugId" : props.details.id
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.plugToggle;
            try {
            const result = await inst.post(AP,json);           
            setisPlugged(result.data);         
        } catch (error) {
            console.log(error);
        }
    }

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
        let isplugged = async () => {
            var inst = axios.create({withCredentials:true,
            headers:{
                'content-Type': 'application/json',
                "Accept":"/",
                "Authorization": Settings.token
            }});
            var Obj = {
                "userId" : sessionStorage.getItem("id"),
	            "plugId" : props.details.id
            };
                var json = JSON.stringify(Obj);
                const AP = Settings.baseUrl + Settings.endPoints.isPlugged;
                try {
                const result = await inst.post(AP,json);
                setisPlugged(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        isplugged();
    },[props.details.id]);
    
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
                    {isPlugged === 1 ?<button onClick={plugToggle}>Plugged</button> : <button className='lync' onClick={plugToggle}>Plug</button>}

                    
                </div>
                <ul className={"profile-nav " + navClass}><li><NavLink exact to={{pathname:`${url}`,state:{id : props.details.id}}} activeClassName="active">Events</NavLink></li><li><NavLink to={{pathname:`${url}/Posts`,state:{id : props.details.id}}} activeClassName="active">Posts</NavLink></li><li><NavLink to={{pathname:`${url}/Word`,state:{id : props.details.id}}} activeClassName="active">Word on Road</NavLink></li></ul>
                </div>
                
            );
}



export default EventProfileHeader;