import React from 'react';
import EventPartnerList from './../components/EventPartnerList';
import WordList from './../components/WordList';
import  PartnerPosts from './../components/PartnerPosts';
import  EventProfileHeader from './../components/EventProfileHeader';
import './../css/Profile.css';
import {Switch,Route,useRouteMatch} from 'react-router-dom';


function EventProfileArea(props) {

    let {path} = useRouteMatch();

    return (

                <div className="profile-area">
                <EventProfileHeader details={props.details}/>
                <Switch>
                    <Route exact path={path}>
                    <EventPartnerList details={props.details}/>
                    </Route>
                    <Route exact path={`${path}/Posts`}>
                    <PartnerPosts details={props.details}/>
                    </Route>
                    <Route exact path={`${path}/Word`}>
                    <WordList details={props.details}/>
                    </Route>
                </Switch>
                </div>
            );
}

export default EventProfileArea;