import React,{useState,useEffect} from 'react';
import EventProfileArea from '../components/EventProfileArea';
import Sidebar from '../Sidebar';
import {useParams} from 'react-router-dom';
import Settings from './../appsettings';
import axios from 'axios';

const API =  Settings.baseUrl + Settings.endPoints.getPartnerDetails;

function EventProfile(props) {
  let { name } = useParams();
  const [data,setData] = useState({hits:{}})

  useEffect(() =>{
    const getPartnerDetails = async() =>{
      var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
          "name" : name,
        };
        var json = JSON.stringify(Obj);
        try {
          const result = await inst.post(API,json);
          setData({hits : result.data[0]});
        } catch (error) {
          console.log(error);
      }
    }
    getPartnerDetails();
  },[name]);

    return (
      <div className='content-container'>
    <EventProfileArea path={props.location.pathname} details={data.hits}/>
     <Sidebar/>
     </div>
    );
  }

  export default EventProfile;