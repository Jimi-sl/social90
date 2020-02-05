import React,{useState,useEffect} from 'react';
import IndexRouter from './../IndexRouter';
import Sidebar from './../Sidebar';
import EventDetailsCard from './../components/EventDetailsCard';
//import myData from './../rsrc/eventDetails.json';
import {useParams} from 'react-router-dom';
import Settings from './../appsettings';
import axios from 'axios';

const API =  Settings.baseUrl + Settings.endPoints.getEventDetails;

function EventDetails() {
    let { id } = useParams();
    const [data,setData] = useState({hits:{}})

    useEffect(() =>{
        const getEventDetails = async() =>{
          var inst = axios.create({withCredentials:true,
            headers:{
                'content-Type': 'application/json',
                "Accept":"/",
                "Authorization": Settings.token
            }});
            var Obj = {
              "id" : id,
            };
            var json = JSON.stringify(Obj);
            try {
              const result = await inst.post(API,json);
              setData({hits : result.data[0]});
            } catch (error) {
              console.log(error);
          }
        }
        getEventDetails()
      },[id]);

    return (
        <div>
        <div className='homePage'>
        <IndexRouter/>
        <EventDetailsCard details={data.hits}/>
    </div>
    <Sidebar/>
</div>
    );
  }

  export default EventDetails;