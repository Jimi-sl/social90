import React from 'react';
import EventList from './../components/EventList';
import WordList from './../components/WordList';
import  Feed from './../components/Feed';
import  EventProfileHeader from './../components/EventProfileHeader';
import './../css/Profile.css';


const ProfileContent = (props) => {
    let path = props.location;
    if(path === '/Event/Profile'){
    return(<EventList/>);
    }
    else if(path === '/Event/Profile/Posts'){
    return(<Feed/>);
    }
    else if(path === '/Event/Profile/Word'){
    return(<WordList/>);
    }else
    {
    return(<p>{path}</p>);
    }
}

function EventProfileArea(props) {
    return (

                <div className="profile-area">
                <EventProfileHeader/>
                <ProfileContent location={props.path}/>
                </div>
            );
}

export default EventProfileArea;