import React from 'react';
import ChatContent from './../components/ChatContent';
import ChatList from '../components/ChatList';
import Sidebar from './../Sidebar';
import './../css/Chat.css';

function Chats() {
    return (
      <div className="chat-page">
      <div className="chat-container">
      <div className="chat-list">
        <h1>Chats</h1>
        <ChatList/>
      </div>
      <ChatContent/>
      </div>
      <Sidebar/>
      </div>
    );
  }

  export default Chats;