import React from 'react';
import EventPoster from './EventPoster';
import myData from './../rsrc/events.json';
 

function EventListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <EventPoster details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='profile-posts' >{listItems}</ul>
    );
}

class EventList extends React.Component{
    constructor(props){
        super(props);
        this.state = myData;
    }
    
    
    render(){
       return(
        <EventListGen data={this.state}/>
      );
    }

  }

  export default EventList;