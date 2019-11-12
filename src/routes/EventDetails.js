import React from 'react';
import IndexRouter from './../IndexRouter';
import Sidebar from './../Sidebar';
import EventDetailsCard from './../components/EventDetailsCard';
import myData from './../rsrc/eventDetails.json';



function EventDetails() {
    return (
        <div>
        <div className='homePage'>
        <IndexRouter/>
        <EventDetailsCard details={myData}/>
    </div>
    <Sidebar/>
</div>
    );
  }

  export default EventDetails;