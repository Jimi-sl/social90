import React from 'react';
//import myData from './../rsrc/events.json';
import Settings from './../appsettings';
import EventPoster from './../components/EventPoster';
import axios from 'axios';

const API =  Settings.baseUrl + Settings.endPoints.getBookmarks;

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
        this.state = {
          hits: [],
          isLoading: false,
          error: null,
        };
    }
    
    async componentDidMount() {
        this.setState({ isLoading: true });
        var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": Settings.token
          }});
          try {
            const result = await inst.get(API);
            console.log(result);
            this.setState({
              hits: result.data,
              isLoading: false
            });
          } catch (error) {
            this.setState({
              error,
              isLoading: false
            });
      }
    }
    
    render(){
       return(
        <BookmarkListGen data={this.state.hits}/>
      );
    }

  }

  export default BookmarkList;