import React from 'react';
import  Feed from './../components/Feed';
import  ProfileHeader from './../components/ProfileHeader';
import './../css/Profile.css';
import EventList from './../components/EventList';
import LyncsList from './../components/LyncsList';

 const ProfileContent = (props) => {
     let path = props.location;
if(path === '/User-Profile/Jimi'){
    return(<Feed/>);
}
else if(path === '/User-Profile/Jimi/Lyncs'){
    return(<LyncsList/>);
}
else if(path === '/User-Profile/Jimi/Events'){
    return(<EventList/>);
}else
{
    return(<p>{path}</p>);
}
 
}

function ProfileArea(props) {
    return (

                <div className="profile-area">
                <ProfileHeader/>
                <ProfileContent location={props.path}/>
                </div>
            );
}

export default ProfileArea;