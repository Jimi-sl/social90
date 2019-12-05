import React from 'react';

class ChatDisplay extends React.Component{

    render(){
        return (
            <li>
          <div className="chat-text">
              <div>
                <div className="profile-pic"></div>
                <span>{this.props.details.Tag}</span>
              </div>
              <span>{this.props.details.text}</span>
            <span>{this.props.details.time}</span>
            </div>	
          </li>);
            
    }
    

}
export default ChatDisplay;