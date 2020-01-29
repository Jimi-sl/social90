import React from 'react';
//import myData from './../rsrc/chatList.json';
import Settings from './../appsettings';
import ChatIcon from './../components/ChatIcon.js';
import axios from 'axios';


const API =  Settings.baseUrl + Settings.endPoints.getChatList;


function ChatListGen(myData) {
    const data = myData.data;
      var listItems = data.map((detailsInfo) =>
      <ChatIcon details={detailsInfo} key={detailsInfo.id} />
      );
    return (
      <ul>{listItems}</ul>
    );
}

class ChatList extends React.Component{
  _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
          hits: [],
          isLoading: false,
          error: null,
        };
    }
    
    async componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true });
        var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": Settings.token
          }});
          var Obj = {
            "id" : sessionStorage.getItem("id"),
          };
              var json = JSON.stringify(Obj);
          try {
            const result = await inst.post(API,json);
            //console.log(result);
            if (this._isMounted) {
            this.setState({
              hits: result.data,
              isLoading: false
            });
          }
          } catch (error) {
            this.setState({
              error,
              isLoading: false
            });
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }
    
    render(){
       return(
        <ChatListGen data={this.state.hits}/>
      );
    }

  }

  export default ChatList;