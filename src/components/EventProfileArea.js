import React from 'react';
import EventList from './../components/EventList';
import WordList from './../components/WordList';
import  Feed from './../components/Feed';
import  EventProfileHeader from './../components/EventProfileHeader';
import './../css/Profile.css';
import {Switch,Route,useRouteMatch} from 'react-router-dom';


function EventProfileArea(props) {

    let {path} = useRouteMatch();

    return (

                <div className="profile-area">
                <EventProfileHeader/>
                <Switch>
                    <Route exact path={path}>
                    <EventList/>
                    </Route>
                    <Route exact path={`${path}/Posts`}>
                    <Feed/>
                    </Route>
                    <Route exact path={`${path}/Word`}>
                    <WordList/>
                    </Route>
                </Switch>
                </div>
            );
}

export default EventProfileArea;