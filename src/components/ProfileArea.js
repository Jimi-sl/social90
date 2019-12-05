import React from 'react';
import  ProfilePosts from './../components/ProfilePosts';
import  ProfileHeader from './../components/ProfileHeader';
import './../css/Profile.css';
import PlugList from './../components/PlugList';
import LyncsList from './../components/LyncsList';

 const ProfileContent = (props) => {
     let path = props.location;
if(path === '/User-Profile/Jimi'){
    return(<ProfilePosts/>);
}
else if(path === '/User-Profile/Jimi/Lyncs'){
    return(<LyncsList/>);
}
else if(path === '/User-Profile/Jimi/Plugs'){
    return(<PlugList/>);
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