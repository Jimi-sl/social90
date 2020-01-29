import React, { useState, useEffect } from 'react';
import defaultPhoto from './../img/default-pic.png';
import {NavLink,useRouteMatch} from 'react-router-dom';
import axios from 'axios';
import Settings from './../appsettings';




function ProfileHeader(props) {

    const [navClass, setNavClass] = useState('');
    let {url} = useRouteMatch();
    const [value, setValue] = useState({});
    const [isLynced, setIsLynced] = useState();
    //const [lynced, setLynced] = useState(null);


    let lyncToggle = async (e) => {
        e.preventDefault();
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "userId" : sessionStorage.getItem("id"),
            "lyncId" : props.id
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.lyncToggle;
            try {
            const result = await inst.post(AP,json);
            setIsLynced(result.data);
            //setLynced(result.data);
            //console.log(lynced);
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
        let getInfo = async () => {
            var inst = axios.create({withCredentials:true,
            headers:{
                'content-Type': 'application/json',
                "Accept":"/",
                "Authorization": Settings.token
            }});
            var Obj = {
                "id" : props.id,
            };
                var json = JSON.stringify(Obj);
                const API = Settings.baseUrl + Settings.endPoints.getUserInfo;
                try {
                const result = await inst.post(API,json);
                console.log(result.data);
                setValue(result.data[0]);
            } catch (error) {
                console.log(error);
            }
        }

        let islynced = async () => {
            var inst = axios.create({withCredentials:true,
            headers:{
                'content-Type': 'application/json',
                "Accept":"/",
                "Authorization": Settings.token
            }});
            var Obj = {
                "userId" : sessionStorage.getItem("id"),
	            "lyncId" : props.id
            };
                var json = JSON.stringify(Obj);
                const AP = Settings.baseUrl + Settings.endPoints.isLynced;
                try {
                const result = await inst.post(AP,json);
                setIsLynced(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        islynced();
        getInfo();
    },[props.id]);

    return (

                <div className="profile-header">
                <div className="profile-deets">
                <div>
                <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <div>
                    <span className="name">{value.Name}</span>
                    <span className="tag">{value.Tag}</span>
                </div>
                </div>
                    
                    <p>{value.bio}</p>
                 {props.id === sessionStorage.getItem('id')?<button>Edit</button> : <React.Fragment>{isLynced === 1 ?<button onClick={lyncToggle}>Lynced</button> : <button className='lync' onClick={lyncToggle}>Lync</button>}</React.Fragment>}

                    
                </div>
                <ul className={"profile-nav " + navClass}><li><NavLink exact to={{pathname:`${url}`, state:{id : props.id}}} activeClassName="active">Posts</NavLink></li><li><NavLink to={{pathname :`${url}/Lyncs`, state:{id : props.id}}} activeClassName="active">Lyncs</NavLink></li><li><NavLink to={{pathname : `${url}/Plugs`, state:{id : props.id}}} activeClassName="active">Plugs</NavLink></li></ul>
                </div>
                
            );
}

export default ProfileHeader;