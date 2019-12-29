import React from 'react';
import  ProfilePosts from './../components/ProfilePosts';
import  ProfileHeader from './../components/ProfileHeader';
import './../css/Profile.css';
import PlugList from './../components/PlugList';
import LyncsList from './../components/LyncsList';
import {Switch,Route,useRouteMatch} from 'react-router-dom';



function ProfileArea(props) {

    let {path} = useRouteMatch();

    return (

                <div className="profile-area">
                <ProfileHeader/>
                <Switch>
                    <Route exact path={path}>
                    <ProfilePosts/>
                    </Route>
                    <Route exact path={`${path}/Lyncs`}>
                    <LyncsList/>
                    </Route>
                    <Route exact path={`${path}/Plugs`}>
                    <PlugList/>
                    </Route>
                </Switch>
                </div>
            );
}

export default ProfileArea;