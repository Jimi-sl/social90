import React from 'react';
import myData from './../rsrc/events.json';
import EventPoster from './../components/EventPoster';

function BookmarkListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <EventPoster details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul>{listItems}</ul>
    );
}

class BookmarkList extends React.Component{
    constructor(props){
        super(props);
        this.state = myData;
    }
    
    
    render(){
       return(
        <BookmarkListGen data={this.state}/>
      );
    }

  }

  export default BookmarkList;