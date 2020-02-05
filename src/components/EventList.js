import React,{useState,useEffect} from 'react';
import EventPoster from './EventPoster';
import './../css/Events.css';
//import myData from './../rsrc/events.json';
import {Link,useLocation} from 'react-router-dom';
import Settings from './../appsettings';
import axios from 'axios';


const API =  Settings.baseUrl + Settings.endPoints.getEvents;

function EventListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <EventPoster details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='event-posts' >{listItems}</ul>
    );
}

function EventList(){
  let location = useLocation();
  let [data,setData] = useState({hits:[]});

  useEffect(() =>{
    const getEvents = async() =>{
      var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
          "id" : sessionStorage.getItem("id"),
        };
        var json = JSON.stringify(Obj);
        try {
          const result = await inst.post(API,json);
          setData({hits : result.data});
        } catch (error) {
          console.log(error);
      }
    }
    getEvents()
  });

    
    
       return(
         <React.Fragment>
           <form className="event-search"><input type="text" placeholder="Search for events"/>
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <path fill="#CDCDCD" fill-rule="nonzero" stroke="#CDCDCD" stroke-width=".5" d="M12.853 12.148L9.968 9.263A5.059 5.059 0 0 0 6.057 1 5.057 5.057 0 1 0 9.26 9.97l2.885 2.883a.5.5 0 0 0 .708-.705zm-6.796-2.04a4.056 4.056 0 0 1-4.053-4.05 4.058 4.058 0 0 1 4.053-4.054 4.06 4.06 0 0 1 4.053 4.053c0 2.234-1.82 4.05-4.053 4.05z"/>
          </svg>

          <Link to={{
    pathname: "/Event/Search/Settings",
    state: { background: location},
  }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></Link>
           </form>
        <EventListGen data={data.hits}/>
        </React.Fragment>
      );
    

  }

  export default EventList;