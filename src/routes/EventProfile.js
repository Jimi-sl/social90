import React from 'react';
import EventProfileArea from '../components/EventProfileArea';
import Sidebar from '../Sidebar'



function EventProfile(props) {
    return (
      <div className='content-container'>
    <EventProfileArea path={props.location.pathname}/>
     <Sidebar/>
     </div>
    );
  }

  export default EventProfile;