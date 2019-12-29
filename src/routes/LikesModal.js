import React,{useState,useEffect} from 'react';
import {useHistory,NavLink,useLocation} from 'react-router-dom';
import LyncCard from './../components/LyncCard';
import axios from 'axios';
import Settings from './../appsettings';


const API =  Settings.baseUrl + Settings.endPoints.getLikes;


const LikesList = (myData) => {
  const data = myData.data;
  const listItems = data.map((detailsInfo) =>
  <LyncCard details={detailsInfo} key={detailsInfo.id} />
  );
  return (
    <ul>{listItems}</ul>
  );
}


const LikesModal = () => {
    let history = useHistory();
    let location = useLocation();
    const [data,setData] = useState({hits: [] }); 
    let back = e => {
      e.stopPropagation();
      history.push(location.state.background.pathname);
    };



    useEffect(() =>{
      const fetchData = async () => {
          var inst = axios.create({withCredentials:true,
            headers:{
                'content-Type': 'application/json',
                "Accept":"/",
                "Authorization": Settings.token
            }});
            var Obj = {"commentId" : location.state.comment_id, "postId" : location.state.post_id };
            var json = JSON.stringify(Obj);
            try {
              const result = await inst.post(API,json);
              console.log(result);
              setData({
                hits: result.data
              });
            } catch (error) {
              console.log(error);
        }
      };
      fetchData();
    },[location.state.comment_id,location.state.post_id]);

    return (
      <div className="modal commentModalbox" onClick={back}>
        <div className="modalPost" onClick={e => {e.stopPropagation();return false;}}>
        <div className="modalTitle"><span><NavLink to={{ pathname: "/Stats/Likes",state: { background: location.state.background, post_id : location.state.post_id, comment_id : location.state.comment_id, repost_id : location.state.repost_id } }}  activeClassName="active">Likes</NavLink></span><span className="RepostTab"><NavLink to={{ pathname: "/Stats/Reposts",state: { background: location.state.background, post_id : location.state.post_id, comment_id : location.state.comment_id, repost_id : location.state.repost_id } }}  activeClassName="active">Reposts</NavLink></span> <svg onClick={back} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        <div className="postCommentBox stats">
          <LikesList data={data.hits}/>
        </div>
        </div>
      </div>
    );
  };

  export default LikesModal;