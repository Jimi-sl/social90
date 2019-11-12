import React from 'react';


class ChatIcon extends React.Component{
  render(){
    return (
        <li>
        <div className="chat-info">
          <div>
            <div className="profile-pic"></div>
            <span>{this.props.details.tag}</span>
          </div>
          <span>{this.props.details.details}</span>
        <span>{this.props.details.time}</span>
        </div>
      </li>
    );
  }

}

  export default ChatIcon;