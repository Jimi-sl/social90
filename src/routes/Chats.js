import React,{useState,useEffect} from 'react';
import ChatContent from './../components/ChatContent';
import ChatList from '../components/ChatList';
import Sidebar from './../Sidebar';
import './../css/Chat.css';
import {useRouteMatch,useLocation} from 'react-router-dom';

function Chats() {

  let {path} = useRouteMatch();
  let [width,setWidth] = useState(window.innerWidth);
  let location = useLocation();

  const updateDimensions = () => {
    setWidth(window.innerWidth);
};
 
useEffect(() =>{
  window.addEventListener('resize',updateDimensions);
  

  return function cleanup() {
    window.removeEventListener('resize', updateDimensions);
  }
},[]);

    return (
      <div className="chat-page">
      <div className="chat-container">
      {width < 801 ? 
      <React.Fragment>{path === location.pathname && <div className="chat-list" style={{width: "100%"}}>
        <h1>Chats</h1>
      <ChatList /> </div>}</React.Fragment> : <div className="chat-list">
        <h1>Chats</h1>  <ChatList/>  
      </div> }
      {width < 801  ? <ChatContent style={{width: "100%"}} path={path} /> : <ChatContent path={path}/>}
      </div>
      <Sidebar/>
      </div>
    );
  }

  export default Chats;