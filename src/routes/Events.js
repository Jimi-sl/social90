import React from 'react';
import IndexRouter from './../IndexRouter';
import Sidebar from './../Sidebar';
import EventList from './../components/EventList';


function Events() {
    return (
        <div>
        <div className='homePage'>
        <IndexRouter/>
        <EventList/>
    </div>
    <Sidebar/>
</div>
    );
  }

  export default Events;