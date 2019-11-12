import React from 'react';
import myData from './../rsrc/chatList.json';
import ChatIcon from './../components/ChatIcon';

function ChatListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <ChatIcon details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul>{listItems}</ul>
    );
}

class ChatList extends React.Component{
    constructor(props){
        super(props);
        this.state = myData;
    }
    
    
    render(){
       return(
        <ChatListGen data={this.state}/>
      );
    }

  }

  export default ChatList;