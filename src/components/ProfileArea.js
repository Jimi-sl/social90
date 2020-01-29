import React from 'react';
import  ProfilePosts from './../components/ProfilePosts';
import  ProfileHeader from './../components/ProfileHeader';
import './../css/Profile.css';
import PlugList from './../components/PlugList';
import LyncsList from './../components/LyncsList';
import {Switch,Route,useRouteMatch} from 'react-router-dom';



function ProfileArea(props) {

    let {path} = useRouteMatch();
    console.log(props);

    return (

                <div className="profile-area">
                <ProfileHeader id={props.id}/>
                <Switch>
                    <Route exact path={path} render={(props) =><ProfilePosts id={props.id} {...props} />}/>
                    <Route exact path={`${path}/Lyncs`} render={(props) =><LyncsList id={props.id} {...props} />}/>
                    <Route exact path={`${path}/Plugs`} render={(props) =><PlugList id={props.id} {...props} />}/>       
                </Switch>
                </div>
            );
}

export default ProfileArea;