import React from 'react';
import myData from './../rsrc/chatContent.json';
import ChatDisplay from './../components/ChatDisplay';

function ChatContentGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <ChatDisplay details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul>{listItems}</ul>
    );
}

class ChatContent extends React.Component{
    constructor(props){
        super(props);
        this.state = myData;
    }
    
    
    render(){
       return(
        <div className="chat-content">
        <h1>Jamin</h1>
        <div>
        <ChatContentGen data={this.state}/>
        <textarea></textarea>
        </div>
      </div>
      );
    }

  }

  export default ChatContent;