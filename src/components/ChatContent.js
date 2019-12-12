import React,{useEffect,useState} from 'react';
//import myData from './../rsrc/chatContent.json';
import ChatDisplay from './../components/ChatDisplay';
import axios from 'axios';
import {Switch,Route,useLocation} from 'react-router-dom';

const API =  'http://localhost:8888/GitHub/middlewares90/api/getChat/';

function ChatContentGen(prop) {
    const [data,setData] = useState({hits:[]});
    const [formValue, setText] = useState({ text: ''});
  const apiUrl = "http://localhost:8888/GitHub/middlewares90/api/sendChat/";
    const props = useLocation();
     useEffect(() => {
      const fetchData = async () => {
          var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
          }});
          const id = props.state.receiver_id === "1" ? props.state.user_id : props.state.receiver_id;
          var Obj = {
            "receiverId" : id,
          };
          var json = JSON.stringify(Obj);
          try {
            const result = await inst.post(API,json);
            setData({hits : result.data});
          } catch (error) {
            console.log(error);
        }
      }
      fetchData();
    },[props]);
     
    const saveProduct = (e) => {
      e.preventDefault();
      const id = props.state.receiver_id === "1" ? props.state.user_id : props.state.receiver_id;
      var Obj = {
        "text" : formValue.text,
        "receiverId" : id
       };
      var json = JSON.stringify(Obj);
      var inst = axios.create({withCredentials:true,
      headers:{
          'content-Type': 'application/json',
          "Accept":"/",
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
      }});
      inst.post(apiUrl, json)
      .then((result) => {document.getElementById("messagebox").value = '';formValue.text = ''; console.log(result)})
      .catch((error) => {console.log(error)});
    };
  
    const onChange = (e) => {
      e.persist();
      setText({...formValue,[e.target.name]: e.target.value});
    }
     
    return (
     <div className="chat-content" style={prop.style}>
        <h1>Jamin</h1>
        <div>
      <ul>
      {data.hits.map((detailsInfo) =>
      <ChatDisplay details={detailsInfo} key={detailsInfo.id} />
      )}
      </ul>
      <form>
      <textarea placeholder="Reach her half way..." name="text" value={formValue.text} onChange={onChange} id="messagebox"></textarea>
      <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} className="submit-button" fill="#3f93e9" stroke="#3f93e9" stroke-width="10" onClick={saveProduct}>
<g>
	<g>
		<path d="M481.508,210.335L68.414,38.926c-17.403-7.222-37.063-4.045-51.309,8.287C2.859,59.547-3.099,78.55,1.557,96.808    L42.151,256L1.557,415.192c-4.656,18.258,1.301,37.261,15.547,49.595c14.273,12.358,33.938,15.495,51.31,8.287l413.094-171.409    C500.316,293.861,512,276.363,512,256C512,235.637,500.316,218.139,481.508,210.335z M470.009,273.955L56.916,445.364    c-6.947,2.881-14.488,1.665-20.175-3.259c-5.686-4.923-7.971-12.212-6.113-19.501L69.287,271h149.065    c8.285,0,15.001-6.716,15.001-15.001c0-8.285-6.716-15.001-15.001-15.001H69.288L30.628,89.396    c-1.858-7.288,0.427-14.578,6.113-19.501c5.686-4.923,13.225-6.141,20.174-3.259l413.094,171.409    c11.125,4.616,11.99,14.91,11.99,17.955S481.134,269.339,470.009,273.955z"/>
	</g>
</g>
</svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3f93e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
      </form>
      </div>
    </div>
    );
}

class ChatContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount(){console.log(this.props);}
    
 
    
    render(){
       return(
         <React.Fragment>
        <Switch>
        <Route exact path={this.props.path}>
        {!this.props.style && <div className="chat-content" style={this.props.style}><div className="chat-empty"><span>No message selected</span></div></div>}
        </Route>
        <Route path={`${this.props.path}/:tag`}>
        <ChatContentGen style={this.props.style}/>
      </Route>
      </Switch>
      </React.Fragment>
      );
    }

  }

  export default ChatContent;