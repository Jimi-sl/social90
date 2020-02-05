import React,{useState,useEffect} from 'react';
import EventPoster from './EventPoster';
import './../css/Events.css';
import Settings from './../appsettings';
import axios from 'axios';


const API =  Settings.baseUrl + Settings.endPoints.getPartnerEvents;

function EventListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <EventPoster details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='event-posts' >{listItems}</ul>
    );
}

function EventPartnerList(props){
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
          "id" : props.details.id,
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
        <EventListGen data={data.hits}/>
      );
    

  }

  export default EventPartnerList;