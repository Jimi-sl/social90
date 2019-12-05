import React from 'react';


class ChatIcon extends React.Component{
  render(){
    return (
        <li>
        <div className="chat-info">
          <div>
            <div className="profile-pic"></div>
            <span>{this.props.details.Tag}</span>
          </div>
          <span>{this.props.details.text}</span>
        <span>{this.props.details.date}</span>
        </div>
      </li>
    );
  }

}

  export default ChatIcon;