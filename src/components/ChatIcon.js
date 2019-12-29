import React,{useState,useEffect} from 'react';
import {NavLink,useRouteMatch} from 'react-router-dom';


function ChatIcon(props){
  let {url} = useRouteMatch();
  const [data,setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => { 
      if(props.details !== null)   
      setData(props.details);
      else
      setData(null);  
    };
    fetchData();
  }, [props.details]);

    return (
      <React.Fragment>
        {data !== null && <li>
        <NavLink to={{ pathname: `${url}/${data.Tag}`,state: { user_id : data.user_id, receiver_id : data.receiver_id } }} activeClassName="chosen">
        <div className="chat-info">
          <div>
            <div className="profile-pic"></div>
            <span>{data.Tag}</span>
          </div>
          <span>{data.text}</span>
        <span>{data.date}</span>
        </div>
        </NavLink>
      </li>}
      </React.Fragment>
    );

}

export default ChatIcon;