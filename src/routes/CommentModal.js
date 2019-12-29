import React,{useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import Feed from './../components/CommentFeed';
import axios from 'axios';
import Settings from './../appsettings';





const notifyUrl = Settings.baseUrl + Settings.endPoints.setAlert;

const CommentModal = () => {
  let history = useHistory();
  let location = useLocation();
  const [formValue, setText] = useState({ text: ''});
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = Settings.baseUrl + Settings.endPoints.comment;


  let back = e => {
    e.stopPropagation();
    history.goBack();
  };
  const saveProduct = (e) => {
    setShowLoading(true);
    e.preventDefault();
    var Obj = {"text" : formValue.text, "postId" : location.state.post_id };
    var json = JSON.stringify(Obj);
    var inst = axios.create({withCredentials:true,
    headers:{
        'content-Type': 'application/json',
        "Accept":"/",
        "Authorization": Settings.token
    }});
    inst.post(apiUrl, json)
    .then((result) => {
        setShowLoading(false);
        history.goBack();
        notify(3);
    }).catch((error) => {setShowLoading(false);console.log(error)});
  };

  const onChange = (e) => {
    e.persist();
    setText({...formValue,[e.target.name]: e.target.value});
  }
  const notify = (action) => {
    var Obj = {'postId' : location.state.post_id, 'commentId': location.state.comment_id,'repostId' : location.state.repost_id, 'action': action};
    var json = JSON.stringify(Obj);
    var inst = axios.create({withCredentials:true,
    headers:{
        'content-Type': 'application/json',
        "Accept":"/",
        "Authorization": Settings.token
    }});
    inst.post(notifyUrl, json)
    .then((result) => {
      console.log(result.data);
    }).catch((error) => {console.log(error)});
  };

  return (
    <div className="modal commentModalbox" onClick={back}>
      <div className="modalPost" onClick={e => {e.stopPropagation();return false;}}>
      <div className="modalTitle"><span>Post Up! ..still</span> <svg onClick={back} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
      <div className="postCommentBox">
      <Feed data={location.state}/>
      </div>
      {showLoading && <div className="loading">
        <div>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
    <rect x="0" y="0" width="4" height="7" fill="inherit">
      <animateTransform  attributeType="xml"
        attributeName="transform" type="scale"
        values="1,1; 1,3; 1,1"
        begin="0s" dur="0.6s" repeatCount="indefinite" />       
    </rect>

    <rect x="10" y="0" width="4" height="7" fill="inherit">
      <animateTransform  attributeType="xml"
        attributeName="transform" type="scale"
        values="1,1; 1,3; 1,1"
        begin="0.2s" dur="0.6s" repeatCount="indefinite" />       
    </rect>
    <rect x="20" y="0" width="4" height="7" fill="inherit">
      <animateTransform  attributeType="xml"
        attributeName="transform" type="scale"
        values="1,1; 1,3; 1,1"
        begin="0.4s" dur="0.6s" repeatCount="indefinite" />       
    </rect>
  </svg>      
        </div>
        </div>}
      <form onSubmit={saveProduct}>
        <textarea placeholder="Say something... I'm giving up on you.." name="text" value={formValue.text} onChange={onChange}></textarea>
        <input type="submit" value="Post"/>
      </form>
      </div>
    </div>
  );
  };

  export default CommentModal;