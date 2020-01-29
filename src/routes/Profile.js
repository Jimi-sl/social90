import React,{useState,useEffect} from 'react';
import ProfileArea from '../components/ProfileArea';
import Sidebar from '../Sidebar';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Settings from './../appsettings';

const API = Settings.baseUrl + Settings.endPoints.getUserInfoByTag;

function Profile(props) {
  console.log(props);
  let [userId,setUserId] = useState(props.location.state !== undefined ? props.location.state.id : 0);
  let { tag } = useParams();

  useEffect(()=>{
    const fetchId = async () => {
      if(userId === 0){
          var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": Settings.token
          }});

          var Obj = {"tag" : tag };
          var json = JSON.stringify(Obj);
          try {
            const result = await inst.post(API,json);
            //console.log(result);
            setUserId(result.data[0].id);
          } catch (error) {
            console.log(error);
        }
      }
    };
    fetchId();  
  },[userId,tag]);

    return (
      <div className='content-container'>
    <ProfileArea path={props.location.pathname} id={userId} />
     <Sidebar/>
     </div>
    );
  }

  export default Profile;